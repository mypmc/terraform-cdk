// https://www.terraform.io/docs/providers/awscc/d/route53resolver_resolver_dnssec_configs.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccRoute53ResolverResolverDnssecConfigsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_resolver_dnssec_configs.html awscc_route53resolver_resolver_dnssec_configs}
*/
export class DataAwsccRoute53ResolverResolverDnssecConfigs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53resolver_resolver_dnssec_configs";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_resolver_dnssec_configs.html awscc_route53resolver_resolver_dnssec_configs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRoute53ResolverResolverDnssecConfigsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRoute53ResolverResolverDnssecConfigsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53resolver_resolver_dnssec_configs',
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