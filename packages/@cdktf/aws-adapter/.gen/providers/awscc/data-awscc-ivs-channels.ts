// https://www.terraform.io/docs/providers/awscc/d/ivs_channels.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccIvsChannelsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ivs_channels.html awscc_ivs_channels}
*/
export class DataAwsccIvsChannels extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ivs_channels";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ivs_channels.html awscc_ivs_channels} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIvsChannelsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIvsChannelsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_ivs_channels',
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
