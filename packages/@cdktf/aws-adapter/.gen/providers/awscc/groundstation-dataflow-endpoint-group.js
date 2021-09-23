"use strict";
// https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroundstationDataflowEndpointGroup = exports.groundstationDataflowEndpointGroupTagsToTerraform = exports.groundstationDataflowEndpointGroupEndpointDetailsToTerraform = exports.groundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsToTerraform = exports.groundstationDataflowEndpointGroupEndpointDetailsEndpointToTerraform = exports.groundstationDataflowEndpointGroupEndpointDetailsEndpointAddressToTerraform = void 0;
const cdktf = require("cdktf");
function groundstationDataflowEndpointGroupEndpointDetailsEndpointAddressToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.groundstationDataflowEndpointGroupEndpointDetailsEndpointAddressToTerraform = groundstationDataflowEndpointGroupEndpointDetailsEndpointAddressToTerraform;
function groundstationDataflowEndpointGroupEndpointDetailsEndpointToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        address: groundstationDataflowEndpointGroupEndpointDetailsEndpointAddressToTerraform(struct.address),
        mtu: cdktf.numberToTerraform(struct.mtu),
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.groundstationDataflowEndpointGroupEndpointDetailsEndpointToTerraform = groundstationDataflowEndpointGroupEndpointDetailsEndpointToTerraform;
function groundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds),
    };
}
exports.groundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsToTerraform = groundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsToTerraform;
function groundstationDataflowEndpointGroupEndpointDetailsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        endpoint: groundstationDataflowEndpointGroupEndpointDetailsEndpointToTerraform(struct.endpoint),
        security_details: groundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsToTerraform(struct.securityDetails),
    };
}
exports.groundstationDataflowEndpointGroupEndpointDetailsToTerraform = groundstationDataflowEndpointGroupEndpointDetailsToTerraform;
function groundstationDataflowEndpointGroupTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.groundstationDataflowEndpointGroupTagsToTerraform = groundstationDataflowEndpointGroupTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html awscc_groundstation_dataflow_endpoint_group}
*/
class GroundstationDataflowEndpointGroup extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html awscc_groundstation_dataflow_endpoint_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GroundstationDataflowEndpointGroupConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_groundstation_dataflow_endpoint_group',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._endpointDetails = config.endpointDetails;
        this._tags = config.tags;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get endpointDetails() {
        return this.interpolationForAttribute('endpoint_details');
    }
    set endpointDetails(value) {
        this._endpointDetails = value;
    }
    // Temporarily expose input value. Use with caution.
    get endpointDetailsInput() {
        return this._endpointDetails;
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
            endpoint_details: cdktf.listMapper(groundstationDataflowEndpointGroupEndpointDetailsToTerraform)(this._endpointDetails),
            tags: cdktf.listMapper(groundstationDataflowEndpointGroupTagsToTerraform)(this._tags),
        };
    }
}
exports.GroundstationDataflowEndpointGroup = GroundstationDataflowEndpointGroup;
// =================
// STATIC PROPERTIES
// =================
GroundstationDataflowEndpointGroup.tfResourceType = "awscc_groundstation_dataflow_endpoint_group";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdW5kc3RhdGlvbi1kYXRhZmxvdy1lbmRwb2ludC1ncm91cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyb3VuZHN0YXRpb24tZGF0YWZsb3ctZW5kcG9pbnQtZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDZGQUE2RjtBQUM3RiwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUF5Qi9CLFNBQWdCLDJFQUEyRSxDQUFDLE1BQXlFO0lBQ25LLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztLQUM1QyxDQUFBO0FBQ0gsQ0FBQztBQU5ELGtLQU1DO0FBaUJELFNBQWdCLG9FQUFvRSxDQUFDLE1BQWtFO0lBQ3JKLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLDJFQUEyRSxDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDckcsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3pDLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztLQUM1QyxDQUFBO0FBQ0gsQ0FBQztBQVBELG9KQU9DO0FBaUJELFNBQWdCLDJFQUEyRSxDQUFDLE1BQXlFO0lBQ25LLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsUUFB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QUFDO0lBQ3JCLENBQUM7SUFDTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7SUFDekIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ25CLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsNERBQTRELENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDdkgsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsaURBQWlELENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3RGLENBQUM7SUFDSixDQUFDOztBQXJGSCxnRkFzRkM7QUFwRkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyxpREFBYyxHQUFXLDZDQUE2QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ3JvdW5kc3RhdGlvbl9kYXRhZmxvd19lbmRwb2ludF9ncm91cC5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JvdW5kc3RhdGlvbkRhdGFmbG93RW5kcG9pbnRHcm91cENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2dyb3VuZHN0YXRpb25fZGF0YWZsb3dfZW5kcG9pbnRfZ3JvdXAuaHRtbCNlbmRwb2ludF9kZXRhaWxzIEdyb3VuZHN0YXRpb25EYXRhZmxvd0VuZHBvaW50R3JvdXAjZW5kcG9pbnRfZGV0YWlsc31cbiAgKi9cbiAgcmVhZG9ubHkgZW5kcG9pbnREZXRhaWxzOiBHcm91bmRzdGF0aW9uRGF0YWZsb3dFbmRwb2ludEdyb3VwRW5kcG9pbnREZXRhaWxzW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ3JvdW5kc3RhdGlvbl9kYXRhZmxvd19lbmRwb2ludF9ncm91cC5odG1sI3RhZ3MgR3JvdW5kc3RhdGlvbkRhdGFmbG93RW5kcG9pbnRHcm91cCN0YWdzfVxuICAqL1xuICByZWFkb25seSB0YWdzPzogR3JvdW5kc3RhdGlvbkRhdGFmbG93RW5kcG9pbnRHcm91cFRhZ3NbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgR3JvdW5kc3RhdGlvbkRhdGFmbG93RW5kcG9pbnRHcm91cEVuZHBvaW50RGV0YWlsc0VuZHBvaW50QWRkcmVzcyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ3JvdW5kc3RhdGlvbl9kYXRhZmxvd19lbmRwb2ludF9ncm91cC5odG1sI25hbWUgR3JvdW5kc3RhdGlvbkRhdGFmbG93RW5kcG9pbnRHcm91cCNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2dyb3VuZHN0YXRpb25fZGF0YWZsb3dfZW5kcG9pbnRfZ3JvdXAuaHRtbCNwb3J0IEdyb3VuZHN0YXRpb25EYXRhZmxvd0VuZHBvaW50R3JvdXAjcG9ydH1cbiAgKi9cbiAgcmVhZG9ubHkgcG9ydD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VuZHN0YXRpb25EYXRhZmxvd0VuZHBvaW50R3JvdXBFbmRwb2ludERldGFpbHNFbmRwb2ludEFkZHJlc3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBHcm91bmRzdGF0aW9uRGF0YWZsb3dFbmRwb2ludEdyb3VwRW5kcG9pbnREZXRhaWxzRW5kcG9pbnRBZGRyZXNzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wb3J0KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyb3VuZHN0YXRpb25EYXRhZmxvd0VuZHBvaW50R3JvdXBFbmRwb2ludERldGFpbHNFbmRwb2ludCB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ3JvdW5kc3RhdGlvbl9kYXRhZmxvd19lbmRwb2ludF9ncm91cC5odG1sI2FkZHJlc3MgR3JvdW5kc3RhdGlvbkRhdGFmbG93RW5kcG9pbnRHcm91cCNhZGRyZXNzfVxuICAqL1xuICByZWFkb25seSBhZGRyZXNzPzogR3JvdW5kc3RhdGlvbkRhdGFmbG93RW5kcG9pbnRHcm91cEVuZHBvaW50RGV0YWlsc0VuZHBvaW50QWRkcmVzcztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9ncm91bmRzdGF0aW9uX2RhdGFmbG93X2VuZHBvaW50X2dyb3VwLmh0bWwjbXR1IEdyb3VuZHN0YXRpb25EYXRhZmxvd0VuZHBvaW50R3JvdXAjbXR1fVxuICAqL1xuICByZWFkb25seSBtdHU/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ3JvdW5kc3RhdGlvbl9kYXRhZmxvd19lbmRwb2ludF9ncm91cC5odG1sI25hbWUgR3JvdW5kc3RhdGlvbkRhdGFmbG93RW5kcG9pbnRHcm91cCNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JvdW5kc3RhdGlvbkRhdGFmbG93RW5kcG9pbnRHcm91cEVuZHBvaW50RGV0YWlsc0VuZHBvaW50VG9UZXJyYWZvcm0oc3RydWN0PzogR3JvdW5kc3RhdGlvbkRhdGFmbG93RW5kcG9pbnRHcm91cEVuZHBvaW50RGV0YWlsc0VuZHBvaW50KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFkZHJlc3M6IGdyb3VuZHN0YXRpb25EYXRhZmxvd0VuZHBvaW50R3JvdXBFbmRwb2ludERldGFpbHNFbmRwb2ludEFkZHJlc3NUb1RlcnJhZm9ybShzdHJ1Y3QhLmFkZHJlc3MpLFxuICAgIG10dTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tdHUpLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHcm91bmRzdGF0aW9uRGF0YWZsb3dFbmRwb2ludEdyb3VwRW5kcG9pbnREZXRhaWxzU2VjdXJpdHlEZXRhaWxzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9ncm91bmRzdGF0aW9uX2RhdGFmbG93X2VuZHBvaW50X2dyb3VwLmh0bWwjcm9sZV9hcm4gR3JvdW5kc3RhdGlvbkRhdGFmbG93RW5kcG9pbnRHcm91cCNyb2xlX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgcm9sZUFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9ncm91bmRzdGF0aW9uX2RhdGFmbG93X2VuZHBvaW50X2dyb3VwLmh0bWwjc2VjdXJpdHlfZ3JvdXBfaWRzIEdyb3VuZHN0YXRpb25EYXRhZmxvd0VuZHBvaW50R3JvdXAjc2VjdXJpdHlfZ3JvdXBfaWRzfVxuICAqL1xuICByZWFkb25seSBzZWN1cml0eUdyb3VwSWRzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ3JvdW5kc3RhdGlvbl9kYXRhZmxvd19lbmRwb2ludF9ncm91cC5odG1sI3N1Ym5ldF9pZHMgR3JvdW5kc3RhdGlvbkRhdGFmbG93RW5kcG9pbnRHcm91cCNzdWJuZXRfaWRzfVxuICAqL1xuICByZWFkb25seSBzdWJuZXRJZHM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VuZHN0YXRpb25EYXRhZmxvd0VuZHBvaW50R3JvdXBFbmRwb2ludERldGFpbHNTZWN1cml0eURldGFpbHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBHcm91bmRzdGF0aW9uRGF0YWZsb3dFbmRwb2ludEdyb3VwRW5kcG9pbnREZXRhaWxzU2VjdXJpdHlEZXRhaWxzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICAgIHNlY3VyaXR5X2dyb3VwX2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zZWN1cml0eUdyb3VwSWRzKSxcbiAgICBzdWJuZXRfaWRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnN1Ym5ldElkcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHcm91bmRzdGF0aW9uRGF0YWZsb3dFbmRwb2ludEdyb3VwRW5kcG9pbnREZXRhaWxzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9ncm91bmRzdGF0aW9uX2RhdGFmbG93X2VuZHBvaW50X2dyb3VwLmh0bWwjZW5kcG9pbnQgR3JvdW5kc3RhdGlvbkRhdGFmbG93RW5kcG9pbnRHcm91cCNlbmRwb2ludH1cbiAgKi9cbiAgcmVhZG9ubHkgZW5kcG9pbnQ/OiBHcm91bmRzdGF0aW9uRGF0YWZsb3dFbmRwb2ludEdyb3VwRW5kcG9pbnREZXRhaWxzRW5kcG9pbnQ7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ3JvdW5kc3RhdGlvbl9kYXRhZmxvd19lbmRwb2ludF9ncm91cC5odG1sI3NlY3VyaXR5X2RldGFpbHMgR3JvdW5kc3RhdGlvbkRhdGFmbG93RW5kcG9pbnRHcm91cCNzZWN1cml0eV9kZXRhaWxzfVxuICAqL1xuICByZWFkb25seSBzZWN1cml0eURldGFpbHM/OiBHcm91bmRzdGF0aW9uRGF0YWZsb3dFbmRwb2ludEdyb3VwRW5kcG9pbnREZXRhaWxzU2VjdXJpdHlEZXRhaWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JvdW5kc3RhdGlvbkRhdGFmbG93RW5kcG9pbnRHcm91cEVuZHBvaW50RGV0YWlsc1RvVGVycmFmb3JtKHN0cnVjdD86IEdyb3VuZHN0YXRpb25EYXRhZmxvd0VuZHBvaW50R3JvdXBFbmRwb2ludERldGFpbHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5kcG9pbnQ6IGdyb3VuZHN0YXRpb25EYXRhZmxvd0VuZHBvaW50R3JvdXBFbmRwb2ludERldGFpbHNFbmRwb2ludFRvVGVycmFmb3JtKHN0cnVjdCEuZW5kcG9pbnQpLFxuICAgIHNlY3VyaXR5X2RldGFpbHM6IGdyb3VuZHN0YXRpb25EYXRhZmxvd0VuZHBvaW50R3JvdXBFbmRwb2ludERldGFpbHNTZWN1cml0eURldGFpbHNUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY3VyaXR5RGV0YWlscyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHcm91bmRzdGF0aW9uRGF0YWZsb3dFbmRwb2ludEdyb3VwVGFncyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ3JvdW5kc3RhdGlvbl9kYXRhZmxvd19lbmRwb2ludF9ncm91cC5odG1sI2tleSBHcm91bmRzdGF0aW9uRGF0YWZsb3dFbmRwb2ludEdyb3VwI2tleX1cbiAgKi9cbiAgcmVhZG9ubHkga2V5Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2dyb3VuZHN0YXRpb25fZGF0YWZsb3dfZW5kcG9pbnRfZ3JvdXAuaHRtbCN2YWx1ZSBHcm91bmRzdGF0aW9uRGF0YWZsb3dFbmRwb2ludEdyb3VwI3ZhbHVlfVxuICAqL1xuICByZWFkb25seSB2YWx1ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VuZHN0YXRpb25EYXRhZmxvd0VuZHBvaW50R3JvdXBUYWdzVG9UZXJyYWZvcm0oc3RydWN0PzogR3JvdW5kc3RhdGlvbkRhdGFmbG93RW5kcG9pbnRHcm91cFRhZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ3JvdW5kc3RhdGlvbl9kYXRhZmxvd19lbmRwb2ludF9ncm91cC5odG1sIGF3c2NjX2dyb3VuZHN0YXRpb25fZGF0YWZsb3dfZW5kcG9pbnRfZ3JvdXB9XG4qL1xuZXhwb3J0IGNsYXNzIEdyb3VuZHN0YXRpb25EYXRhZmxvd0VuZHBvaW50R3JvdXAgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NjY19ncm91bmRzdGF0aW9uX2RhdGFmbG93X2VuZHBvaW50X2dyb3VwXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2dyb3VuZHN0YXRpb25fZGF0YWZsb3dfZW5kcG9pbnRfZ3JvdXAuaHRtbCBhd3NjY19ncm91bmRzdGF0aW9uX2RhdGFmbG93X2VuZHBvaW50X2dyb3VwfSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBHcm91bmRzdGF0aW9uRGF0YWZsb3dFbmRwb2ludEdyb3VwQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEdyb3VuZHN0YXRpb25EYXRhZmxvd0VuZHBvaW50R3JvdXBDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c2NjX2dyb3VuZHN0YXRpb25fZGF0YWZsb3dfZW5kcG9pbnRfZ3JvdXAnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9lbmRwb2ludERldGFpbHMgPSBjb25maWcuZW5kcG9pbnREZXRhaWxzO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBlbmRwb2ludF9kZXRhaWxzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2VuZHBvaW50RGV0YWlsczogR3JvdW5kc3RhdGlvbkRhdGFmbG93RW5kcG9pbnRHcm91cEVuZHBvaW50RGV0YWlsc1tdO1xuICBwdWJsaWMgZ2V0IGVuZHBvaW50RGV0YWlscygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlbmRwb2ludF9kZXRhaWxzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZW5kcG9pbnREZXRhaWxzKHZhbHVlOiBHcm91bmRzdGF0aW9uRGF0YWZsb3dFbmRwb2ludEdyb3VwRW5kcG9pbnREZXRhaWxzW10pIHtcbiAgICB0aGlzLl9lbmRwb2ludERldGFpbHMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5kcG9pbnREZXRhaWxzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZHBvaW50RGV0YWlsc1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiBHcm91bmRzdGF0aW9uRGF0YWZsb3dFbmRwb2ludEdyb3VwVGFnc1tdO1xuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IEdyb3VuZHN0YXRpb25EYXRhZmxvd0VuZHBvaW50R3JvdXBUYWdzW10gKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzXG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVuZHBvaW50X2RldGFpbHM6IGNka3RmLmxpc3RNYXBwZXIoZ3JvdW5kc3RhdGlvbkRhdGFmbG93RW5kcG9pbnRHcm91cEVuZHBvaW50RGV0YWlsc1RvVGVycmFmb3JtKSh0aGlzLl9lbmRwb2ludERldGFpbHMpLFxuICAgICAgdGFnczogY2RrdGYubGlzdE1hcHBlcihncm91bmRzdGF0aW9uRGF0YWZsb3dFbmRwb2ludEdyb3VwVGFnc1RvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICB9O1xuICB9XG59XG4iXX0=