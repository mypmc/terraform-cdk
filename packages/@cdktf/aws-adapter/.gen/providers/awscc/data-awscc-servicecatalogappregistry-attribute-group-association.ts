// https://www.terraform.io/docs/providers/awscc/d/servicecatalogappregistry_attribute_group_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccServicecatalogappregistryAttributeGroupAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalogappregistry_attribute_group_association.html#id DataAwsccServicecatalogappregistryAttributeGroupAssociation#id}
  */
  readonly id: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalogappregistry_attribute_group_association.html awscc_servicecatalogappregistry_attribute_group_association}
*/
export class DataAwsccServicecatalogappregistryAttributeGroupAssociation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_servicecatalogappregistry_attribute_group_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalogappregistry_attribute_group_association.html awscc_servicecatalogappregistry_attribute_group_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccServicecatalogappregistryAttributeGroupAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccServicecatalogappregistryAttributeGroupAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_servicecatalogappregistry_attribute_group_association',
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

  // application - computed: true, optional: false, required: false
  public get application() {
    return this.getStringAttribute('application');
  }

  // application_arn - computed: true, optional: false, required: false
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }

  // attribute_group - computed: true, optional: false, required: false
  public get attributeGroup() {
    return this.getStringAttribute('attribute_group');
  }

  // attribute_group_arn - computed: true, optional: false, required: false
  public get attributeGroupArn() {
    return this.getStringAttribute('attribute_group_arn');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}