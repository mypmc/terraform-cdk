// https://www.terraform.io/docs/providers/awscc/d/aps_workspace.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccApsWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/aps_workspace.html#id DataAwsccApsWorkspace#id}
  */
  readonly id: string;
}
export class DataAwsccApsWorkspaceTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccApsWorkspaceTagsToTerraform(struct?: DataAwsccApsWorkspaceTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/aps_workspace.html awscc_aps_workspace}
*/
export class DataAwsccApsWorkspace extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_aps_workspace";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/aps_workspace.html awscc_aps_workspace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccApsWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccApsWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_aps_workspace',
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

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // prometheus_endpoint - computed: true, optional: false, required: false
  public get prometheusEndpoint() {
    return this.getStringAttribute('prometheus_endpoint');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
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