// https://www.terraform.io/docs/providers/awscc/d/logs_log_groups.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccLogsLogGroupsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/logs_log_groups.html awscc_logs_log_groups}
*/
export class DataAwsccLogsLogGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_logs_log_groups";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/logs_log_groups.html awscc_logs_log_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccLogsLogGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsccLogsLogGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_logs_log_groups',
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
