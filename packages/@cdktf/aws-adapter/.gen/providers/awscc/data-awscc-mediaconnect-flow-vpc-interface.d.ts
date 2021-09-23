import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccMediaconnectFlowVpcInterfaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flow_vpc_interface.html#id DataAwsccMediaconnectFlowVpcInterface#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flow_vpc_interface.html awscc_mediaconnect_flow_vpc_interface}
*/
export declare class DataAwsccMediaconnectFlowVpcInterface extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flow_vpc_interface.html awscc_mediaconnect_flow_vpc_interface} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccMediaconnectFlowVpcInterfaceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccMediaconnectFlowVpcInterfaceConfig);
    get flowArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get networkInterfaceIds(): string[];
    get roleArn(): string;
    get securityGroupIds(): string[];
    get subnetId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
