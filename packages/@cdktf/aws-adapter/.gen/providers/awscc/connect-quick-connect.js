"use strict";
// https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectQuickConnect = exports.connectQuickConnectTagsToTerraform = exports.connectQuickConnectQuickConnectConfigToTerraform = exports.connectQuickConnectQuickConnectConfigUserConfigToTerraform = exports.connectQuickConnectQuickConnectConfigQueueConfigToTerraform = exports.connectQuickConnectQuickConnectConfigPhoneConfigToTerraform = void 0;
const cdktf = require("cdktf");
function connectQuickConnectQuickConnectConfigPhoneConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        phone_number: cdktf.stringToTerraform(struct.phoneNumber),
    };
}
exports.connectQuickConnectQuickConnectConfigPhoneConfigToTerraform = connectQuickConnectQuickConnectConfigPhoneConfigToTerraform;
function connectQuickConnectQuickConnectConfigQueueConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        contact_flow_arn: cdktf.stringToTerraform(struct.contactFlowArn),
        queue_arn: cdktf.stringToTerraform(struct.queueArn),
    };
}
exports.connectQuickConnectQuickConnectConfigQueueConfigToTerraform = connectQuickConnectQuickConnectConfigQueueConfigToTerraform;
function connectQuickConnectQuickConnectConfigUserConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        contact_flow_arn: cdktf.stringToTerraform(struct.contactFlowArn),
        user_arn: cdktf.stringToTerraform(struct.userArn),
    };
}
exports.connectQuickConnectQuickConnectConfigUserConfigToTerraform = connectQuickConnectQuickConnectConfigUserConfigToTerraform;
function connectQuickConnectQuickConnectConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        phone_config: connectQuickConnectQuickConnectConfigPhoneConfigToTerraform(struct.phoneConfig),
        queue_config: connectQuickConnectQuickConnectConfigQueueConfigToTerraform(struct.queueConfig),
        quick_connect_type: cdktf.stringToTerraform(struct.quickConnectType),
        user_config: connectQuickConnectQuickConnectConfigUserConfigToTerraform(struct.userConfig),
    };
}
exports.connectQuickConnectQuickConnectConfigToTerraform = connectQuickConnectQuickConnectConfigToTerraform;
function connectQuickConnectTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.connectQuickConnectTagsToTerraform = connectQuickConnectTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html awscc_connect_quick_connect}
*/
class ConnectQuickConnect extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html awscc_connect_quick_connect} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConnectQuickConnectConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_connect_quick_connect',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._description = config.description;
        this._instanceArn = config.instanceArn;
        this._name = config.name;
        this._quickConnectConfig = config.quickConnectConfig;
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
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get instanceArn() {
        return this.getStringAttribute('instance_arn');
    }
    set instanceArn(value) {
        this._instanceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get instanceArnInput() {
        return this._instanceArn;
    }
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // quick_connect_arn - computed: true, optional: false, required: false
    get quickConnectArn() {
        return this.getStringAttribute('quick_connect_arn');
    }
    get quickConnectConfig() {
        return this.interpolationForAttribute('quick_connect_config');
    }
    set quickConnectConfig(value) {
        this._quickConnectConfig = value;
    }
    // Temporarily expose input value. Use with caution.
    get quickConnectConfigInput() {
        return this._quickConnectConfig;
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
            instance_arn: cdktf.stringToTerraform(this._instanceArn),
            name: cdktf.stringToTerraform(this._name),
            quick_connect_config: connectQuickConnectQuickConnectConfigToTerraform(this._quickConnectConfig),
            tags: cdktf.listMapper(connectQuickConnectTagsToTerraform)(this._tags),
        };
    }
}
exports.ConnectQuickConnect = ConnectQuickConnect;
// =================
// STATIC PROPERTIES
// =================
ConnectQuickConnect.tfResourceType = "awscc_connect_quick_connect";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC1xdWljay1jb25uZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29ubmVjdC1xdWljay1jb25uZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2RUFBNkU7QUFDN0UsMkNBQTJDOzs7QUFHM0MsK0JBQStCO0FBNkMvQixTQUFnQiwyREFBMkQsQ0FBQyxNQUF5RDtJQUNuSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztLQUMzRCxDQUFBO0FBQ0gsQ0FBQztBQUxELGtJQUtDO0FBaUJELFNBQWdCLDJEQUEyRCxDQUFDLE1BQXlEO0lBQ25JLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7UUFDakUsU0FBUyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDO0tBQ3JELENBQUE7QUFDSCxDQUFDO0FBTkQsa0lBTUM7QUFpQkQsU0FBZ0IsMERBQTBELENBQUMsTUFBd0Q7SUFDakksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztRQUNqRSxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7S0FDbkQsQ0FBQTtBQUNILENBQUM7QUFORCxn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S0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDdkQsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3hELElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QyxvQkFBb0IsRUFBRSxnREFBZ0QsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDaEcsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3ZFLENBQUM7SUFDSixDQUFDOztBQXJJSCxrREFzSUM7QUFwSUMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyxrQ0FBYyxHQUFXLDZCQUE2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvY29ubmVjdF9xdWlja19jb25uZWN0Lmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBDb25uZWN0UXVpY2tDb25uZWN0Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgcXVpY2sgY29ubmVjdC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Nvbm5lY3RfcXVpY2tfY29ubmVjdC5odG1sI2Rlc2NyaXB0aW9uIENvbm5lY3RRdWlja0Nvbm5lY3QjZGVzY3JpcHRpb259XG4gICovXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgaWRlbnRpZmllciBvZiB0aGUgQW1hem9uIENvbm5lY3QgaW5zdGFuY2UuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9jb25uZWN0X3F1aWNrX2Nvbm5lY3QuaHRtbCNpbnN0YW5jZV9hcm4gQ29ubmVjdFF1aWNrQ29ubmVjdCNpbnN0YW5jZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IGluc3RhbmNlQXJuOiBzdHJpbmc7XG4gIC8qKlxuICAqIFRoZSBuYW1lIG9mIHRoZSBxdWljayBjb25uZWN0LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvY29ubmVjdF9xdWlja19jb25uZWN0Lmh0bWwjbmFtZSBDb25uZWN0UXVpY2tDb25uZWN0I25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogQ29uZmlndXJhdGlvbiBzZXR0aW5ncyBmb3IgdGhlIHF1aWNrIGNvbm5lY3QuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9jb25uZWN0X3F1aWNrX2Nvbm5lY3QuaHRtbCNxdWlja19jb25uZWN0X2NvbmZpZyBDb25uZWN0UXVpY2tDb25uZWN0I3F1aWNrX2Nvbm5lY3RfY29uZmlnfVxuICAqL1xuICByZWFkb25seSBxdWlja0Nvbm5lY3RDb25maWc6IENvbm5lY3RRdWlja0Nvbm5lY3RRdWlja0Nvbm5lY3RDb25maWc7XG4gIC8qKlxuICAqIE9uZSBvciBtb3JlIHRhZ3MuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9jb25uZWN0X3F1aWNrX2Nvbm5lY3QuaHRtbCN0YWdzIENvbm5lY3RRdWlja0Nvbm5lY3QjdGFnc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFncz86IENvbm5lY3RRdWlja0Nvbm5lY3RUYWdzW107XG59XG5leHBvcnQgaW50ZXJmYWNlIENvbm5lY3RRdWlja0Nvbm5lY3RRdWlja0Nvbm5lY3RDb25maWdQaG9uZUNvbmZpZyB7XG4gIC8qKlxuICAqIFRoZSBwaG9uZSBudW1iZXIgaW4gRS4xNjQgZm9ybWF0LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvY29ubmVjdF9xdWlja19jb25uZWN0Lmh0bWwjcGhvbmVfbnVtYmVyIENvbm5lY3RRdWlja0Nvbm5lY3QjcGhvbmVfbnVtYmVyfVxuICAqL1xuICByZWFkb25seSBwaG9uZU51bWJlcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29ubmVjdFF1aWNrQ29ubmVjdFF1aWNrQ29ubmVjdENvbmZpZ1Bob25lQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogQ29ubmVjdFF1aWNrQ29ubmVjdFF1aWNrQ29ubmVjdENvbmZpZ1Bob25lQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHBob25lX251bWJlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5waG9uZU51bWJlciksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25uZWN0UXVpY2tDb25uZWN0UXVpY2tDb25uZWN0Q29uZmlnUXVldWVDb25maWcge1xuICAvKipcbiAgKiBUaGUgaWRlbnRpZmllciBvZiB0aGUgY29udGFjdCBmbG93LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvY29ubmVjdF9xdWlja19jb25uZWN0Lmh0bWwjY29udGFjdF9mbG93X2FybiBDb25uZWN0UXVpY2tDb25uZWN0I2NvbnRhY3RfZmxvd19hcm59XG4gICovXG4gIHJlYWRvbmx5IGNvbnRhY3RGbG93QXJuOiBzdHJpbmc7XG4gIC8qKlxuICAqIFRoZSBpZGVudGlmaWVyIGZvciB0aGUgcXVldWUuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9jb25uZWN0X3F1aWNrX2Nvbm5lY3QuaHRtbCNxdWV1ZV9hcm4gQ29ubmVjdFF1aWNrQ29ubmVjdCNxdWV1ZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IHF1ZXVlQXJuOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25uZWN0UXVpY2tDb25uZWN0UXVpY2tDb25uZWN0Q29uZmlnUXVldWVDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb25uZWN0UXVpY2tDb25uZWN0UXVpY2tDb25uZWN0Q29uZmlnUXVldWVDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29udGFjdF9mbG93X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb250YWN0Rmxvd0FybiksXG4gICAgcXVldWVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnF1ZXVlQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbm5lY3RRdWlja0Nvbm5lY3RRdWlja0Nvbm5lY3RDb25maWdVc2VyQ29uZmlnIHtcbiAgLyoqXG4gICogVGhlIGlkZW50aWZpZXIgb2YgdGhlIGNvbnRhY3QgZmxvdy5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Nvbm5lY3RfcXVpY2tfY29ubmVjdC5odG1sI2NvbnRhY3RfZmxvd19hcm4gQ29ubmVjdFF1aWNrQ29ubmVjdCNjb250YWN0X2Zsb3dfYXJufVxuICAqL1xuICByZWFkb25seSBjb250YWN0Rmxvd0Fybjogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgaWRlbnRpZmllciBvZiB0aGUgdXNlci5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Nvbm5lY3RfcXVpY2tfY29ubmVjdC5odG1sI3VzZXJfYXJuIENvbm5lY3RRdWlja0Nvbm5lY3QjdXNlcl9hcm59XG4gICovXG4gIHJlYWRvbmx5IHVzZXJBcm46IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbm5lY3RRdWlja0Nvbm5lY3RRdWlja0Nvbm5lY3RDb25maWdVc2VyQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogQ29ubmVjdFF1aWNrQ29ubmVjdFF1aWNrQ29ubmVjdENvbmZpZ1VzZXJDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29udGFjdF9mbG93X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb250YWN0Rmxvd0FybiksXG4gICAgdXNlcl9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXNlckFybiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25uZWN0UXVpY2tDb25uZWN0UXVpY2tDb25uZWN0Q29uZmlnIHtcbiAgLyoqXG4gICogVGhlIHBob25lIGNvbmZpZ3VyYXRpb24uIFRoaXMgaXMgcmVxdWlyZWQgb25seSBpZiBRdWlja0Nvbm5lY3RUeXBlIGlzIFBIT05FX05VTUJFUi5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Nvbm5lY3RfcXVpY2tfY29ubmVjdC5odG1sI3Bob25lX2NvbmZpZyBDb25uZWN0UXVpY2tDb25uZWN0I3Bob25lX2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkgcGhvbmVDb25maWc/OiBDb25uZWN0UXVpY2tDb25uZWN0UXVpY2tDb25uZWN0Q29uZmlnUGhvbmVDb25maWc7XG4gIC8qKlxuICAqIFRoZSBxdWV1ZSBjb25maWd1cmF0aW9uLiBUaGlzIGlzIHJlcXVpcmVkIG9ubHkgaWYgUXVpY2tDb25uZWN0VHlwZSBpcyBRVUVVRS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Nvbm5lY3RfcXVpY2tfY29ubmVjdC5odG1sI3F1ZXVlX2NvbmZpZyBDb25uZWN0UXVpY2tDb25uZWN0I3F1ZXVlX2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkgcXVldWVDb25maWc/OiBDb25uZWN0UXVpY2tDb25uZWN0UXVpY2tDb25uZWN0Q29uZmlnUXVldWVDb25maWc7XG4gIC8qKlxuICAqIFRoZSB0eXBlIG9mIHF1aWNrIGNvbm5lY3QuIEluIHRoZSBBbWF6b24gQ29ubmVjdCBjb25zb2xlLCB3aGVuIHlvdSBjcmVhdGUgYSBxdWljayBjb25uZWN0LCB5b3UgYXJlIHByb21wdGVkIHRvIGFzc2lnbiBvbmUgb2YgdGhlIGZvbGxvd2luZyB0eXBlczogQWdlbnQgKFVTRVIpLCBFeHRlcm5hbCAoUEhPTkVfTlVNQkVSKSwgb3IgUXVldWUgKFFVRVVFKS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Nvbm5lY3RfcXVpY2tfY29ubmVjdC5odG1sI3F1aWNrX2Nvbm5lY3RfdHlwZSBDb25uZWN0UXVpY2tDb25uZWN0I3F1aWNrX2Nvbm5lY3RfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgcXVpY2tDb25uZWN0VHlwZTogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgdXNlciBjb25maWd1cmF0aW9uLiBUaGlzIGlzIHJlcXVpcmVkIG9ubHkgaWYgUXVpY2tDb25uZWN0VHlwZSBpcyBVU0VSLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvY29ubmVjdF9xdWlja19jb25uZWN0Lmh0bWwjdXNlcl9jb25maWcgQ29ubmVjdFF1aWNrQ29ubmVjdCN1c2VyX2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkgdXNlckNvbmZpZz86IENvbm5lY3RRdWlja0Nvbm5lY3RRdWlja0Nvbm5lY3RDb25maWdVc2VyQ29uZmlnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29ubmVjdFF1aWNrQ29ubmVjdFF1aWNrQ29ubmVjdENvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IENvbm5lY3RRdWlja0Nvbm5lY3RRdWlja0Nvbm5lY3RDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcGhvbmVfY29uZmlnOiBjb25uZWN0UXVpY2tDb25uZWN0UXVpY2tDb25uZWN0Q29uZmlnUGhvbmVDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBob25lQ29uZmlnKSxcbiAgICBxdWV1ZV9jb25maWc6IGNvbm5lY3RRdWlja0Nvbm5lY3RRdWlja0Nvbm5lY3RDb25maWdRdWV1ZUNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdCEucXVldWVDb25maWcpLFxuICAgIHF1aWNrX2Nvbm5lY3RfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5xdWlja0Nvbm5lY3RUeXBlKSxcbiAgICB1c2VyX2NvbmZpZzogY29ubmVjdFF1aWNrQ29ubmVjdFF1aWNrQ29ubmVjdENvbmZpZ1VzZXJDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVzZXJDb25maWcpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29ubmVjdFF1aWNrQ29ubmVjdFRhZ3Mge1xuICAvKipcbiAgKiBUaGUga2V5IG5hbWUgb2YgdGhlIHRhZy4gWW91IGNhbiBzcGVjaWZ5IGEgdmFsdWUgdGhhdCBpcyAxIHRvIDEyOCBVbmljb2RlIGNoYXJhY3RlcnMgaW4gbGVuZ3RoIGFuZCBjYW5ub3QgYmUgcHJlZml4ZWQgd2l0aCBhd3M6LiBZb3UgY2FuIHVzZSBhbnkgb2YgdGhlIGZvbGxvd2luZyBjaGFyYWN0ZXJzOiB0aGUgc2V0IG9mIFVuaWNvZGUgbGV0dGVycywgZGlnaXRzLCB3aGl0ZXNwYWNlLCBfLCAuLCAvLCA9LCArLCBhbmQgLS4gXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9jb25uZWN0X3F1aWNrX2Nvbm5lY3QuaHRtbCNrZXkgQ29ubmVjdFF1aWNrQ29ubmVjdCNrZXl9XG4gICovXG4gIHJlYWRvbmx5IGtleTogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgdmFsdWUgZm9yIHRoZSB0YWcuIFlvdSBjYW4gc3BlY2lmeSBhIHZhbHVlIHRoYXQgaXMgbWF4aW11bSBvZiAyNTYgVW5pY29kZSBjaGFyYWN0ZXJzIGluIGxlbmd0aCBhbmQgY2Fubm90IGJlIHByZWZpeGVkIHdpdGggYXdzOi4gWW91IGNhbiB1c2UgYW55IG9mIHRoZSBmb2xsb3dpbmcgY2hhcmFjdGVyczogdGhlIHNldCBvZiBVbmljb2RlIGxldHRlcnMsIGRpZ2l0cywgd2hpdGVzcGFjZSwgXywgLiwgLywgPSwgKywgYW5kIC0uIFxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvY29ubmVjdF9xdWlja19jb25uZWN0Lmh0bWwjdmFsdWUgQ29ubmVjdFF1aWNrQ29ubmVjdCN2YWx1ZX1cbiAgKi9cbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbm5lY3RRdWlja0Nvbm5lY3RUYWdzVG9UZXJyYWZvcm0oc3RydWN0PzogQ29ubmVjdFF1aWNrQ29ubmVjdFRhZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvY29ubmVjdF9xdWlja19jb25uZWN0Lmh0bWwgYXdzY2NfY29ubmVjdF9xdWlja19jb25uZWN0fVxuKi9cbmV4cG9ydCBjbGFzcyBDb25uZWN0UXVpY2tDb25uZWN0IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2NfY29ubmVjdF9xdWlja19jb25uZWN0XCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Nvbm5lY3RfcXVpY2tfY29ubmVjdC5odG1sIGF3c2NjX2Nvbm5lY3RfcXVpY2tfY29ubmVjdH0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgQ29ubmVjdFF1aWNrQ29ubmVjdENvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBDb25uZWN0UXVpY2tDb25uZWN0Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NjY19jb25uZWN0X3F1aWNrX2Nvbm5lY3QnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGNvbmZpZy5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLl9pbnN0YW5jZUFybiA9IGNvbmZpZy5pbnN0YW5jZUFybjtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fcXVpY2tDb25uZWN0Q29uZmlnID0gY29uZmlnLnF1aWNrQ29ubmVjdENvbmZpZztcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGRlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzY3JpcHRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXNjcmlwdGlvbigpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb25cbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gaW5zdGFuY2VfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2luc3RhbmNlQXJuOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnN0YW5jZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbmNlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnN0YW5jZUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZUFyblxuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lXG4gIH1cblxuICAvLyBxdWlja19jb25uZWN0X2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHF1aWNrQ29ubmVjdEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3F1aWNrX2Nvbm5lY3RfYXJuJyk7XG4gIH1cblxuICAvLyBxdWlja19jb25uZWN0X2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9xdWlja0Nvbm5lY3RDb25maWc6IENvbm5lY3RRdWlja0Nvbm5lY3RRdWlja0Nvbm5lY3RDb25maWc7XG4gIHB1YmxpYyBnZXQgcXVpY2tDb25uZWN0Q29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3F1aWNrX2Nvbm5lY3RfY29uZmlnJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcXVpY2tDb25uZWN0Q29uZmlnKHZhbHVlOiBDb25uZWN0UXVpY2tDb25uZWN0UXVpY2tDb25uZWN0Q29uZmlnKSB7XG4gICAgdGhpcy5fcXVpY2tDb25uZWN0Q29uZmlnID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHF1aWNrQ29ubmVjdENvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9xdWlja0Nvbm5lY3RDb25maWdcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IENvbm5lY3RRdWlja0Nvbm5lY3RUYWdzW107XG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogQ29ubmVjdFF1aWNrQ29ubmVjdFRhZ3NbXSApIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVzY3JpcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Rlc2NyaXB0aW9uKSxcbiAgICAgIGluc3RhbmNlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faW5zdGFuY2VBcm4pLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBxdWlja19jb25uZWN0X2NvbmZpZzogY29ubmVjdFF1aWNrQ29ubmVjdFF1aWNrQ29ubmVjdENvbmZpZ1RvVGVycmFmb3JtKHRoaXMuX3F1aWNrQ29ubmVjdENvbmZpZyksXG4gICAgICB0YWdzOiBjZGt0Zi5saXN0TWFwcGVyKGNvbm5lY3RRdWlja0Nvbm5lY3RUYWdzVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==