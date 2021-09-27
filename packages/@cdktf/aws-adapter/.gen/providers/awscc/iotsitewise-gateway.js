"use strict";
// https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.IotsitewiseGateway = exports.iotsitewiseGatewayTagsToTerraform = exports.iotsitewiseGatewayGatewayPlatformToTerraform = exports.iotsitewiseGatewayGatewayPlatformGreengrassToTerraform = exports.iotsitewiseGatewayGatewayCapabilitySummariesToTerraform = void 0;
const cdktf = require("cdktf");
function iotsitewiseGatewayGatewayCapabilitySummariesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        capability_configuration: cdktf.stringToTerraform(struct.capabilityConfiguration),
        capability_namespace: cdktf.stringToTerraform(struct.capabilityNamespace),
    };
}
exports.iotsitewiseGatewayGatewayCapabilitySummariesToTerraform = iotsitewiseGatewayGatewayCapabilitySummariesToTerraform;
function iotsitewiseGatewayGatewayPlatformGreengrassToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        group_arn: cdktf.stringToTerraform(struct.groupArn),
    };
}
exports.iotsitewiseGatewayGatewayPlatformGreengrassToTerraform = iotsitewiseGatewayGatewayPlatformGreengrassToTerraform;
function iotsitewiseGatewayGatewayPlatformToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        greengrass: iotsitewiseGatewayGatewayPlatformGreengrassToTerraform(struct.greengrass),
    };
}
exports.iotsitewiseGatewayGatewayPlatformToTerraform = iotsitewiseGatewayGatewayPlatformToTerraform;
function iotsitewiseGatewayTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.iotsitewiseGatewayTagsToTerraform = iotsitewiseGatewayTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html awscc_iotsitewise_gateway}
*/
class IotsitewiseGateway extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html awscc_iotsitewise_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotsitewiseGatewayConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_iotsitewise_gateway',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._gatewayCapabilitySummaries = config.gatewayCapabilitySummaries;
        this._gatewayName = config.gatewayName;
        this._gatewayPlatform = config.gatewayPlatform;
        this._tags = config.tags;
    }
    get gatewayCapabilitySummaries() {
        return this.interpolationForAttribute('gateway_capability_summaries');
    }
    set gatewayCapabilitySummaries(value) {
        this._gatewayCapabilitySummaries = value;
    }
    resetGatewayCapabilitySummaries() {
        this._gatewayCapabilitySummaries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gatewayCapabilitySummariesInput() {
        return this._gatewayCapabilitySummaries;
    }
    // gateway_id - computed: true, optional: false, required: false
    get gatewayId() {
        return this.getStringAttribute('gateway_id');
    }
    get gatewayName() {
        return this.getStringAttribute('gateway_name');
    }
    set gatewayName(value) {
        this._gatewayName = value;
    }
    // Temporarily expose input value. Use with caution.
    get gatewayNameInput() {
        return this._gatewayName;
    }
    get gatewayPlatform() {
        return this.interpolationForAttribute('gateway_platform');
    }
    set gatewayPlatform(value) {
        this._gatewayPlatform = value;
    }
    // Temporarily expose input value. Use with caution.
    get gatewayPlatformInput() {
        return this._gatewayPlatform;
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
            gateway_capability_summaries: cdktf.listMapper(iotsitewiseGatewayGatewayCapabilitySummariesToTerraform)(this._gatewayCapabilitySummaries),
            gateway_name: cdktf.stringToTerraform(this._gatewayName),
            gateway_platform: iotsitewiseGatewayGatewayPlatformToTerraform(this._gatewayPlatform),
            tags: cdktf.listMapper(iotsitewiseGatewayTagsToTerraform)(this._tags),
        };
    }
}
exports.IotsitewiseGateway = IotsitewiseGateway;
// =================
// STATIC PROPERTIES
// =================
IotsitewiseGateway.tfResourceType = "awscc_iotsitewise_gateway";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW90c2l0ZXdpc2UtZ2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImlvdHNpdGV3aXNlLWdhdGV3YXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJFQUEyRTtBQUMzRSwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUE2Qy9CLFNBQWdCLHVEQUF1RCxDQUFDLE1BQXFEO0lBQzNILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyx1QkFBdUIsQ0FBQztRQUNsRixvQkFBb0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLG1CQUFtQixDQUFDO0tBQzNFLENBQUE7QUFDSCxDQUFDO0FBTkQsMEhBTUM7QUFXRCxTQUFnQixzREFBc0QsQ0FBQyxNQUFvRDtJQUN6SCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztLQUNyRCxDQUFBO0FBQ0gsQ0FBQztBQUxELHdIQUtDO0FBV0QsU0FBZ0IsNENBQTRDLENBQUMsTUFBMEM7SUFDckcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxVQUFVLEVBQUUsc0RBQXNELENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztLQUN2RixDQUFBO0FBQ0gsQ0FBQztBQUxELG9HQUtDO0FBYUQsU0FBZ0IsaUNBQWlDLENBQUMsTUFBK0I7SUFDL0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMs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QUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNNLFNBQVM7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUN6QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDbkIsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsNEJBQTRCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQztZQUN6SSxZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDeEQsZ0JBQWdCLEVBQUUsNENBQTRDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ3JGLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUN0RSxDQUFDO0lBQ0osQ0FBQzs7QUF0SEgsZ0RBdUhDO0FBckhDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csaUNBQWMsR0FBVywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2lvdHNpdGV3aXNlX2dhdGV3YXkuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIElvdHNpdGV3aXNlR2F0ZXdheUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBBIGxpc3Qgb2YgZ2F0ZXdheSBjYXBhYmlsaXR5IHN1bW1hcmllcyB0aGF0IGVhY2ggY29udGFpbiBhIG5hbWVzcGFjZSBhbmQgc3RhdHVzLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvaW90c2l0ZXdpc2VfZ2F0ZXdheS5odG1sI2dhdGV3YXlfY2FwYWJpbGl0eV9zdW1tYXJpZXMgSW90c2l0ZXdpc2VHYXRld2F5I2dhdGV3YXlfY2FwYWJpbGl0eV9zdW1tYXJpZXN9XG4gICovXG4gIHJlYWRvbmx5IGdhdGV3YXlDYXBhYmlsaXR5U3VtbWFyaWVzPzogSW90c2l0ZXdpc2VHYXRld2F5R2F0ZXdheUNhcGFiaWxpdHlTdW1tYXJpZXNbXTtcbiAgLyoqXG4gICogQSB1bmlxdWUsIGZyaWVuZGx5IG5hbWUgZm9yIHRoZSBnYXRld2F5LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvaW90c2l0ZXdpc2VfZ2F0ZXdheS5odG1sI2dhdGV3YXlfbmFtZSBJb3RzaXRld2lzZUdhdGV3YXkjZ2F0ZXdheV9uYW1lfVxuICAqL1xuICByZWFkb25seSBnYXRld2F5TmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBDb250YWlucyBhIGdhdGV3YXkncyBwbGF0Zm9ybSBpbmZvcm1hdGlvbi5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2lvdHNpdGV3aXNlX2dhdGV3YXkuaHRtbCNnYXRld2F5X3BsYXRmb3JtIElvdHNpdGV3aXNlR2F0ZXdheSNnYXRld2F5X3BsYXRmb3JtfVxuICAqL1xuICByZWFkb25seSBnYXRld2F5UGxhdGZvcm06IElvdHNpdGV3aXNlR2F0ZXdheUdhdGV3YXlQbGF0Zm9ybTtcbiAgLyoqXG4gICogQSBsaXN0IG9mIGtleS12YWx1ZSBwYWlycyB0aGF0IGNvbnRhaW4gbWV0YWRhdGEgZm9yIHRoZSBnYXRld2F5LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvaW90c2l0ZXdpc2VfZ2F0ZXdheS5odG1sI3RhZ3MgSW90c2l0ZXdpc2VHYXRld2F5I3RhZ3N9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3M/OiBJb3RzaXRld2lzZUdhdGV3YXlUYWdzW107XG59XG5leHBvcnQgaW50ZXJmYWNlIElvdHNpdGV3aXNlR2F0ZXdheUdhdGV3YXlDYXBhYmlsaXR5U3VtbWFyaWVzIHtcbiAgLyoqXG4gICogVGhlIEpTT04gZG9jdW1lbnQgdGhhdCBkZWZpbmVzIHRoZSBnYXRld2F5IGNhcGFiaWxpdHkncyBjb25maWd1cmF0aW9uLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvaW90c2l0ZXdpc2VfZ2F0ZXdheS5odG1sI2NhcGFiaWxpdHlfY29uZmlndXJhdGlvbiBJb3RzaXRld2lzZUdhdGV3YXkjY2FwYWJpbGl0eV9jb25maWd1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSBjYXBhYmlsaXR5Q29uZmlndXJhdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICogVGhlIG5hbWVzcGFjZSBvZiB0aGUgY2FwYWJpbGl0eSBjb25maWd1cmF0aW9uLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvaW90c2l0ZXdpc2VfZ2F0ZXdheS5odG1sI2NhcGFiaWxpdHlfbmFtZXNwYWNlIElvdHNpdGV3aXNlR2F0ZXdheSNjYXBhYmlsaXR5X25hbWVzcGFjZX1cbiAgKi9cbiAgcmVhZG9ubHkgY2FwYWJpbGl0eU5hbWVzcGFjZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW90c2l0ZXdpc2VHYXRld2F5R2F0ZXdheUNhcGFiaWxpdHlTdW1tYXJpZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBJb3RzaXRld2lzZUdhdGV3YXlHYXRld2F5Q2FwYWJpbGl0eVN1bW1hcmllcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjYXBhYmlsaXR5X2NvbmZpZ3VyYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2FwYWJpbGl0eUNvbmZpZ3VyYXRpb24pLFxuICAgIGNhcGFiaWxpdHlfbmFtZXNwYWNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNhcGFiaWxpdHlOYW1lc3BhY2UpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW90c2l0ZXdpc2VHYXRld2F5R2F0ZXdheVBsYXRmb3JtR3JlZW5ncmFzcyB7XG4gIC8qKlxuICAqIFRoZSBBUk4gb2YgdGhlIEdyZWVuZ3Jhc3MgZ3JvdXAuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9pb3RzaXRld2lzZV9nYXRld2F5Lmh0bWwjZ3JvdXBfYXJuIElvdHNpdGV3aXNlR2F0ZXdheSNncm91cF9hcm59XG4gICovXG4gIHJlYWRvbmx5IGdyb3VwQXJuOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpb3RzaXRld2lzZUdhdGV3YXlHYXRld2F5UGxhdGZvcm1HcmVlbmdyYXNzVG9UZXJyYWZvcm0oc3RydWN0PzogSW90c2l0ZXdpc2VHYXRld2F5R2F0ZXdheVBsYXRmb3JtR3JlZW5ncmFzcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBncm91cF9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZ3JvdXBBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW90c2l0ZXdpc2VHYXRld2F5R2F0ZXdheVBsYXRmb3JtIHtcbiAgLyoqXG4gICogQ29udGFpbnMgdGhlIEFSTiBvZiBBV1MgSW9UIEdyZWVuZ3Jhc3MgR3JvdXAgdGhhdCB0aGUgZ2F0ZXdheSBydW5zIG9uLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvaW90c2l0ZXdpc2VfZ2F0ZXdheS5odG1sI2dyZWVuZ3Jhc3MgSW90c2l0ZXdpc2VHYXRld2F5I2dyZWVuZ3Jhc3N9XG4gICovXG4gIHJlYWRvbmx5IGdyZWVuZ3Jhc3M6IElvdHNpdGV3aXNlR2F0ZXdheUdhdGV3YXlQbGF0Zm9ybUdyZWVuZ3Jhc3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpb3RzaXRld2lzZUdhdGV3YXlHYXRld2F5UGxhdGZvcm1Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBJb3RzaXRld2lzZUdhdGV3YXlHYXRld2F5UGxhdGZvcm0pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZ3JlZW5ncmFzczogaW90c2l0ZXdpc2VHYXRld2F5R2F0ZXdheVBsYXRmb3JtR3JlZW5ncmFzc1RvVGVycmFmb3JtKHN0cnVjdCEuZ3JlZW5ncmFzcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJb3RzaXRld2lzZUdhdGV3YXlUYWdzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9pb3RzaXRld2lzZV9nYXRld2F5Lmh0bWwja2V5IElvdHNpdGV3aXNlR2F0ZXdheSNrZXl9XG4gICovXG4gIHJlYWRvbmx5IGtleTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2lvdHNpdGV3aXNlX2dhdGV3YXkuaHRtbCN2YWx1ZSBJb3RzaXRld2lzZUdhdGV3YXkjdmFsdWV9XG4gICovXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpb3RzaXRld2lzZUdhdGV3YXlUYWdzVG9UZXJyYWZvcm0oc3RydWN0PzogSW90c2l0ZXdpc2VHYXRld2F5VGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9pb3RzaXRld2lzZV9nYXRld2F5Lmh0bWwgYXdzY2NfaW90c2l0ZXdpc2VfZ2F0ZXdheX1cbiovXG5leHBvcnQgY2xhc3MgSW90c2l0ZXdpc2VHYXRld2F5IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2NfaW90c2l0ZXdpc2VfZ2F0ZXdheVwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9pb3RzaXRld2lzZV9nYXRld2F5Lmh0bWwgYXdzY2NfaW90c2l0ZXdpc2VfZ2F0ZXdheX0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgSW90c2l0ZXdpc2VHYXRld2F5Q29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IElvdHNpdGV3aXNlR2F0ZXdheUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfaW90c2l0ZXdpc2VfZ2F0ZXdheScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3NjYydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2dhdGV3YXlDYXBhYmlsaXR5U3VtbWFyaWVzID0gY29uZmlnLmdhdGV3YXlDYXBhYmlsaXR5U3VtbWFyaWVzO1xuICAgIHRoaXMuX2dhdGV3YXlOYW1lID0gY29uZmlnLmdhdGV3YXlOYW1lO1xuICAgIHRoaXMuX2dhdGV3YXlQbGF0Zm9ybSA9IGNvbmZpZy5nYXRld2F5UGxhdGZvcm07XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBnYXRld2F5X2NhcGFiaWxpdHlfc3VtbWFyaWVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2dhdGV3YXlDYXBhYmlsaXR5U3VtbWFyaWVzPzogSW90c2l0ZXdpc2VHYXRld2F5R2F0ZXdheUNhcGFiaWxpdHlTdW1tYXJpZXNbXTtcbiAgcHVibGljIGdldCBnYXRld2F5Q2FwYWJpbGl0eVN1bW1hcmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdnYXRld2F5X2NhcGFiaWxpdHlfc3VtbWFyaWVzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZ2F0ZXdheUNhcGFiaWxpdHlTdW1tYXJpZXModmFsdWU6IElvdHNpdGV3aXNlR2F0ZXdheUdhdGV3YXlDYXBhYmlsaXR5U3VtbWFyaWVzW10gKSB7XG4gICAgdGhpcy5fZ2F0ZXdheUNhcGFiaWxpdHlTdW1tYXJpZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRHYXRld2F5Q2FwYWJpbGl0eVN1bW1hcmllcygpIHtcbiAgICB0aGlzLl9nYXRld2F5Q2FwYWJpbGl0eVN1bW1hcmllcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ2F0ZXdheUNhcGFiaWxpdHlTdW1tYXJpZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2F0ZXdheUNhcGFiaWxpdHlTdW1tYXJpZXNcbiAgfVxuXG4gIC8vIGdhdGV3YXlfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBnYXRld2F5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdnYXRld2F5X2lkJyk7XG4gIH1cblxuICAvLyBnYXRld2F5X25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZ2F0ZXdheU5hbWU6IHN0cmluZztcbiAgcHVibGljIGdldCBnYXRld2F5TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2dhdGV3YXlfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZ2F0ZXdheU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2dhdGV3YXlOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGdhdGV3YXlOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhdGV3YXlOYW1lXG4gIH1cblxuICAvLyBnYXRld2F5X3BsYXRmb3JtIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2dhdGV3YXlQbGF0Zm9ybTogSW90c2l0ZXdpc2VHYXRld2F5R2F0ZXdheVBsYXRmb3JtO1xuICBwdWJsaWMgZ2V0IGdhdGV3YXlQbGF0Zm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdnYXRld2F5X3BsYXRmb3JtJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZ2F0ZXdheVBsYXRmb3JtKHZhbHVlOiBJb3RzaXRld2lzZUdhdGV3YXlHYXRld2F5UGxhdGZvcm0pIHtcbiAgICB0aGlzLl9nYXRld2F5UGxhdGZvcm0gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ2F0ZXdheVBsYXRmb3JtSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhdGV3YXlQbGF0Zm9ybVxuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiBJb3RzaXRld2lzZUdhdGV3YXlUYWdzW107XG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogSW90c2l0ZXdpc2VHYXRld2F5VGFnc1tdICkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBnYXRld2F5X2NhcGFiaWxpdHlfc3VtbWFyaWVzOiBjZGt0Zi5saXN0TWFwcGVyKGlvdHNpdGV3aXNlR2F0ZXdheUdhdGV3YXlDYXBhYmlsaXR5U3VtbWFyaWVzVG9UZXJyYWZvcm0pKHRoaXMuX2dhdGV3YXlDYXBhYmlsaXR5U3VtbWFyaWVzKSxcbiAgICAgIGdhdGV3YXlfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZ2F0ZXdheU5hbWUpLFxuICAgICAgZ2F0ZXdheV9wbGF0Zm9ybTogaW90c2l0ZXdpc2VHYXRld2F5R2F0ZXdheVBsYXRmb3JtVG9UZXJyYWZvcm0odGhpcy5fZ2F0ZXdheVBsYXRmb3JtKSxcbiAgICAgIHRhZ3M6IGNka3RmLmxpc3RNYXBwZXIoaW90c2l0ZXdpc2VHYXRld2F5VGFnc1RvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICB9O1xuICB9XG59XG4iXX0=