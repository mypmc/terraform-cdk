import createDebug from "debug";
import { Mapping, registerMapping } from "../index";
import * as awscc from "../../../.gen/providers/awscc";
import { awsccNameMap } from "../../awscc_schemas/awscc-name-map";
import { TerraformResource } from "cdktf";
import { convertCloudFormationPropertyToCDKTFAttribute } from "./util";

const debug = createDebug("tf-aws-adapter:awscc:debug");
const trace = createDebug("tf-aws-adapter:awscc:trace");

type Override<T extends TerraformResource> = {
  attributes?: Partial<Mapping<T>["attributes"]>;
  props?: {
    beforeMapping?: (cfnProps: any) => void; // e.g. allows to (in place) remove props before they are mapped to CDKTF naming
    afterMapping?: (cdktfProps: any) => void; // allows to (in place) add defaults after props have been converted to CDKTF naming (e.g. if a prop is required in TF but not in CF)
  };
};

const overrides: {
  [cfnName: string]: Override<any> | undefined;
} = {
  // FIXME: add function to register these, and export that function aswell
  "AWS::CloudFront::Distribution": {
    attributes: {
      Ref: (res: awscc.CloudfrontDistribution) => res.id,
      Arn: (res: awscc.CloudfrontDistribution) => {
        throw new Error("Cloudfront Distributions have no Arn");
      },
    },
  },
  // "AWS::Lambda::Function": {
  //   props: {
  //     beforeMapping: (props: { code: any }) => {
  //       if (props.code) {
  //         if (typeof props.code?.ZipFile !== 'string') {
  //           throw new Error('AWS::Lambda::Function > Code currently only supports ZipFile')
  //         }
  //         props.code = props.code.ZipFile;
  //       }

  //     }
  //   }
  // }
};

const resources = Object.entries(awscc)
  .filter(
    ([_key, entry]) =>
      !(entry as any).name.startsWith("DataAwscc") && // exclude datasources – there's no good way to inspect the constructor
      typeof (entry as any).tfResourceType === "string" &&
      (entry as any).tfResourceType !== "awscc" // exclude provider with name "awscc"
  )
  .map(([_key, entry]) => [(entry as any).tfResourceType, entry]);
const resourceMap = Object.fromEntries(resources);

Object.entries(awsccNameMap).forEach(([tfName, cfnName]) => {
  const Resource = resourceMap[tfName];

  if (Resource) {
    trace(`auto mapping ${cfnName} => ${tfName} (${Resource.name})`);

    const override = overrides[cfnName];
    registerMapping(cfnName, {
      resource: (scope, id, props) => {
        trace(
          `original (cfn) props for awscc Resource ${
            Resource.name
          }: ${JSON.stringify(props, null, 2)}`
        );

        override?.props?.beforeMapping?.(props);

        const convertedProps: { [key: string]: any } = {};

        Object.entries(props).forEach(([cfnAttribute, value]) => {
          const tfAttr =
            convertCloudFormationPropertyToCDKTFAttribute(cfnAttribute);
          // FIXME: also convert properties of values (recursively!)

          function convertObjectKeys(value: any): any {
            if (typeof value === "object" && value !== null) {
              Object.keys(value).forEach((key) => {
                const tfKey =
                  convertCloudFormationPropertyToCDKTFAttribute(key);
                value[tfKey] = convertObjectKeys(value[key]);
                delete value[key];
              });
            }
            return value;
          }

          convertedProps[tfAttr] = convertObjectKeys(value);
          delete props[cfnAttribute];
          // TODO: allow overrides
        });

        override?.props?.afterMapping?.(props);

        debug(
          `converted props for awscc Resource ${
            Resource.name
          }: ${JSON.stringify(convertedProps, null, 2)}`
        );

        return new Resource(scope, id, convertedProps) as TerraformResource;
      },
      attributes: {
        Arn: (res: any) => res.arn, // TODO: this can fail, catch inside of function? we could check for undefined first
        Ref: (res: any) => res.id, // TODO: this can fail too
        ...override?.attributes,
      },
    });
  } else {
    trace(
      `no auto mapping found for ${cfnName}. It probably was skipped in awscc provider generation`
    );
  }
});
