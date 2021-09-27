import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotMitigationActionConfig extends cdktf.TerraformMetaArguments {
    /**
    * A unique identifier for the mitigation action.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#action_name IotMitigationAction#action_name}
    */
    readonly actionName?: string;
    /**
    * The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#action_params IotMitigationAction#action_params}
    */
    readonly actionParams: IotMitigationActionActionParams;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#role_arn IotMitigationAction#role_arn}
    */
    readonly roleArn: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#tags IotMitigationAction#tags}
    */
    readonly tags?: IotMitigationActionTags[];
}
export interface IotMitigationActionActionParamsAddThingsToThingGroupParams {
    /**
    * Specifies if this mitigation action can move the things that triggered the mitigation action out of one or more dynamic thing groups.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#override_dynamic_groups IotMitigationAction#override_dynamic_groups}
    */
    readonly overrideDynamicGroups?: boolean | cdktf.IResolvable;
    /**
    * The list of groups to which you want to add the things that triggered the mitigation action.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#thing_group_names IotMitigationAction#thing_group_names}
    */
    readonly thingGroupNames: string[];
}
export declare function iotMitigationActionActionParamsAddThingsToThingGroupParamsToTerraform(struct?: IotMitigationActionActionParamsAddThingsToThingGroupParams): any;
export interface IotMitigationActionActionParamsEnableIoTLoggingParams {
    /**
    *  Specifies which types of information are logged.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#log_level IotMitigationAction#log_level}
    */
    readonly logLevel: string;
    /**
    *  The ARN of the IAM role used for logging.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#role_arn_for_logging IotMitigationAction#role_arn_for_logging}
    */
    readonly roleArnForLogging: string;
}
export declare function iotMitigationActionActionParamsEnableIoTLoggingParamsToTerraform(struct?: IotMitigationActionActionParamsEnableIoTLoggingParams): any;
export interface IotMitigationActionActionParamsPublishFindingToSnsParams {
    /**
    * The ARN of the topic to which you want to publish the findings.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#topic_arn IotMitigationAction#topic_arn}
    */
    readonly topicArn: string;
}
export declare function iotMitigationActionActionParamsPublishFindingToSnsParamsToTerraform(struct?: IotMitigationActionActionParamsPublishFindingToSnsParams): any;
export interface IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#template_name IotMitigationAction#template_name}
    */
    readonly templateName: string;
}
export declare function iotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsToTerraform(struct?: IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams): any;
export interface IotMitigationActionActionParamsUpdateCaCertificateParams {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#action IotMitigationAction#action}
    */
    readonly action: string;
}
export declare function iotMitigationActionActionParamsUpdateCaCertificateParamsToTerraform(struct?: IotMitigationActionActionParamsUpdateCaCertificateParams): any;
export interface IotMitigationActionActionParamsUpdateDeviceCertificateParams {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#action IotMitigationAction#action}
    */
    readonly action: string;
}
export declare function iotMitigationActionActionParamsUpdateDeviceCertificateParamsToTerraform(struct?: IotMitigationActionActionParamsUpdateDeviceCertificateParams): any;
export interface IotMitigationActionActionParams {
    /**
    * Parameters to define a mitigation action that moves devices associated with a certificate to one or more specified thing groups, typically for quarantine.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#add_things_to_thing_group_params IotMitigationAction#add_things_to_thing_group_params}
    */
    readonly addThingsToThingGroupParams?: IotMitigationActionActionParamsAddThingsToThingGroupParams;
    /**
    * Parameters to define a mitigation action that enables AWS IoT logging at a specified level of detail.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#enable_io_t_logging_params IotMitigationAction#enable_io_t_logging_params}
    */
    readonly enableIoTLoggingParams?: IotMitigationActionActionParamsEnableIoTLoggingParams;
    /**
    * Parameters, to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#publish_finding_to_sns_params IotMitigationAction#publish_finding_to_sns_params}
    */
    readonly publishFindingToSnsParams?: IotMitigationActionActionParamsPublishFindingToSnsParams;
    /**
    * Parameters to define a mitigation action that adds a blank policy to restrict permissions.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#replace_default_policy_version_params IotMitigationAction#replace_default_policy_version_params}
    */
    readonly replaceDefaultPolicyVersionParams?: IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams;
    /**
    * Parameters to define a mitigation action that changes the state of the CA certificate to inactive.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#update_ca_certificate_params IotMitigationAction#update_ca_certificate_params}
    */
    readonly updateCaCertificateParams?: IotMitigationActionActionParamsUpdateCaCertificateParams;
    /**
    * Parameters to define a mitigation action that changes the state of the device certificate to inactive.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#update_device_certificate_params IotMitigationAction#update_device_certificate_params}
    */
    readonly updateDeviceCertificateParams?: IotMitigationActionActionParamsUpdateDeviceCertificateParams;
}
export declare function iotMitigationActionActionParamsToTerraform(struct?: IotMitigationActionActionParams): any;
export interface IotMitigationActionTags {
    /**
    * The tag's key.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#key IotMitigationAction#key}
    */
    readonly key: string;
    /**
    * The tag's value.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#value IotMitigationAction#value}
    */
    readonly value: string;
}
export declare function iotMitigationActionTagsToTerraform(struct?: IotMitigationActionTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html awscc_iot_mitigation_action}
*/
export declare class IotMitigationAction extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html awscc_iot_mitigation_action} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotMitigationActionConfig
    */
    constructor(scope: Construct, id: string, config: IotMitigationActionConfig);
    private _actionName?;
    get actionName(): string;
    set actionName(value: string);
    resetActionName(): void;
    get actionNameInput(): string | undefined;
    private _actionParams;
    get actionParams(): IotMitigationActionActionParams;
    set actionParams(value: IotMitigationActionActionParams);
    get actionParamsInput(): IotMitigationActionActionParams;
    get id(): string;
    get mitigationActionArn(): string;
    get mitigationActionId(): string;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _tags?;
    get tags(): IotMitigationActionTags[];
    set tags(value: IotMitigationActionTags[]);
    resetTags(): void;
    get tagsInput(): IotMitigationActionTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}