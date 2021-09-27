import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCloudfrontOriginRequestPoliciesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_origin_request_policies.html awscc_cloudfront_origin_request_policies}
*/
export declare class DataAwsccCloudfrontOriginRequestPolicies extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_origin_request_policies.html awscc_cloudfront_origin_request_policies} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudfrontOriginRequestPoliciesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccCloudfrontOriginRequestPoliciesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}