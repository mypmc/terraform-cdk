import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCloudformationPublisherConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_publisher.html#id DataAwsccCloudformationPublisher#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_publisher.html awscc_cloudformation_publisher}
*/
export declare class DataAwsccCloudformationPublisher extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_publisher.html awscc_cloudformation_publisher} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudformationPublisherConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCloudformationPublisherConfig);
    get acceptTermsAndConditions(): cdktf.IResolvable;
    get connectionArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get identityProvider(): string;
    get publisherId(): string;
    get publisherProfile(): string;
    get publisherStatus(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
