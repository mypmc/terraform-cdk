"use strict";
// https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route53ResolverFirewallRuleGroup = exports.route53ResolverFirewallRuleGroupTagsToTerraform = exports.route53ResolverFirewallRuleGroupFirewallRulesToTerraform = void 0;
const cdktf = require("cdktf");
function route53ResolverFirewallRuleGroupFirewallRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
        block_override_dns_type: cdktf.stringToTerraform(struct.blockOverrideDnsType),
        block_override_domain: cdktf.stringToTerraform(struct.blockOverrideDomain),
        block_override_ttl: cdktf.numberToTerraform(struct.blockOverrideTtl),
        block_response: cdktf.stringToTerraform(struct.blockResponse),
        firewall_domain_list_id: cdktf.stringToTerraform(struct.firewallDomainListId),
        priority: cdktf.numberToTerraform(struct.priority),
    };
}
exports.route53ResolverFirewallRuleGroupFirewallRulesToTerraform = route53ResolverFirewallRuleGroupFirewallRulesToTerraform;
function route53ResolverFirewallRuleGroupTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.route53ResolverFirewallRuleGroupTagsToTerraform = route53ResolverFirewallRuleGroupTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group.html awscc_route53resolver_firewall_rule_group}
*/
class Route53ResolverFirewallRuleGroup extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group.html awscc_route53resolver_firewall_rule_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverFirewallRuleGroupConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_route53resolver_firewall_rule_group',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._firewallRules = config.firewallRules;
        this._name = config.name;
        this._tags = config.tags;
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
    get firewallRules() {
        return this.interpolationForAttribute('firewall_rules');
    }
    set firewallRules(value) {
        this._firewallRules = value;
    }
    resetFirewallRules() {
        this._firewallRules = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get firewallRulesInput() {
        return this._firewallRules;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // modification_time - computed: true, optional: false, required: false
    get modificationTime() {
        return this.getStringAttribute('modification_time');
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
    // owner_id - computed: true, optional: false, required: false
    get ownerId() {
        return this.getStringAttribute('owner_id');
    }
    // rule_count - computed: true, optional: false, required: false
    get ruleCount() {
        return this.getNumberAttribute('rule_count');
    }
    // share_status - computed: true, optional: false, required: false
    get shareStatus() {
        return this.getStringAttribute('share_status');
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            firewall_rules: cdktf.listMapper(route53ResolverFirewallRuleGroupFirewallRulesToTerraform)(this._firewallRules),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.listMapper(route53ResolverFirewallRuleGroupTagsToTerraform)(this._tags),
        };
    }
}
exports.Route53ResolverFirewallRuleGroup = Route53ResolverFirewallRuleGroup;
// =================
// STATIC PROPERTIES
// =================
Route53ResolverFirewallRuleGroup.tfResourceType = "awscc_route53resolver_firewall_rule_group";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGU1M3Jlc29sdmVyLWZpcmV3YWxsLXJ1bGUtZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb3V0ZTUzcmVzb2x2ZXItZmlyZXdhbGwtcnVsZS1ncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMkZBQTJGO0FBQzNGLDJDQUEyQzs7O0FBRzNDLCtCQUErQjtBQXFFL0IsU0FBZ0Isd0RBQXdELENBQUMsTUFBc0Q7SUFDN0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7UUFDL0MsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxvQkFBb0IsQ0FBQztRQUM5RSxxQkFBcUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLG1CQUFtQixDQUFDO1FBQzNFLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7UUFDckUsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1FBQzlELHVCQUF1QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsb0JBQW9CLENBQUM7UUFDOUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDO0tBQ3BELENBQUE7QUFDSCxDQUFDO0FBWEQsNEhBV0M7QUFpQkQsU0FBZ0IsK0NBQStDLENBQUMsTUFBNkM7SUFDM0csSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxHQUFHLEVBQUUsS0FB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LG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRywrQ0FBYyxHQUFXLDJDQUEyQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivcm91dGU1M3Jlc29sdmVyX2ZpcmV3YWxsX3J1bGVfZ3JvdXAuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlNTNSZXNvbHZlckZpcmV3YWxsUnVsZUdyb3VwQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIEZpcmV3YWxsUnVsZXNcbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3JvdXRlNTNyZXNvbHZlcl9maXJld2FsbF9ydWxlX2dyb3VwLmh0bWwjZmlyZXdhbGxfcnVsZXMgUm91dGU1M1Jlc29sdmVyRmlyZXdhbGxSdWxlR3JvdXAjZmlyZXdhbGxfcnVsZXN9XG4gICovXG4gIHJlYWRvbmx5IGZpcmV3YWxsUnVsZXM/OiBSb3V0ZTUzUmVzb2x2ZXJGaXJld2FsbFJ1bGVHcm91cEZpcmV3YWxsUnVsZXNbXTtcbiAgLyoqXG4gICogRmlyZXdhbGxSdWxlR3JvdXBOYW1lXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9yb3V0ZTUzcmVzb2x2ZXJfZmlyZXdhbGxfcnVsZV9ncm91cC5odG1sI25hbWUgUm91dGU1M1Jlc29sdmVyRmlyZXdhbGxSdWxlR3JvdXAjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogVGFnc1xuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivcm91dGU1M3Jlc29sdmVyX2ZpcmV3YWxsX3J1bGVfZ3JvdXAuaHRtbCN0YWdzIFJvdXRlNTNSZXNvbHZlckZpcmV3YWxsUnVsZUdyb3VwI3RhZ3N9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3M/OiBSb3V0ZTUzUmVzb2x2ZXJGaXJld2FsbFJ1bGVHcm91cFRhZ3NbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGU1M1Jlc29sdmVyRmlyZXdhbGxSdWxlR3JvdXBGaXJld2FsbFJ1bGVzIHtcbiAgLyoqXG4gICogUnVsZSBBY3Rpb25cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3JvdXRlNTNyZXNvbHZlcl9maXJld2FsbF9ydWxlX2dyb3VwLmh0bWwjYWN0aW9uIFJvdXRlNTNSZXNvbHZlckZpcmV3YWxsUnVsZUdyb3VwI2FjdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgYWN0aW9uOiBzdHJpbmc7XG4gIC8qKlxuICAqIEJsb2NrT3ZlcnJpZGVEbnNUeXBlXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9yb3V0ZTUzcmVzb2x2ZXJfZmlyZXdhbGxfcnVsZV9ncm91cC5odG1sI2Jsb2NrX292ZXJyaWRlX2Ruc190eXBlIFJvdXRlNTNSZXNvbHZlckZpcmV3YWxsUnVsZUdyb3VwI2Jsb2NrX292ZXJyaWRlX2Ruc190eXBlfVxuICAqL1xuICByZWFkb25seSBibG9ja092ZXJyaWRlRG5zVHlwZT86IHN0cmluZztcbiAgLyoqXG4gICogQmxvY2tPdmVycmlkZURvbWFpblxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivcm91dGU1M3Jlc29sdmVyX2ZpcmV3YWxsX3J1bGVfZ3JvdXAuaHRtbCNibG9ja19vdmVycmlkZV9kb21haW4gUm91dGU1M1Jlc29sdmVyRmlyZXdhbGxSdWxlR3JvdXAjYmxvY2tfb3ZlcnJpZGVfZG9tYWlufVxuICAqL1xuICByZWFkb25seSBibG9ja092ZXJyaWRlRG9tYWluPzogc3RyaW5nO1xuICAvKipcbiAgKiBCbG9ja092ZXJyaWRlVHRsXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9yb3V0ZTUzcmVzb2x2ZXJfZmlyZXdhbGxfcnVsZV9ncm91cC5odG1sI2Jsb2NrX292ZXJyaWRlX3R0bCBSb3V0ZTUzUmVzb2x2ZXJGaXJld2FsbFJ1bGVHcm91cCNibG9ja19vdmVycmlkZV90dGx9XG4gICovXG4gIHJlYWRvbmx5IGJsb2NrT3ZlcnJpZGVUdGw/OiBudW1iZXI7XG4gIC8qKlxuICAqIEJsb2NrUmVzcG9uc2VcbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3JvdXRlNTNyZXNvbHZlcl9maXJld2FsbF9ydWxlX2dyb3VwLmh0bWwjYmxvY2tfcmVzcG9uc2UgUm91dGU1M1Jlc29sdmVyRmlyZXdhbGxSdWxlR3JvdXAjYmxvY2tfcmVzcG9uc2V9XG4gICovXG4gIHJlYWRvbmx5IGJsb2NrUmVzcG9uc2U/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFJlc291cmNlSWRcbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3JvdXRlNTNyZXNvbHZlcl9maXJld2FsbF9ydWxlX2dyb3VwLmh0bWwjZmlyZXdhbGxfZG9tYWluX2xpc3RfaWQgUm91dGU1M1Jlc29sdmVyRmlyZXdhbGxSdWxlR3JvdXAjZmlyZXdhbGxfZG9tYWluX2xpc3RfaWR9XG4gICovXG4gIHJlYWRvbmx5IGZpcmV3YWxsRG9tYWluTGlzdElkOiBzdHJpbmc7XG4gIC8qKlxuICAqIFJ1bGUgUHJpb3JpdHlcbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3JvdXRlNTNyZXNvbHZlcl9maXJld2FsbF9ydWxlX2dyb3VwLmh0bWwjcHJpb3JpdHkgUm91dGU1M1Jlc29sdmVyRmlyZXdhbGxSdWxlR3JvdXAjcHJpb3JpdHl9XG4gICovXG4gIHJlYWRvbmx5IHByaW9yaXR5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3V0ZTUzUmVzb2x2ZXJGaXJld2FsbFJ1bGVHcm91cEZpcmV3YWxsUnVsZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBSb3V0ZTUzUmVzb2x2ZXJGaXJld2FsbFJ1bGVHcm91cEZpcmV3YWxsUnVsZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWN0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjdGlvbiksXG4gICAgYmxvY2tfb3ZlcnJpZGVfZG5zX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYmxvY2tPdmVycmlkZURuc1R5cGUpLFxuICAgIGJsb2NrX292ZXJyaWRlX2RvbWFpbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ibG9ja092ZXJyaWRlRG9tYWluKSxcbiAgICBibG9ja19vdmVycmlkZV90dGw6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuYmxvY2tPdmVycmlkZVR0bCksXG4gICAgYmxvY2tfcmVzcG9uc2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYmxvY2tSZXNwb25zZSksXG4gICAgZmlyZXdhbGxfZG9tYWluX2xpc3RfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZmlyZXdhbGxEb21haW5MaXN0SWQpLFxuICAgIHByaW9yaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnByaW9yaXR5KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlNTNSZXNvbHZlckZpcmV3YWxsUnVsZUdyb3VwVGFncyB7XG4gIC8qKlxuICAqIFRoZSBrZXkgbmFtZSBvZiB0aGUgdGFnLiBZb3UgY2FuIHNwZWNpZnkgYSB2YWx1ZSB0aGF0IGlzIDEgdG8gMTI3IFVuaWNvZGUgY2hhcmFjdGVycyBpbiBsZW5ndGggYW5kIGNhbm5vdCBiZSBwcmVmaXhlZCB3aXRoIGF3czouIFlvdSBjYW4gdXNlIGFueSBvZiB0aGUgZm9sbG93aW5nIGNoYXJhY3RlcnM6IHRoZSBzZXQgb2YgVW5pY29kZSBsZXR0ZXJzLCBkaWdpdHMsIHdoaXRlc3BhY2UsIF8sIC4sIC8sID0sICssIGFuZCAtLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivcm91dGU1M3Jlc29sdmVyX2ZpcmV3YWxsX3J1bGVfZ3JvdXAuaHRtbCNrZXkgUm91dGU1M1Jlc29sdmVyRmlyZXdhbGxSdWxlR3JvdXAja2V5fVxuICAqL1xuICByZWFkb25seSBrZXk6IHN0cmluZztcbiAgLyoqXG4gICogVGhlIHZhbHVlIGZvciB0aGUgdGFnLiBZb3UgY2FuIHNwZWNpZnkgYSB2YWx1ZSB0aGF0IGlzIDEgdG8gMjU1IFVuaWNvZGUgY2hhcmFjdGVycyBpbiBsZW5ndGggYW5kIGNhbm5vdCBiZSBwcmVmaXhlZCB3aXRoIGF3czouIFlvdSBjYW4gdXNlIGFueSBvZiB0aGUgZm9sbG93aW5nIGNoYXJhY3RlcnM6IHRoZSBzZXQgb2YgVW5pY29kZSBsZXR0ZXJzLCBkaWdpdHMsIHdoaXRlc3BhY2UsIF8sIC4sIC8sID0sICssIGFuZCAtLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivcm91dGU1M3Jlc29sdmVyX2ZpcmV3YWxsX3J1bGVfZ3JvdXAuaHRtbCN2YWx1ZSBSb3V0ZTUzUmVzb2x2ZXJGaXJld2FsbFJ1bGVHcm91cCN2YWx1ZX1cbiAgKi9cbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdXRlNTNSZXNvbHZlckZpcmV3YWxsUnVsZUdyb3VwVGFnc1RvVGVycmFmb3JtKHN0cnVjdD86IFJvdXRlNTNSZXNvbHZlckZpcmV3YWxsUnVsZUdyb3VwVGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9yb3V0ZTUzcmVzb2x2ZXJfZmlyZXdhbGxfcnVsZV9ncm91cC5odG1sIGF3c2NjX3JvdXRlNTNyZXNvbHZlcl9maXJld2FsbF9ydWxlX2dyb3VwfVxuKi9cbmV4cG9ydCBjbGFzcyBSb3V0ZTUzUmVzb2x2ZXJGaXJld2FsbFJ1bGVHcm91cCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX3JvdXRlNTNyZXNvbHZlcl9maXJld2FsbF9ydWxlX2dyb3VwXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3JvdXRlNTNyZXNvbHZlcl9maXJld2FsbF9ydWxlX2dyb3VwLmh0bWwgYXdzY2Nfcm91dGU1M3Jlc29sdmVyX2ZpcmV3YWxsX3J1bGVfZ3JvdXB9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIFJvdXRlNTNSZXNvbHZlckZpcmV3YWxsUnVsZUdyb3VwQ29uZmlnID0ge31cbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogUm91dGU1M1Jlc29sdmVyRmlyZXdhbGxSdWxlR3JvdXBDb25maWcgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2Nfcm91dGU1M3Jlc29sdmVyX2ZpcmV3YWxsX3J1bGVfZ3JvdXAnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9maXJld2FsbFJ1bGVzID0gY29uZmlnLmZpcmV3YWxsUnVsZXM7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBjcmVhdGlvbl90aW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3JlYXRpb25UaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRpb25fdGltZScpO1xuICB9XG5cbiAgLy8gY3JlYXRvcl9yZXF1ZXN0X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3JlYXRvclJlcXVlc3RJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NyZWF0b3JfcmVxdWVzdF9pZCcpO1xuICB9XG5cbiAgLy8gZmlyZXdhbGxfcnVsZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZmlyZXdhbGxSdWxlcz86IFJvdXRlNTNSZXNvbHZlckZpcmV3YWxsUnVsZUdyb3VwRmlyZXdhbGxSdWxlc1tdO1xuICBwdWJsaWMgZ2V0IGZpcmV3YWxsUnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZmlyZXdhbGxfcnVsZXMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBmaXJld2FsbFJ1bGVzKHZhbHVlOiBSb3V0ZTUzUmVzb2x2ZXJGaXJld2FsbFJ1bGVHcm91cEZpcmV3YWxsUnVsZXNbXSApIHtcbiAgICB0aGlzLl9maXJld2FsbFJ1bGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RmlyZXdhbGxSdWxlcygpIHtcbiAgICB0aGlzLl9maXJld2FsbFJ1bGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaXJld2FsbFJ1bGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpcmV3YWxsUnVsZXNcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbW9kaWZpY2F0aW9uX3RpbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtb2RpZmljYXRpb25UaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbW9kaWZpY2F0aW9uX3RpbWUnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmFtZSgpIHtcbiAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVcbiAgfVxuXG4gIC8vIG93bmVyX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3duZXJJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ293bmVyX2lkJyk7XG4gIH1cblxuICAvLyBydWxlX2NvdW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcnVsZUNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncnVsZV9jb3VudCcpO1xuICB9XG5cbiAgLy8gc2hhcmVfc3RhdHVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2hhcmVTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzaGFyZV9zdGF0dXMnKTtcbiAgfVxuXG4gIC8vIHN0YXR1cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXR1cycpO1xuICB9XG5cbiAgLy8gc3RhdHVzX21lc3NhZ2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0dXNNZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdHVzX21lc3NhZ2UnKTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IFJvdXRlNTNSZXNvbHZlckZpcmV3YWxsUnVsZUdyb3VwVGFnc1tdO1xuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IFJvdXRlNTNSZXNvbHZlckZpcmV3YWxsUnVsZUdyb3VwVGFnc1tdICkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBmaXJld2FsbF9ydWxlczogY2RrdGYubGlzdE1hcHBlcihyb3V0ZTUzUmVzb2x2ZXJGaXJld2FsbFJ1bGVHcm91cEZpcmV3YWxsUnVsZXNUb1RlcnJhZm9ybSkodGhpcy5fZmlyZXdhbGxSdWxlcyksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHRhZ3M6IGNka3RmLmxpc3RNYXBwZXIocm91dGU1M1Jlc29sdmVyRmlyZXdhbGxSdWxlR3JvdXBUYWdzVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==