import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRoute53HealthChecksConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53_health_checks.html awscc_route53_health_checks}
*/
export declare class DataAwsccRoute53HealthChecks extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53_health_checks.html awscc_route53_health_checks} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRoute53HealthChecksConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccRoute53HealthChecksConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}