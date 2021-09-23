// https://www.terraform.io/docs/providers/awscc/d/frauddetector_outcome.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccFrauddetectorOutcomeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/frauddetector_outcome.html#id DataAwsccFrauddetectorOutcome#id}
  */
  readonly id: string;
}
export class DataAwsccFrauddetectorOutcomeTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccFrauddetectorOutcomeTagsToTerraform(struct?: DataAwsccFrauddetectorOutcomeTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/frauddetector_outcome.html awscc_frauddetector_outcome}
*/
export class DataAwsccFrauddetectorOutcome extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_frauddetector_outcome";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/frauddetector_outcome.html awscc_frauddetector_outcome} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccFrauddetectorOutcomeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccFrauddetectorOutcomeConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_frauddetector_outcome',
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

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
