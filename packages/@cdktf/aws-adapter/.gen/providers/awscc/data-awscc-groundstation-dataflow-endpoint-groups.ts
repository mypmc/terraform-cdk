// https://www.terraform.io/docs/providers/awscc/d/groundstation_dataflow_endpoint_groups.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccGroundstationDataflowEndpointGroupsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/groundstation_dataflow_endpoint_groups.html awscc_groundstation_dataflow_endpoint_groups}
*/
export class DataAwsccGroundstationDataflowEndpointGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_groundstation_dataflow_endpoint_groups";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/groundstation_dataflow_endpoint_groups.html awscc_groundstation_dataflow_endpoint_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccGroundstationDataflowEndpointGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsccGroundstationDataflowEndpointGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_groundstation_dataflow_endpoint_groups',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}