import { paramCase } from "change-case";
import * as fs from "fs";
import path = require("path");
import { S3Bucket, S3BucketConfig, S3BucketWebsite } from "@cdktf/provider-aws";
import { registerMapping } from "../index";

type Writeable<T> = { -readonly [P in keyof T]: T[P] };

// load all other files in this directory
fs.readdirSync(__dirname).forEach((file) => {
  if (file.endsWith(".js") && file !== "index.js") {
    require(path.resolve(__dirname, file));
  }
});

// registerMapping("AWS::KMS::Key", {
//     resource: (scope, id, props) => {
//       const policy = props.KeyPolicy;
//       delete props.KeyPolicy;
//       const desc = props.Description;
//       delete props.Description;

//       return new KmsKey(scope, id, {
//         policy: JSON.stringify(policy),
//         description: desc,
//       });
//     },
//     attributes: {
//       Ref: (key: KmsKey) => key.arn,
//       Arn: (key: KmsKey) => key.arn,
//     },
//   });

registerMapping("AWS::S3::Bucket", {
  resource: (scope, id, props) => {
    const config: Writeable<S3BucketConfig> = {};

    // versioninng
    if (props.VersioningConfiguration?.Status === "Enabled") {
      config.versioning = [{ enabled: true }];

      delete props.VersioningConfiguration;
    }

    const enc =
      props.BucketEncryption?.ServerSideEncryptionConfiguration?.[0]
        ?.ServerSideEncryptionByDefault;
    if (enc) {
      config.serverSideEncryptionConfiguration = [
        {
          rule: [
            {
              applyServerSideEncryptionByDefault: [
                {
                  sseAlgorithm: enc.SSEAlgorithm,
                  kmsMasterKeyId: enc.KMSMasterKeyID,
                },
              ],
            },
          ],
        },
      ];

      delete props.BucketEncryption;
    }

    const acl = props.AccessControl;
    delete props.AccessControl;
    if (acl) {
      config.acl = paramCase(acl);
    }

    const website = props.WebsiteConfiguration;

    if (website) {
      const websiteConfig: Writeable<S3BucketWebsite> = {};
      config.website = [websiteConfig];

      config.website = [
        {
          indexDocument: website.IndexDocument,
          errorDocument: website.ErrorDocument,
          redirectAllRequestsTo: website.RedirectAllRequestsTo
            ? (website.RedirectAllRequestsTo.Protocol
                ? website.RedirectAllRequestsTo.Protocol + "://"
                : "") + website.RedirectAllRequestsTo.HostName
            : undefined,
        },
      ];
    }

    const bucketName = props.BucketName;
    delete props.BucketName;
    if (bucketName) {
      config.bucket = bucketName;
    }

    return new S3Bucket(scope, id, config);
  },
  attributes: {},
});
