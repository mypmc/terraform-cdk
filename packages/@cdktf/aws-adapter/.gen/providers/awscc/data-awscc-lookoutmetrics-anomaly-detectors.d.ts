import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLookoutmetricsAnomalyDetectorsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/lookoutmetrics_anomaly_detectors.html awscc_lookoutmetrics_anomaly_detectors}
*/
export declare class DataAwsccLookoutmetricsAnomalyDetectors extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/lookoutmetrics_anomaly_detectors.html awscc_lookoutmetrics_anomaly_detectors} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLookoutmetricsAnomalyDetectorsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccLookoutmetricsAnomalyDetectorsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
