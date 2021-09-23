import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_firewall_rule_group_association.html#id DataAwsccRoute53ResolverFirewallRuleGroupAssociation#id}
    */
    readonly id: string;
}
export declare class DataAwsccRoute53ResolverFirewallRuleGroupAssociationTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsToTerraform(struct?: DataAwsccRoute53ResolverFirewallRuleGroupAssociationTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_firewall_rule_group_association.html awscc_route53resolver_firewall_rule_group_association}
*/
export declare class DataAwsccRoute53ResolverFirewallRuleGroupAssociation extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_firewall_rule_group_association.html awscc_route53resolver_firewall_rule_group_association} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig);
    get arn(): string;
    get creationTime(): string;
    get creatorRequestId(): string;
    get firewallRuleGroupId(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get managedOwnerName(): string;
    get modificationTime(): string;
    get mutationProtection(): string;
    get name(): string;
    get priority(): number;
    get status(): string;
    get statusMessage(): string;
    get tags(): any;
    get vpcId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
