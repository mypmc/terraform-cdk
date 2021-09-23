import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccMwaaEnvironmentsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/mwaa_environments.html awscc_mwaa_environments}
*/
export declare class DataAwsccMwaaEnvironments extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/mwaa_environments.html awscc_mwaa_environments} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccMwaaEnvironmentsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccMwaaEnvironmentsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
