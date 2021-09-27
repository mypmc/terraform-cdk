import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccAthenaNamedQueryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/athena_named_query.html#id DataAwsccAthenaNamedQuery#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/athena_named_query.html awscc_athena_named_query}
*/
export declare class DataAwsccAthenaNamedQuery extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/athena_named_query.html awscc_athena_named_query} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccAthenaNamedQueryConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccAthenaNamedQueryConfig);
    get database(): string;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get namedQueryId(): string;
    get queryString(): string;
    get workGroup(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}