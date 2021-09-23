"use strict";
// https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkfirewallFirewallPolicy = exports.networkfirewallFirewallPolicyTagsToTerraform = exports.networkfirewallFirewallPolicyFirewallPolicyToTerraform = exports.networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesToTerraform = exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsToTerraform = exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionToTerraform = exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionToTerraform = exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform = exports.networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesToTerraform = void 0;
const cdktf = require("cdktf");
function networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
    };
}
exports.networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesToTerraform = networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesToTerraform;
function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform = networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform;
function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        dimensions: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform)(struct.dimensions),
    };
}
exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionToTerraform = networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionToTerraform;
function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        publish_metric_action: networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionToTerraform(struct.publishMetricAction),
    };
}
exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionToTerraform = networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionToTerraform;
function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action_definition: networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionToTerraform(struct.actionDefinition),
        action_name: cdktf.stringToTerraform(struct.actionName),
    };
}
exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsToTerraform = networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsToTerraform;
function networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
    };
}
exports.networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesToTerraform = networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesToTerraform;
function networkfirewallFirewallPolicyFirewallPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        stateful_rule_group_references: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesToTerraform)(struct.statefulRuleGroupReferences),
        stateless_custom_actions: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsToTerraform)(struct.statelessCustomActions),
        stateless_default_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct.statelessDefaultActions),
        stateless_fragment_default_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct.statelessFragmentDefaultActions),
        stateless_rule_group_references: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesToTerraform)(struct.statelessRuleGroupReferences),
    };
}
exports.networkfirewallFirewallPolicyFirewallPolicyToTerraform = networkfirewallFirewallPolicyFirewallPolicyToTerraform;
function networkfirewallFirewallPolicyTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.networkfirewallFirewallPolicyTagsToTerraform = networkfirewallFirewallPolicyTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html awscc_networkfirewall_firewall_policy}
*/
class NetworkfirewallFirewallPolicy extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html awscc_networkfirewall_firewall_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallFirewallPolicyConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_networkfirewall_firewall_policy',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._description = config.description;
        this._firewallPolicy = config.firewallPolicy;
        this._firewallPolicyName = config.firewallPolicyName;
        this._tags = config.tags;
    }
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    get firewallPolicy() {
        return this.interpolationForAttribute('firewall_policy');
    }
    set firewallPolicy(value) {
        this._firewallPolicy = value;
    }
    // Temporarily expose input value. Use with caution.
    get firewallPolicyInput() {
        return this._firewallPolicy;
    }
    // firewall_policy_arn - computed: true, optional: false, required: false
    get firewallPolicyArn() {
        return this.getStringAttribute('firewall_policy_arn');
    }
    // firewall_policy_id - computed: true, optional: false, required: false
    get firewallPolicyId() {
        return this.getStringAttribute('firewall_policy_id');
    }
    get firewallPolicyName() {
        return this.getStringAttribute('firewall_policy_name');
    }
    set firewallPolicyName(value) {
        this._firewallPolicyName = value;
    }
    // Temporarily expose input value. Use with caution.
    get firewallPolicyNameInput() {
        return this._firewallPolicyName;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            description: cdktf.stringToTerraform(this._description),
            firewall_policy: networkfirewallFirewallPolicyFirewallPolicyToTerraform(this._firewallPolicy),
            firewall_policy_name: cdktf.stringToTerraform(this._firewallPolicyName),
            tags: cdktf.listMapper(networkfirewallFirewallPolicyTagsToTerraform)(this._tags),
        };
    }
}
exports.NetworkfirewallFirewallPolicy = NetworkfirewallFirewallPolicy;
// =================
// STATIC PROPERTIES
// =================
NetworkfirewallFirewallPolicy.tfResourceType = "awscc_networkfirewall_firewall_policy";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya2ZpcmV3YWxsLWZpcmV3YWxsLXBvbGljeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ldHdvcmtmaXJld2FsbC1maXJld2FsbC1wb2xpY3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVGQUF1RjtBQUN2RiwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUErQi9CLFNBQWdCLGlGQUFpRixDQUFDLE1BQStFO0lBQy9LLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO0tBQzNELENBQUE7QUFDSCxDQUFDO0FBTEQsOEtBS0M7QUFTRCxTQUFnQix5SEFBeUgsQ0FBQyxNQUF1SDtJQUMvUCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQUxELDhQQUtDO0FBU0QsU0FBZ0IsK0dBQStHLENBQUMsTUFBNkc7SUFDM08sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyx5SEFBeUgsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7S0FDNUssQ0FBQTtBQUNILENBQUM7QUFMRCwwT0FLQztBQVNELFNBQWdCLDRGQUE0RixDQUFDLE1BQTBGO0lBQ3JNLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FB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SUFDSixDQUFDOztBQTNISCxzRUE0SEM7QUExSEMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyw0Q0FBYyxHQUFXLHVDQUF1QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbmV0d29ya2ZpcmV3YWxsX2ZpcmV3YWxsX3BvbGljeS5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9uZXR3b3JrZmlyZXdhbGxfZmlyZXdhbGxfcG9saWN5Lmh0bWwjZGVzY3JpcHRpb24gTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3kjZGVzY3JpcHRpb259XG4gICovXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL25ldHdvcmtmaXJld2FsbF9maXJld2FsbF9wb2xpY3kuaHRtbCNmaXJld2FsbF9wb2xpY3kgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3kjZmlyZXdhbGxfcG9saWN5fVxuICAqL1xuICByZWFkb25seSBmaXJld2FsbFBvbGljeTogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9uZXR3b3JrZmlyZXdhbGxfZmlyZXdhbGxfcG9saWN5Lmh0bWwjZmlyZXdhbGxfcG9saWN5X25hbWUgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3kjZmlyZXdhbGxfcG9saWN5X25hbWV9XG4gICovXG4gIHJlYWRvbmx5IGZpcmV3YWxsUG9saWN5TmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL25ldHdvcmtmaXJld2FsbF9maXJld2FsbF9wb2xpY3kuaHRtbCN0YWdzIE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5I3RhZ3N9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3M/OiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeVRhZ3NbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlZnVsUnVsZUdyb3VwUmVmZXJlbmNlcyB7XG4gIC8qKlxuICAqIEEgcmVzb3VyY2UgQVJOLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbmV0d29ya2ZpcmV3YWxsX2ZpcmV3YWxsX3BvbGljeS5odG1sI3Jlc291cmNlX2FybiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeSNyZXNvdXJjZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IHJlc291cmNlQXJuOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVmdWxSdWxlR3JvdXBSZWZlcmVuY2VzVG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlZnVsUnVsZUdyb3VwUmVmZXJlbmNlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICByZXNvdXJjZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVzb3VyY2VBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbnNBY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbkRpbWVuc2lvbnMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL25ldHdvcmtmaXJld2FsbF9maXJld2FsbF9wb2xpY3kuaHRtbCN2YWx1ZSBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeSN2YWx1ZX1cbiAgKi9cbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25zQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb25EaW1lbnNpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbnNBY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbkRpbWVuc2lvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbnNBY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbmV0d29ya2ZpcmV3YWxsX2ZpcmV3YWxsX3BvbGljeS5odG1sI2RpbWVuc2lvbnMgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3kjZGltZW5zaW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgZGltZW5zaW9uczogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbnNBY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbkRpbWVuc2lvbnNbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25zQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uc0FjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRpbWVuc2lvbnM6IGNka3RmLmxpc3RNYXBwZXIobmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbnNBY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbkRpbWVuc2lvbnNUb1RlcnJhZm9ybSkoc3RydWN0IS5kaW1lbnNpb25zKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25zQWN0aW9uRGVmaW5pdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbmV0d29ya2ZpcmV3YWxsX2ZpcmV3YWxsX3BvbGljeS5odG1sI3B1Ymxpc2hfbWV0cmljX2FjdGlvbiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeSNwdWJsaXNoX21ldHJpY19hY3Rpb259XG4gICovXG4gIHJlYWRvbmx5IHB1Ymxpc2hNZXRyaWNBY3Rpb24/OiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uc0FjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbnNBY3Rpb25EZWZpbml0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbnNBY3Rpb25EZWZpbml0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHB1Ymxpc2hfbWV0cmljX2FjdGlvbjogbmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbnNBY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvblRvVGVycmFmb3JtKHN0cnVjdCEucHVibGlzaE1ldHJpY0FjdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9ucyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbmV0d29ya2ZpcmV3YWxsX2ZpcmV3YWxsX3BvbGljeS5odG1sI2FjdGlvbl9kZWZpbml0aW9uIE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5I2FjdGlvbl9kZWZpbml0aW9ufVxuICAqL1xuICByZWFkb25seSBhY3Rpb25EZWZpbml0aW9uOiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uc0FjdGlvbkRlZmluaXRpb247XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbmV0d29ya2ZpcmV3YWxsX2ZpcmV3YWxsX3BvbGljeS5odG1sI2FjdGlvbl9uYW1lIE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5I2FjdGlvbl9uYW1lfVxuICAqL1xuICByZWFkb25seSBhY3Rpb25OYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFjdGlvbl9kZWZpbml0aW9uOiBuZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uc0FjdGlvbkRlZmluaXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmFjdGlvbkRlZmluaXRpb24pLFxuICAgIGFjdGlvbl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjdGlvbk5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc1J1bGVHcm91cFJlZmVyZW5jZXMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL25ldHdvcmtmaXJld2FsbF9maXJld2FsbF9wb2xpY3kuaHRtbCNwcmlvcml0eSBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeSNwcmlvcml0eX1cbiAgKi9cbiAgcmVhZG9ubHkgcHJpb3JpdHk6IG51bWJlcjtcbiAgLyoqXG4gICogQSByZXNvdXJjZSBBUk4uXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9uZXR3b3JrZmlyZXdhbGxfZmlyZXdhbGxfcG9saWN5Lmh0bWwjcmVzb3VyY2VfYXJuIE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5I3Jlc291cmNlX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgcmVzb3VyY2VBcm46IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2VzVG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc1J1bGVHcm91cFJlZmVyZW5jZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcHJpb3JpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucHJpb3JpdHkpLFxuICAgIHJlc291cmNlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNvdXJjZUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5IHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9uZXR3b3JrZmlyZXdhbGxfZmlyZXdhbGxfcG9saWN5Lmh0bWwjc3RhdGVmdWxfcnVsZV9ncm91cF9yZWZlcmVuY2VzIE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5I3N0YXRlZnVsX3J1bGVfZ3JvdXBfcmVmZXJlbmNlc31cbiAgKi9cbiAgcmVhZG9ubHkgc3RhdGVmdWxSdWxlR3JvdXBSZWZlcmVuY2VzPzogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlZnVsUnVsZUdyb3VwUmVmZXJlbmNlc1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL25ldHdvcmtmaXJld2FsbF9maXJld2FsbF9wb2xpY3kuaHRtbCNzdGF0ZWxlc3NfY3VzdG9tX2FjdGlvbnMgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3kjc3RhdGVsZXNzX2N1c3RvbV9hY3Rpb25zfVxuICAqL1xuICByZWFkb25seSBzdGF0ZWxlc3NDdXN0b21BY3Rpb25zPzogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbnNbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9uZXR3b3JrZmlyZXdhbGxfZmlyZXdhbGxfcG9saWN5Lmh0bWwjc3RhdGVsZXNzX2RlZmF1bHRfYWN0aW9ucyBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeSNzdGF0ZWxlc3NfZGVmYXVsdF9hY3Rpb25zfVxuICAqL1xuICByZWFkb25seSBzdGF0ZWxlc3NEZWZhdWx0QWN0aW9uczogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbmV0d29ya2ZpcmV3YWxsX2ZpcmV3YWxsX3BvbGljeS5odG1sI3N0YXRlbGVzc19mcmFnbWVudF9kZWZhdWx0X2FjdGlvbnMgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3kjc3RhdGVsZXNzX2ZyYWdtZW50X2RlZmF1bHRfYWN0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgc3RhdGVsZXNzRnJhZ21lbnREZWZhdWx0QWN0aW9uczogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbmV0d29ya2ZpcmV3YWxsX2ZpcmV3YWxsX3BvbGljeS5odG1sI3N0YXRlbGVzc19ydWxlX2dyb3VwX3JlZmVyZW5jZXMgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3kjc3RhdGVsZXNzX3J1bGVfZ3JvdXBfcmVmZXJlbmNlc31cbiAgKi9cbiAgcmVhZG9ubHkgc3RhdGVsZXNzUnVsZUdyb3VwUmVmZXJlbmNlcz86IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2VzW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5VG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzdGF0ZWZ1bF9ydWxlX2dyb3VwX3JlZmVyZW5jZXM6IGNka3RmLmxpc3RNYXBwZXIobmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlZnVsUnVsZUdyb3VwUmVmZXJlbmNlc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnN0YXRlZnVsUnVsZUdyb3VwUmVmZXJlbmNlcyksXG4gICAgc3RhdGVsZXNzX2N1c3RvbV9hY3Rpb25zOiBjZGt0Zi5saXN0TWFwcGVyKG5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25zVG9UZXJyYWZvcm0pKHN0cnVjdCEuc3RhdGVsZXNzQ3VzdG9tQWN0aW9ucyksXG4gICAgc3RhdGVsZXNzX2RlZmF1bHRfYWN0aW9uczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zdGF0ZWxlc3NEZWZhdWx0QWN0aW9ucyksXG4gICAgc3RhdGVsZXNzX2ZyYWdtZW50X2RlZmF1bHRfYWN0aW9uczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zdGF0ZWxlc3NGcmFnbWVudERlZmF1bHRBY3Rpb25zKSxcbiAgICBzdGF0ZWxlc3NfcnVsZV9ncm91cF9yZWZlcmVuY2VzOiBjZGt0Zi5saXN0TWFwcGVyKG5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2VzVG9UZXJyYWZvcm0pKHN0cnVjdCEuc3RhdGVsZXNzUnVsZUdyb3VwUmVmZXJlbmNlcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeVRhZ3Mge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL25ldHdvcmtmaXJld2FsbF9maXJld2FsbF9wb2xpY3kuaHRtbCNrZXkgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3kja2V5fVxuICAqL1xuICByZWFkb25seSBrZXk6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9uZXR3b3JrZmlyZXdhbGxfZmlyZXdhbGxfcG9saWN5Lmh0bWwjdmFsdWUgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3kjdmFsdWV9XG4gICovXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeVRhZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeVRhZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbmV0d29ya2ZpcmV3YWxsX2ZpcmV3YWxsX3BvbGljeS5odG1sIGF3c2NjX25ldHdvcmtmaXJld2FsbF9maXJld2FsbF9wb2xpY3l9XG4qL1xuZXhwb3J0IGNsYXNzIE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2NfbmV0d29ya2ZpcmV3YWxsX2ZpcmV3YWxsX3BvbGljeVwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9uZXR3b3JrZmlyZXdhbGxfZmlyZXdhbGxfcG9saWN5Lmh0bWwgYXdzY2NfbmV0d29ya2ZpcmV3YWxsX2ZpcmV3YWxsX3BvbGljeX0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c2NjX25ldHdvcmtmaXJld2FsbF9maXJld2FsbF9wb2xpY3knLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGNvbmZpZy5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLl9maXJld2FsbFBvbGljeSA9IGNvbmZpZy5maXJld2FsbFBvbGljeTtcbiAgICB0aGlzLl9maXJld2FsbFBvbGljeU5hbWUgPSBjb25maWcuZmlyZXdhbGxQb2xpY3lOYW1lO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXNjcmlwdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlc2NyaXB0aW9uKCkge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvblxuICB9XG5cbiAgLy8gZmlyZXdhbGxfcG9saWN5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2ZpcmV3YWxsUG9saWN5OiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5O1xuICBwdWJsaWMgZ2V0IGZpcmV3YWxsUG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2ZpcmV3YWxsX3BvbGljeScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGZpcmV3YWxsUG9saWN5KHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5KSB7XG4gICAgdGhpcy5fZmlyZXdhbGxQb2xpY3kgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlyZXdhbGxQb2xpY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlyZXdhbGxQb2xpY3lcbiAgfVxuXG4gIC8vIGZpcmV3YWxsX3BvbGljeV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmaXJld2FsbFBvbGljeUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZpcmV3YWxsX3BvbGljeV9hcm4nKTtcbiAgfVxuXG4gIC8vIGZpcmV3YWxsX3BvbGljeV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZpcmV3YWxsUG9saWN5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmaXJld2FsbF9wb2xpY3lfaWQnKTtcbiAgfVxuXG4gIC8vIGZpcmV3YWxsX3BvbGljeV9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2ZpcmV3YWxsUG9saWN5TmFtZTogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGZpcmV3YWxsUG9saWN5TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZpcmV3YWxsX3BvbGljeV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBmaXJld2FsbFBvbGljeU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZpcmV3YWxsUG9saWN5TmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaXJld2FsbFBvbGljeU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlyZXdhbGxQb2xpY3lOYW1lXG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5VGFnc1tdO1xuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5VGFnc1tdICkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBkZXNjcmlwdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGVzY3JpcHRpb24pLFxuICAgICAgZmlyZXdhbGxfcG9saWN5OiBuZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5VG9UZXJyYWZvcm0odGhpcy5fZmlyZXdhbGxQb2xpY3kpLFxuICAgICAgZmlyZXdhbGxfcG9saWN5X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2ZpcmV3YWxsUG9saWN5TmFtZSksXG4gICAgICB0YWdzOiBjZGt0Zi5saXN0TWFwcGVyKG5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5VGFnc1RvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICB9O1xuICB9XG59XG4iXX0=