import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCustomerprofilesDomainsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/customerprofiles_domains.html awscc_customerprofiles_domains}
*/
export declare class DataAwsccCustomerprofilesDomains extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/customerprofiles_domains.html awscc_customerprofiles_domains} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCustomerprofilesDomainsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccCustomerprofilesDomainsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
