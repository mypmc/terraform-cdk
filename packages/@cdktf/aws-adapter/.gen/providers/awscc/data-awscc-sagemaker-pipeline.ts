// https://www.terraform.io/docs/providers/awscc/d/sagemaker_pipeline.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccSagemakerPipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_pipeline.html#id DataAwsccSagemakerPipeline#id}
  */
  readonly id: string;
}
export class DataAwsccSagemakerPipelineTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccSagemakerPipelineTagsToTerraform(struct?: DataAwsccSagemakerPipelineTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_pipeline.html awscc_sagemaker_pipeline}
*/
export class DataAwsccSagemakerPipeline extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_pipeline";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_pipeline.html awscc_sagemaker_pipeline} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_pipeline',
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

  // pipeline_definition - computed: true, optional: false, required: false
  public pipelineDefinition(key: string): string {
    return new cdktf.StringMap(this, 'pipeline_definition').lookup(key);
  }

  // pipeline_description - computed: true, optional: false, required: false
  public get pipelineDescription() {
    return this.getStringAttribute('pipeline_description');
  }

  // pipeline_display_name - computed: true, optional: false, required: false
  public get pipelineDisplayName() {
    return this.getStringAttribute('pipeline_display_name');
  }

  // pipeline_name - computed: true, optional: false, required: false
  public get pipelineName() {
    return this.getStringAttribute('pipeline_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
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
