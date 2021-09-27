import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEmrcontainersVirtualClustersConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/emrcontainers_virtual_clusters.html awscc_emrcontainers_virtual_clusters}
*/
export declare class DataAwsccEmrcontainersVirtualClusters extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/emrcontainers_virtual_clusters.html awscc_emrcontainers_virtual_clusters} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEmrcontainersVirtualClustersConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccEmrcontainersVirtualClustersConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}