// https://www.terraform.io/docs/providers/awscc/d/elasticache_user_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccElasticacheUserGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/elasticache_user_group.html#id DataAwsccElasticacheUserGroup#id}
  */
  readonly id: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/elasticache_user_group.html awscc_elasticache_user_group}
*/
export class DataAwsccElasticacheUserGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_elasticache_user_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/elasticache_user_group.html awscc_elasticache_user_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccElasticacheUserGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccElasticacheUserGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_elasticache_user_group',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // user_group_id - computed: true, optional: false, required: false
  public get userGroupId() {
    return this.getStringAttribute('user_group_id');
  }

  // user_ids - computed: true, optional: false, required: false
  public get userIds() {
    return this.getListAttribute('user_ids');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
