// https://www.terraform.io/docs/providers/awscc/d/route53resolver_resolver_dnssec_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccRoute53ResolverResolverDnssecConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_resolver_dnssec_config.html#id DataAwsccRoute53ResolverResolverDnssecConfig#id}
  */
  readonly id: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_resolver_dnssec_config.html awscc_route53resolver_resolver_dnssec_config}
*/
export class DataAwsccRoute53ResolverResolverDnssecConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53resolver_resolver_dnssec_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_resolver_dnssec_config.html awscc_route53resolver_resolver_dnssec_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRoute53ResolverResolverDnssecConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRoute53ResolverResolverDnssecConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53resolver_resolver_dnssec_config',
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

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // validation_status - computed: true, optional: false, required: false
  public get validationStatus() {
    return this.getStringAttribute('validation_status');
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