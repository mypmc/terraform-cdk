// https://www.terraform.io/docs/providers/awscc/d/ec2_local_gateway_route_table_vpc_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_local_gateway_route_table_vpc_association.html#id DataAwsccEc2LocalGatewayRouteTableVpcAssociation#id}
  */
  readonly id: string;
}
export class DataAwsccEc2LocalGatewayRouteTableVpcAssociationTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsToTerraform(struct?: DataAwsccEc2LocalGatewayRouteTableVpcAssociationTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_local_gateway_route_table_vpc_association.html awscc_ec2_local_gateway_route_table_vpc_association}
*/
export class DataAwsccEc2LocalGatewayRouteTableVpcAssociation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_local_gateway_route_table_vpc_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_local_gateway_route_table_vpc_association.html awscc_ec2_local_gateway_route_table_vpc_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_local_gateway_route_table_vpc_association',
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

  // local_gateway_id - computed: true, optional: false, required: false
  public get localGatewayId() {
    return this.getStringAttribute('local_gateway_id');
  }

  // local_gateway_route_table_id - computed: true, optional: false, required: false
  public get localGatewayRouteTableId() {
    return this.getStringAttribute('local_gateway_route_table_id');
  }

  // local_gateway_route_table_vpc_association_id - computed: true, optional: false, required: false
  public get localGatewayRouteTableVpcAssociationId() {
    return this.getStringAttribute('local_gateway_route_table_vpc_association_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
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