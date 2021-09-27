import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCodeartifactDomainsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/codeartifact_domains.html awscc_codeartifact_domains}
*/
export declare class DataAwsccCodeartifactDomains extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/codeartifact_domains.html awscc_codeartifact_domains} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCodeartifactDomainsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccCodeartifactDomainsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}