"use strict";
// https://www.terraform.io/docs/providers/awscc/r/emr_studio.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmrStudio = exports.emrStudioTagsToTerraform = void 0;
const cdktf = require("cdktf");
function emrStudioTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.emrStudioTagsToTerraform = emrStudioTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio.html awscc_emr_studio}
*/
class EmrStudio extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio.html awscc_emr_studio} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrStudioConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_emr_studio',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._authMode = config.authMode;
        this._defaultS3Location = config.defaultS3Location;
        this._description = config.description;
        this._engineSecurityGroupId = config.engineSecurityGroupId;
        this._name = config.name;
        this._serviceRole = config.serviceRole;
        this._subnetIds = config.subnetIds;
        this._tags = config.tags;
        this._userRole = config.userRole;
        this._vpcId = config.vpcId;
        this._workspaceSecurityGroupId = config.workspaceSecurityGroupId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get authMode() {
        return this.getStringAttribute('auth_mode');
    }
    set authMode(value) {
        this._authMode = value;
    }
    // Temporarily expose input value. Use with caution.
    get authModeInput() {
        return this._authMode;
    }
    get defaultS3Location() {
        return this.getStringAttribute('default_s3_location');
    }
    set defaultS3Location(value) {
        this._defaultS3Location = value;
    }
    // Temporarily expose input value. Use with caution.
    get defaultS3LocationInput() {
        return this._defaultS3Location;
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
    get engineSecurityGroupId() {
        return this.getStringAttribute('engine_security_group_id');
    }
    set engineSecurityGroupId(value) {
        this._engineSecurityGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    get engineSecurityGroupIdInput() {
        return this._engineSecurityGroupId;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
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
    get serviceRole() {
        return this.getStringAttribute('service_role');
    }
    set serviceRole(value) {
        this._serviceRole = value;
    }
    // Temporarily expose input value. Use with caution.
    get serviceRoleInput() {
        return this._serviceRole;
    }
    // studio_id - computed: true, optional: false, required: false
    get studioId() {
        return this.getStringAttribute('studio_id');
    }
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    set subnetIds(value) {
        this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    get subnetIdsInput() {
        return this._subnetIds;
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
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
    get userRole() {
        return this.getStringAttribute('user_role');
    }
    set userRole(value) {
        this._userRole = value;
    }
    // Temporarily expose input value. Use with caution.
    get userRoleInput() {
        return this._userRole;
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
    get workspaceSecurityGroupId() {
        return this.getStringAttribute('workspace_security_group_id');
    }
    set workspaceSecurityGroupId(value) {
        this._workspaceSecurityGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    get workspaceSecurityGroupIdInput() {
        return this._workspaceSecurityGroupId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            auth_mode: cdktf.stringToTerraform(this._authMode),
            default_s3_location: cdktf.stringToTerraform(this._defaultS3Location),
            description: cdktf.stringToTerraform(this._description),
            engine_security_group_id: cdktf.stringToTerraform(this._engineSecurityGroupId),
            name: cdktf.stringToTerraform(this._name),
            service_role: cdktf.stringToTerraform(this._serviceRole),
            subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
            tags: cdktf.listMapper(emrStudioTagsToTerraform)(this._tags),
            user_role: cdktf.stringToTerraform(this._userRole),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            workspace_security_group_id: cdktf.stringToTerraform(this._workspaceSecurityGroupId),
        };
    }
}
exports.EmrStudio = EmrStudio;
// =================
// STATIC PROPERTIES
// =================
EmrStudio.tfResourceType = "awscc_emr_studio";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1yLXN0dWRpby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVtci1zdHVkaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGtFQUFrRTtBQUNsRSwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUFpRi9CLFNBQWdCLHdCQUF3QixDQUFDLE1BQXNCO0lBQzdELElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3pDLEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQU5ELDREQU1DO0FBR0Q7O0VBRUU7QUFDRixNQUFhLFNBQVUsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBT3BELGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQXVCO1FBQ3RFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsa0JBQWtCO1lBQ3pDLDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsT0FBTzthQUN0QjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztRQUNuRCxJQUFJLENBQUMsWUFB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QUFzQixDQUFDO1lBQzlFLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QyxZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDeEQsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUN0RSxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDNUQsU0FBUyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2xELE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM1QywyQkFBMkIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDO1NBQ3JGLENBQUM7SUFDSixDQUFDOztBQXpPSCw4QkEwT0M7QUF4T0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyx3QkFBYyxHQUFXLGtCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZW1yX3N0dWRpby5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1yU3R1ZGlvQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBTdHVkaW8gYXV0aGVudGljYXRlcyB1c2VycyB1c2luZyBzaW5nbGUgc2lnbi1vbiAoU1NPKSBvciBJQU0uIEFtYXpvbiBFTVIgU3R1ZGlvIGN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFNTTyBhdXRoZW50aWNhdGlvbi5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Vtcl9zdHVkaW8uaHRtbCNhdXRoX21vZGUgRW1yU3R1ZGlvI2F1dGhfbW9kZX1cbiAgKi9cbiAgcmVhZG9ubHkgYXV0aE1vZGU6IHN0cmluZztcbiAgLyoqXG4gICogVGhlIGRlZmF1bHQgQW1hem9uIFMzIGxvY2F0aW9uIHRvIGJhY2sgdXAgRU1SIFN0dWRpbyBXb3Jrc3BhY2VzIGFuZCBub3RlYm9vayBmaWxlcy4gQSBTdHVkaW8gdXNlciBjYW4gc2VsZWN0IGFuIGFsdGVybmF0aXZlIEFtYXpvbiBTMyBsb2NhdGlvbiB3aGVuIGNyZWF0aW5nIGEgV29ya3NwYWNlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZW1yX3N0dWRpby5odG1sI2RlZmF1bHRfczNfbG9jYXRpb24gRW1yU3R1ZGlvI2RlZmF1bHRfczNfbG9jYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGRlZmF1bHRTM0xvY2F0aW9uOiBzdHJpbmc7XG4gIC8qKlxuICAqIEEgZGV0YWlsZWQgZGVzY3JpcHRpb24gb2YgdGhlIFN0dWRpby5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Vtcl9zdHVkaW8uaHRtbCNkZXNjcmlwdGlvbiBFbXJTdHVkaW8jZGVzY3JpcHRpb259XG4gICovXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgSUQgb2YgdGhlIEFtYXpvbiBFTVIgU3R1ZGlvIEVuZ2luZSBzZWN1cml0eSBncm91cC4gVGhlIEVuZ2luZSBzZWN1cml0eSBncm91cCBhbGxvd3MgaW5ib3VuZCBuZXR3b3JrIHRyYWZmaWMgZnJvbSB0aGUgV29ya3NwYWNlIHNlY3VyaXR5IGdyb3VwLCBhbmQgaXQgbXVzdCBiZSBpbiB0aGUgc2FtZSBWUEMgc3BlY2lmaWVkIGJ5IFZwY0lkLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZW1yX3N0dWRpby5odG1sI2VuZ2luZV9zZWN1cml0eV9ncm91cF9pZCBFbXJTdHVkaW8jZW5naW5lX3NlY3VyaXR5X2dyb3VwX2lkfVxuICAqL1xuICByZWFkb25seSBlbmdpbmVTZWN1cml0eUdyb3VwSWQ6IHN0cmluZztcbiAgLyoqXG4gICogQSBkZXNjcmlwdGl2ZSBuYW1lIGZvciB0aGUgQW1hem9uIEVNUiBTdHVkaW8uXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lbXJfc3R1ZGlvLmh0bWwjbmFtZSBFbXJTdHVkaW8jbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Vtcl9zdHVkaW8uaHRtbCNzZXJ2aWNlX3JvbGUgRW1yU3R1ZGlvI3NlcnZpY2Vfcm9sZX1cbiAgKi9cbiAgcmVhZG9ubHkgc2VydmljZVJvbGU6IHN0cmluZztcbiAgLyoqXG4gICogQSBsaXN0IG9mIHVwIHRvIDUgc3VibmV0IElEcyB0byBhc3NvY2lhdGUgd2l0aCB0aGUgU3R1ZGlvLiBUaGUgc3VibmV0cyBtdXN0IGJlbG9uZyB0byB0aGUgVlBDIHNwZWNpZmllZCBieSBWcGNJZC4gU3R1ZGlvIHVzZXJzIGNhbiBjcmVhdGUgYSBXb3Jrc3BhY2UgaW4gYW55IG9mIHRoZSBzcGVjaWZpZWQgc3VibmV0cy5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Vtcl9zdHVkaW8uaHRtbCNzdWJuZXRfaWRzIEVtclN0dWRpbyNzdWJuZXRfaWRzfVxuICAqL1xuICByZWFkb25seSBzdWJuZXRJZHM6IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Vtcl9zdHVkaW8uaHRtbCN0YWdzIEVtclN0dWRpbyN0YWdzfVxuICAqL1xuICByZWFkb25seSB0YWdzPzogRW1yU3R1ZGlvVGFnc1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Vtcl9zdHVkaW8uaHRtbCN1c2VyX3JvbGUgRW1yU3R1ZGlvI3VzZXJfcm9sZX1cbiAgKi9cbiAgcmVhZG9ubHkgdXNlclJvbGU6IHN0cmluZztcbiAgLyoqXG4gICogVGhlIElEIG9mIHRoZSBBbWF6b24gVmlydHVhbCBQcml2YXRlIENsb3VkIChBbWF6b24gVlBDKSB0byBhc3NvY2lhdGUgd2l0aCB0aGUgU3R1ZGlvLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZW1yX3N0dWRpby5odG1sI3ZwY19pZCBFbXJTdHVkaW8jdnBjX2lkfVxuICAqL1xuICByZWFkb25seSB2cGNJZDogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgSUQgb2YgdGhlIEFtYXpvbiBFTVIgU3R1ZGlvIFdvcmtzcGFjZSBzZWN1cml0eSBncm91cC4gVGhlIFdvcmtzcGFjZSBzZWN1cml0eSBncm91cCBhbGxvd3Mgb3V0Ym91bmQgbmV0d29yayB0cmFmZmljIHRvIHJlc291cmNlcyBpbiB0aGUgRW5naW5lIHNlY3VyaXR5IGdyb3VwLCBhbmQgaXQgbXVzdCBiZSBpbiB0aGUgc2FtZSBWUEMgc3BlY2lmaWVkIGJ5IFZwY0lkLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZW1yX3N0dWRpby5odG1sI3dvcmtzcGFjZV9zZWN1cml0eV9ncm91cF9pZCBFbXJTdHVkaW8jd29ya3NwYWNlX3NlY3VyaXR5X2dyb3VwX2lkfVxuICAqL1xuICByZWFkb25seSB3b3Jrc3BhY2VTZWN1cml0eUdyb3VwSWQ6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRW1yU3R1ZGlvVGFncyB7XG4gIC8qKlxuICAqIFRoZSBrZXkgbmFtZSBvZiB0aGUgdGFnLiBZb3UgY2FuIHNwZWNpZnkgYSB2YWx1ZSB0aGF0IGlzIDEgdG8gMTI3IFVuaWNvZGUgY2hhcmFjdGVycyBpbiBsZW5ndGggYW5kIGNhbm5vdCBiZSBwcmVmaXhlZCB3aXRoIGF3czouIFlvdSBjYW4gdXNlIGFueSBvZiB0aGUgZm9sbG93aW5nIGNoYXJhY3RlcnM6IHRoZSBzZXQgb2YgVW5pY29kZSBsZXR0ZXJzLCBkaWdpdHMsIHdoaXRlc3BhY2UsIF8sIC4sIC8sID0sICssIGFuZCAtLiBcbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Vtcl9zdHVkaW8uaHRtbCNrZXkgRW1yU3R1ZGlvI2tleX1cbiAgKi9cbiAgcmVhZG9ubHkga2V5OiBzdHJpbmc7XG4gIC8qKlxuICAqIFRoZSB2YWx1ZSBmb3IgdGhlIHRhZy4gWW91IGNhbiBzcGVjaWZ5IGEgdmFsdWUgdGhhdCBpcyAwIHRvIDI1NSBVbmljb2RlIGNoYXJhY3RlcnMgaW4gbGVuZ3RoLiBZb3UgY2FuIHVzZSBhbnkgb2YgdGhlIGZvbGxvd2luZyBjaGFyYWN0ZXJzOiB0aGUgc2V0IG9mIFVuaWNvZGUgbGV0dGVycywgZGlnaXRzLCB3aGl0ZXNwYWNlLCBfLCAuLCAvLCA9LCArLCBhbmQgLS4gXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lbXJfc3R1ZGlvLmh0bWwjdmFsdWUgRW1yU3R1ZGlvI3ZhbHVlfVxuICAqL1xuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW1yU3R1ZGlvVGFnc1RvVGVycmFmb3JtKHN0cnVjdD86IEVtclN0dWRpb1RhZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZW1yX3N0dWRpby5odG1sIGF3c2NjX2Vtcl9zdHVkaW99XG4qL1xuZXhwb3J0IGNsYXNzIEVtclN0dWRpbyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX2Vtcl9zdHVkaW9cIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZW1yX3N0dWRpby5odG1sIGF3c2NjX2Vtcl9zdHVkaW99IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIEVtclN0dWRpb0NvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBFbXJTdHVkaW9Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c2NjX2Vtcl9zdHVkaW8nLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hdXRoTW9kZSA9IGNvbmZpZy5hdXRoTW9kZTtcbiAgICB0aGlzLl9kZWZhdWx0UzNMb2NhdGlvbiA9IGNvbmZpZy5kZWZhdWx0UzNMb2NhdGlvbjtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGNvbmZpZy5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLl9lbmdpbmVTZWN1cml0eUdyb3VwSWQgPSBjb25maWcuZW5naW5lU2VjdXJpdHlHcm91cElkO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9zZXJ2aWNlUm9sZSA9IGNvbmZpZy5zZXJ2aWNlUm9sZTtcbiAgICB0aGlzLl9zdWJuZXRJZHMgPSBjb25maWcuc3VibmV0SWRzO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl91c2VyUm9sZSA9IGNvbmZpZy51c2VyUm9sZTtcbiAgICB0aGlzLl92cGNJZCA9IGNvbmZpZy52cGNJZDtcbiAgICB0aGlzLl93b3Jrc3BhY2VTZWN1cml0eUdyb3VwSWQgPSBjb25maWcud29ya3NwYWNlU2VjdXJpdHlHcm91cElkO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGF1dGhfbW9kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hdXRoTW9kZTogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGF1dGhNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXV0aF9tb2RlJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRoTW9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXV0aE1vZGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0aE1vZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aE1vZGVcbiAgfVxuXG4gIC8vIGRlZmF1bHRfczNfbG9jYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGVmYXVsdFMzTG9jYXRpb246IHN0cmluZztcbiAgcHVibGljIGdldCBkZWZhdWx0UzNMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlZmF1bHRfczNfbG9jYXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlZmF1bHRTM0xvY2F0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWZhdWx0UzNMb2NhdGlvbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZhdWx0UzNMb2NhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0UzNMb2NhdGlvblxuICB9XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXNjcmlwdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlc2NyaXB0aW9uKCkge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvblxuICB9XG5cbiAgLy8gZW5naW5lX3NlY3VyaXR5X2dyb3VwX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2VuZ2luZVNlY3VyaXR5R3JvdXBJZDogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGVuZ2luZVNlY3VyaXR5R3JvdXBJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuZ2luZV9zZWN1cml0eV9ncm91cF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW5naW5lU2VjdXJpdHlHcm91cElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lbmdpbmVTZWN1cml0eUdyb3VwSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5naW5lU2VjdXJpdHlHcm91cElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZ2luZVNlY3VyaXR5R3JvdXBJZFxuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVcbiAgfVxuXG4gIC8vIHNlcnZpY2Vfcm9sZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zZXJ2aWNlUm9sZTogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VSb2xlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VydmljZV9yb2xlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXJ2aWNlUm9sZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VydmljZVJvbGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VydmljZVJvbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmljZVJvbGVcbiAgfVxuXG4gIC8vIHN0dWRpb19pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0dWRpb0lkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3R1ZGlvX2lkJyk7XG4gIH1cblxuICAvLyBzdWJuZXRfaWRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3N1Ym5ldElkczogc3RyaW5nW107XG4gIHB1YmxpYyBnZXQgc3VibmV0SWRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3N1Ym5ldF9pZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN1Ym5ldElkcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zdWJuZXRJZHMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3VibmV0SWRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1Ym5ldElkc1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogRW1yU3R1ZGlvVGFnc1tdO1xuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IEVtclN0dWRpb1RhZ3NbXSApIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NcbiAgfVxuXG4gIC8vIHVybCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VybCcpO1xuICB9XG5cbiAgLy8gdXNlcl9yb2xlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3VzZXJSb2xlOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgdXNlclJvbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1c2VyX3JvbGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVzZXJSb2xlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91c2VyUm9sZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1c2VyUm9sZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyUm9sZVxuICB9XG5cbiAgLy8gdnBjX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ZwY0lkOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgdnBjSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2cGNfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZwY0lkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92cGNJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2cGNJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92cGNJZFxuICB9XG5cbiAgLy8gd29ya3NwYWNlX3NlY3VyaXR5X2dyb3VwX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3dvcmtzcGFjZVNlY3VyaXR5R3JvdXBJZDogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHdvcmtzcGFjZVNlY3VyaXR5R3JvdXBJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3dvcmtzcGFjZV9zZWN1cml0eV9ncm91cF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgd29ya3NwYWNlU2VjdXJpdHlHcm91cElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl93b3Jrc3BhY2VTZWN1cml0eUdyb3VwSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgd29ya3NwYWNlU2VjdXJpdHlHcm91cElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzcGFjZVNlY3VyaXR5R3JvdXBJZFxuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhdXRoX21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2F1dGhNb2RlKSxcbiAgICAgIGRlZmF1bHRfczNfbG9jYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RlZmF1bHRTM0xvY2F0aW9uKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZXNjcmlwdGlvbiksXG4gICAgICBlbmdpbmVfc2VjdXJpdHlfZ3JvdXBfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2VuZ2luZVNlY3VyaXR5R3JvdXBJZCksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHNlcnZpY2Vfcm9sZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc2VydmljZVJvbGUpLFxuICAgICAgc3VibmV0X2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fc3VibmV0SWRzKSxcbiAgICAgIHRhZ3M6IGNka3RmLmxpc3RNYXBwZXIoZW1yU3R1ZGlvVGFnc1RvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHVzZXJfcm9sZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdXNlclJvbGUpLFxuICAgICAgdnBjX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl92cGNJZCksXG4gICAgICB3b3Jrc3BhY2Vfc2VjdXJpdHlfZ3JvdXBfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3dvcmtzcGFjZVNlY3VyaXR5R3JvdXBJZCksXG4gICAgfTtcbiAgfVxufVxuIl19