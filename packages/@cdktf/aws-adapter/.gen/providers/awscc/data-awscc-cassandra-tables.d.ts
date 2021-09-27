import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCassandraTablesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cassandra_tables.html awscc_cassandra_tables}
*/
export declare class DataAwsccCassandraTables extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cassandra_tables.html awscc_cassandra_tables} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCassandraTablesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccCassandraTablesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}