import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRoute53ResolverResolverDnssecConfigsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_resolver_dnssec_configs.html awscc_route53resolver_resolver_dnssec_configs}
*/
export declare class DataAwsccRoute53ResolverResolverDnssecConfigs extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_resolver_dnssec_configs.html awscc_route53resolver_resolver_dnssec_configs} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRoute53ResolverResolverDnssecConfigsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccRoute53ResolverResolverDnssecConfigsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
