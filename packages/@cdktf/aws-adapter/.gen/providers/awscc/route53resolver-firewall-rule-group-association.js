"use strict";
// https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group_association.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route53ResolverFirewallRuleGroupAssociation = exports.route53ResolverFirewallRuleGroupAssociationTagsToTerraform = void 0;
const cdktf = require("cdktf");
function route53ResolverFirewallRuleGroupAssociationTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.route53ResolverFirewallRuleGroupAssociationTagsToTerraform = route53ResolverFirewallRuleGroupAssociationTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group_association.html awscc_route53resolver_firewall_rule_group_association}
*/
class Route53ResolverFirewallRuleGroupAssociation extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group_association.html awscc_route53resolver_firewall_rule_group_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverFirewallRuleGroupAssociationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_route53resolver_firewall_rule_group_association',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._firewallRuleGroupId = config.firewallRuleGroupId;
        this._mutationProtection = config.mutationProtection;
        this._name = config.name;
        this._priority = config.priority;
        this._tags = config.tags;
        this._vpcId = config.vpcId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // creation_time - computed: true, optional: false, required: false
    get creationTime() {
        return this.getStringAttribute('creation_time');
    }
    // creator_request_id - computed: true, optional: false, required: false
    get creatorRequestId() {
        return this.getStringAttribute('creator_request_id');
    }
    get firewallRuleGroupId() {
        return this.getStringAttribute('firewall_rule_group_id');
    }
    set firewallRuleGroupId(value) {
        this._firewallRuleGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    get firewallRuleGroupIdInput() {
        return this._firewallRuleGroupId;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // managed_owner_name - computed: true, optional: false, required: false
    get managedOwnerName() {
        return this.getStringAttribute('managed_owner_name');
    }
    // modification_time - computed: true, optional: false, required: false
    get modificationTime() {
        return this.getStringAttribute('modification_time');
    }
    get mutationProtection() {
        return this.getStringAttribute('mutation_protection');
    }
    set mutationProtection(value) {
        this._mutationProtection = value;
    }
    resetMutationProtection() {
        this._mutationProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mutationProtectionInput() {
        return this._mutationProtection;
    }
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    get priority() {
        return this.getNumberAttribute('priority');
    }
    set priority(value) {
        this._priority = value;
    }
    // Temporarily expose input value. Use with caution.
    get priorityInput() {
        return this._priority;
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // status_message - computed: true, optional: false, required: false
    get statusMessage() {
        return this.getStringAttribute('status_message');
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
    get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    set vpcId(value) {
        this._vpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    get vpcIdInput() {
        return this._vpcId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            firewall_rule_group_id: cdktf.stringToTerraform(this._firewallRuleGroupId),
            mutation_protection: cdktf.stringToTerraform(this._mutationProtection),
            name: cdktf.stringToTerraform(this._name),
            priority: cdktf.numberToTerraform(this._priority),
            tags: cdktf.listMapper(route53ResolverFirewallRuleGroupAssociationTagsToTerraform)(this._tags),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
        };
    }
}
exports.Route53ResolverFirewallRuleGroupAssociation = Route53ResolverFirewallRuleGroupAssociation;
// =================
// STATIC PROPERTIES
// =================
Route53ResolverFirewallRuleGroupAssociation.tfResourceType = "awscc_route53resolver_firewall_rule_group_association";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGU1M3Jlc29sdmVyLWZpcmV3YWxsLXJ1bGUtZ3JvdXAtYXNzb2NpYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb3V0ZTUzcmVzb2x2ZXItZmlyZXdhbGwtcnVsZS1ncm91cC1hc3NvY2lhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUdBQXVHO0FBQ3ZHLDJDQUEyQzs7O0FBRzNDLCtCQUErQjtBQXlEL0IsU0FBZ0IsMERBQTBELENBQUMsTUFBd0Q7SUFDakksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7UUFDekMsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBTkQsZ0lBTUM7QUFHRDs7RUFFRTtBQUNGLE1BQWEsMkNBQTRDLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQU90RixjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUF5RDtRQUN4RyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLHVEQUF1RDtZQUM5RSwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLE9BQU87YUFDdEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxt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QUksQ0FBQyxLQUFLLENBQUM7WUFDekMsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2pELElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDBEQUEwRCxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM5RixNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDN0MsQ0FBQztJQUNKLENBQUM7O0FBckxILGtHQXNMQztBQXBMQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLDBEQUFjLEdBQVcsdURBQXVELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9yb3V0ZTUzcmVzb2x2ZXJfZmlyZXdhbGxfcnVsZV9ncm91cF9hc3NvY2lhdGlvbi5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGU1M1Jlc29sdmVyRmlyZXdhbGxSdWxlR3JvdXBBc3NvY2lhdGlvbkNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBGaXJld2FsbFJ1bGVHcm91cElkXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9yb3V0ZTUzcmVzb2x2ZXJfZmlyZXdhbGxfcnVsZV9ncm91cF9hc3NvY2lhdGlvbi5odG1sI2ZpcmV3YWxsX3J1bGVfZ3JvdXBfaWQgUm91dGU1M1Jlc29sdmVyRmlyZXdhbGxSdWxlR3JvdXBBc3NvY2lhdGlvbiNmaXJld2FsbF9ydWxlX2dyb3VwX2lkfVxuICAqL1xuICByZWFkb25seSBmaXJld2FsbFJ1bGVHcm91cElkOiBzdHJpbmc7XG4gIC8qKlxuICAqIE11dGF0aW9uUHJvdGVjdGlvblN0YXR1c1xuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivcm91dGU1M3Jlc29sdmVyX2ZpcmV3YWxsX3J1bGVfZ3JvdXBfYXNzb2NpYXRpb24uaHRtbCNtdXRhdGlvbl9wcm90ZWN0aW9uIFJvdXRlNTNSZXNvbHZlckZpcmV3YWxsUnVsZUdyb3VwQXNzb2NpYXRpb24jbXV0YXRpb25fcHJvdGVjdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgbXV0YXRpb25Qcm90ZWN0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBGaXJld2FsbFJ1bGVHcm91cEFzc29jaWF0aW9uTmFtZVxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivcm91dGU1M3Jlc29sdmVyX2ZpcmV3YWxsX3J1bGVfZ3JvdXBfYXNzb2NpYXRpb24uaHRtbCNuYW1lIFJvdXRlNTNSZXNvbHZlckZpcmV3YWxsUnVsZUdyb3VwQXNzb2NpYXRpb24jbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogUHJpb3JpdHlcbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3JvdXRlNTNyZXNvbHZlcl9maXJld2FsbF9ydWxlX2dyb3VwX2Fzc29jaWF0aW9uLmh0bWwjcHJpb3JpdHkgUm91dGU1M1Jlc29sdmVyRmlyZXdhbGxSdWxlR3JvdXBBc3NvY2lhdGlvbiNwcmlvcml0eX1cbiAgKi9cbiAgcmVhZG9ubHkgcHJpb3JpdHk6IG51bWJlcjtcbiAgLyoqXG4gICogVGFnc1xuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivcm91dGU1M3Jlc29sdmVyX2ZpcmV3YWxsX3J1bGVfZ3JvdXBfYXNzb2NpYXRpb24uaHRtbCN0YWdzIFJvdXRlNTNSZXNvbHZlckZpcmV3YWxsUnVsZUdyb3VwQXNzb2NpYXRpb24jdGFnc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFncz86IFJvdXRlNTNSZXNvbHZlckZpcmV3YWxsUnVsZUdyb3VwQXNzb2NpYXRpb25UYWdzW107XG4gIC8qKlxuICAqIFZwY0lkXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9yb3V0ZTUzcmVzb2x2ZXJfZmlyZXdhbGxfcnVsZV9ncm91cF9hc3NvY2lhdGlvbi5odG1sI3ZwY19pZCBSb3V0ZTUzUmVzb2x2ZXJGaXJld2FsbFJ1bGVHcm91cEFzc29jaWF0aW9uI3ZwY19pZH1cbiAgKi9cbiAgcmVhZG9ubHkgdnBjSWQ6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGU1M1Jlc29sdmVyRmlyZXdhbGxSdWxlR3JvdXBBc3NvY2lhdGlvblRhZ3Mge1xuICAvKipcbiAgKiBUaGUga2V5IG5hbWUgb2YgdGhlIHRhZy4gWW91IGNhbiBzcGVjaWZ5IGEgdmFsdWUgdGhhdCBpcyAxIHRvIDEyNyBVbmljb2RlIGNoYXJhY3RlcnMgaW4gbGVuZ3RoIGFuZCBjYW5ub3QgYmUgcHJlZml4ZWQgd2l0aCBhd3M6LiBZb3UgY2FuIHVzZSBhbnkgb2YgdGhlIGZvbGxvd2luZyBjaGFyYWN0ZXJzOiB0aGUgc2V0IG9mIFVuaWNvZGUgbGV0dGVycywgZGlnaXRzLCB3aGl0ZXNwYWNlLCBfLCAuLCAvLCA9LCArLCBhbmQgLS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3JvdXRlNTNyZXNvbHZlcl9maXJld2FsbF9ydWxlX2dyb3VwX2Fzc29jaWF0aW9uLmh0bWwja2V5IFJvdXRlNTNSZXNvbHZlckZpcmV3YWxsUnVsZUdyb3VwQXNzb2NpYXRpb24ja2V5fVxuICAqL1xuICByZWFkb25seSBrZXk6IHN0cmluZztcbiAgLyoqXG4gICogVGhlIHZhbHVlIGZvciB0aGUgdGFnLiBZb3UgY2FuIHNwZWNpZnkgYSB2YWx1ZSB0aGF0IGlzIDEgdG8gMjU1IFVuaWNvZGUgY2hhcmFjdGVycyBpbiBsZW5ndGggYW5kIGNhbm5vdCBiZSBwcmVmaXhlZCB3aXRoIGF3czouIFlvdSBjYW4gdXNlIGFueSBvZiB0aGUgZm9sbG93aW5nIGNoYXJhY3RlcnM6IHRoZSBzZXQgb2YgVW5pY29kZSBsZXR0ZXJzLCBkaWdpdHMsIHdoaXRlc3BhY2UsIF8sIC4sIC8sID0sICssIGFuZCAtLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivcm91dGU1M3Jlc29sdmVyX2ZpcmV3YWxsX3J1bGVfZ3JvdXBfYXNzb2NpYXRpb24uaHRtbCN2YWx1ZSBSb3V0ZTUzUmVzb2x2ZXJGaXJld2FsbFJ1bGVHcm91cEFzc29jaWF0aW9uI3ZhbHVlfVxuICAqL1xuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91dGU1M1Jlc29sdmVyRmlyZXdhbGxSdWxlR3JvdXBBc3NvY2lhdGlvblRhZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBSb3V0ZTUzUmVzb2x2ZXJGaXJld2FsbFJ1bGVHcm91cEFzc29jaWF0aW9uVGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9yb3V0ZTUzcmVzb2x2ZXJfZmlyZXdhbGxfcnVsZV9ncm91cF9hc3NvY2lhdGlvbi5odG1sIGF3c2NjX3JvdXRlNTNyZXNvbHZlcl9maXJld2FsbF9ydWxlX2dyb3VwX2Fzc29jaWF0aW9ufVxuKi9cbmV4cG9ydCBjbGFzcyBSb3V0ZTUzUmVzb2x2ZXJGaXJld2FsbFJ1bGVHcm91cEFzc29jaWF0aW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2Nfcm91dGU1M3Jlc29sdmVyX2ZpcmV3YWxsX3J1bGVfZ3JvdXBfYXNzb2NpYXRpb25cIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivcm91dGU1M3Jlc29sdmVyX2ZpcmV3YWxsX3J1bGVfZ3JvdXBfYXNzb2NpYXRpb24uaHRtbCBhd3NjY19yb3V0ZTUzcmVzb2x2ZXJfZmlyZXdhbGxfcnVsZV9ncm91cF9hc3NvY2lhdGlvbn0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgUm91dGU1M1Jlc29sdmVyRmlyZXdhbGxSdWxlR3JvdXBBc3NvY2lhdGlvbkNvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBSb3V0ZTUzUmVzb2x2ZXJGaXJld2FsbFJ1bGVHcm91cEFzc29jaWF0aW9uQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NjY19yb3V0ZTUzcmVzb2x2ZXJfZmlyZXdhbGxfcnVsZV9ncm91cF9hc3NvY2lhdGlvbicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3NjYydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2ZpcmV3YWxsUnVsZUdyb3VwSWQgPSBjb25maWcuZmlyZXdhbGxSdWxlR3JvdXBJZDtcbiAgICB0aGlzLl9tdXRhdGlvblByb3RlY3Rpb24gPSBjb25maWcubXV0YXRpb25Qcm90ZWN0aW9uO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9wcmlvcml0eSA9IGNvbmZpZy5wcmlvcml0eTtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdnBjSWQgPSBjb25maWcudnBjSWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gY3JlYXRpb25fdGltZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyZWF0aW9uVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NyZWF0aW9uX3RpbWUnKTtcbiAgfVxuXG4gIC8vIGNyZWF0b3JfcmVxdWVzdF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyZWF0b3JSZXF1ZXN0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdG9yX3JlcXVlc3RfaWQnKTtcbiAgfVxuXG4gIC8vIGZpcmV3YWxsX3J1bGVfZ3JvdXBfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZmlyZXdhbGxSdWxlR3JvdXBJZDogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGZpcmV3YWxsUnVsZUdyb3VwSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmaXJld2FsbF9ydWxlX2dyb3VwX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBmaXJld2FsbFJ1bGVHcm91cElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9maXJld2FsbFJ1bGVHcm91cElkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpcmV3YWxsUnVsZUdyb3VwSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlyZXdhbGxSdWxlR3JvdXBJZFxuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBtYW5hZ2VkX293bmVyX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYW5hZ2VkT3duZXJOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWFuYWdlZF9vd25lcl9uYW1lJyk7XG4gIH1cblxuICAvLyBtb2RpZmljYXRpb25fdGltZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1vZGlmaWNhdGlvblRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtb2RpZmljYXRpb25fdGltZScpO1xuICB9XG5cbiAgLy8gbXV0YXRpb25fcHJvdGVjdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tdXRhdGlvblByb3RlY3Rpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbXV0YXRpb25Qcm90ZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbXV0YXRpb25fcHJvdGVjdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbXV0YXRpb25Qcm90ZWN0aW9uKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fbXV0YXRpb25Qcm90ZWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TXV0YXRpb25Qcm90ZWN0aW9uKCkge1xuICAgIHRoaXMuX211dGF0aW9uUHJvdGVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbXV0YXRpb25Qcm90ZWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX211dGF0aW9uUHJvdGVjdGlvblxuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWUoKSB7XG4gICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lXG4gIH1cblxuICAvLyBwcmlvcml0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wcmlvcml0eTogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncHJpb3JpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByaW9yaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wcmlvcml0eSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmlvcml0eUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmlvcml0eVxuICB9XG5cbiAgLy8gc3RhdHVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdHVzJyk7XG4gIH1cblxuICAvLyBzdGF0dXNfbWVzc2FnZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0YXR1c01lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0dXNfbWVzc2FnZScpO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogUm91dGU1M1Jlc29sdmVyRmlyZXdhbGxSdWxlR3JvdXBBc3NvY2lhdGlvblRhZ3NbXTtcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiBSb3V0ZTUzUmVzb2x2ZXJGaXJld2FsbFJ1bGVHcm91cEFzc29jaWF0aW9uVGFnc1tdICkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc1xuICB9XG5cbiAgLy8gdnBjX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ZwY0lkOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgdnBjSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2cGNfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZwY0lkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92cGNJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2cGNJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92cGNJZFxuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBmaXJld2FsbF9ydWxlX2dyb3VwX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9maXJld2FsbFJ1bGVHcm91cElkKSxcbiAgICAgIG11dGF0aW9uX3Byb3RlY3Rpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX211dGF0aW9uUHJvdGVjdGlvbiksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHByaW9yaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9wcmlvcml0eSksXG4gICAgICB0YWdzOiBjZGt0Zi5saXN0TWFwcGVyKHJvdXRlNTNSZXNvbHZlckZpcmV3YWxsUnVsZUdyb3VwQXNzb2NpYXRpb25UYWdzVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdnBjX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl92cGNJZCksXG4gICAgfTtcbiAgfVxufVxuIl19