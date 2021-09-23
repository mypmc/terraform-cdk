import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccKendraIndicesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/kendra_indices.html awscc_kendra_indices}
*/
export declare class DataAwsccKendraIndices extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/kendra_indices.html awscc_kendra_indices} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccKendraIndicesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccKendraIndicesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
