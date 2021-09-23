"use strict";
// https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.SagemakerProject = exports.sagemakerProjectTagsToTerraform = exports.sagemakerProjectServiceCatalogProvisioningDetailsToTerraform = exports.sagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersToTerraform = exports.sagemakerProjectServiceCatalogProvisionedProductDetailsToTerraform = exports.SagemakerProjectServiceCatalogProvisionedProductDetails = void 0;
const cdktf = require("cdktf");
class SagemakerProjectServiceCatalogProvisionedProductDetails extends cdktf.ComplexComputedList {
    get provisionedProductId() {
        return this.getStringAttribute('provisioned_product_id');
    }
    set provisionedProductId(value) {
        this._provisionedProductId = value;
    }
    resetProvisionedProductId() {
        this._provisionedProductId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get provisionedProductIdInput() {
        return this._provisionedProductId;
    }
    get provisionedProductStatusMessage() {
        return this.getStringAttribute('provisioned_product_status_message');
    }
    set provisionedProductStatusMessage(value) {
        this._provisionedProductStatusMessage = value;
    }
    resetProvisionedProductStatusMessage() {
        this._provisionedProductStatusMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get provisionedProductStatusMessageInput() {
        return this._provisionedProductStatusMessage;
    }
}
exports.SagemakerProjectServiceCatalogProvisionedProductDetails = SagemakerProjectServiceCatalogProvisionedProductDetails;
function sagemakerProjectServiceCatalogProvisionedProductDetailsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        provisioned_product_id: cdktf.stringToTerraform(struct.provisionedProductId),
        provisioned_product_status_message: cdktf.stringToTerraform(struct.provisionedProductStatusMessage),
    };
}
exports.sagemakerProjectServiceCatalogProvisionedProductDetailsToTerraform = sagemakerProjectServiceCatalogProvisionedProductDetailsToTerraform;
function sagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.sagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersToTerraform = sagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersToTerraform;
function sagemakerProjectServiceCatalogProvisioningDetailsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        path_id: cdktf.stringToTerraform(struct.pathId),
        product_id: cdktf.stringToTerraform(struct.productId),
        provisioning_artifact_id: cdktf.stringToTerraform(struct.provisioningArtifactId),
        provisioning_parameters: cdktf.listMapper(sagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersToTerraform)(struct.provisioningParameters),
    };
}
exports.sagemakerProjectServiceCatalogProvisioningDetailsToTerraform = sagemakerProjectServiceCatalogProvisioningDetailsToTerraform;
function sagemakerProjectTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.sagemakerProjectTagsToTerraform = sagemakerProjectTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html awscc_sagemaker_project}
*/
class SagemakerProject extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html awscc_sagemaker_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerProjectConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_project',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._projectDescription = config.projectDescription;
        this._projectName = config.projectName;
        this._serviceCatalogProvisioningDetails = config.serviceCatalogProvisioningDetails;
        this._tags = config.tags;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // creation_time - computed: true, optional: false, required: false
    get creationTime() {
        return this.getStringAttribute('creation_time');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // project_arn - computed: true, optional: false, required: false
    get projectArn() {
        return this.getStringAttribute('project_arn');
    }
    get projectDescription() {
        return this.getStringAttribute('project_description');
    }
    set projectDescription(value) {
        this._projectDescription = value;
    }
    resetProjectDescription() {
        this._projectDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get projectDescriptionInput() {
        return this._projectDescription;
    }
    // project_id - computed: true, optional: false, required: false
    get projectId() {
        return this.getStringAttribute('project_id');
    }
    get projectName() {
        return this.getStringAttribute('project_name');
    }
    set projectName(value) {
        this._projectName = value;
    }
    // Temporarily expose input value. Use with caution.
    get projectNameInput() {
        return this._projectName;
    }
    // project_status - computed: true, optional: false, required: false
    get projectStatus() {
        return this.getStringAttribute('project_status');
    }
    // service_catalog_provisioned_product_details - computed: true, optional: false, required: false
    get serviceCatalogProvisionedProductDetails() {
        return this.interpolationForAttribute('service_catalog_provisioned_product_details');
    }
    get serviceCatalogProvisioningDetails() {
        return this.interpolationForAttribute('service_catalog_provisioning_details');
    }
    set serviceCatalogProvisioningDetails(value) {
        this._serviceCatalogProvisioningDetails = value;
    }
    // Temporarily expose input value. Use with caution.
    get serviceCatalogProvisioningDetailsInput() {
        return this._serviceCatalogProvisioningDetails;
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
            project_description: cdktf.stringToTerraform(this._projectDescription),
            project_name: cdktf.stringToTerraform(this._projectName),
            service_catalog_provisioning_details: sagemakerProjectServiceCatalogProvisioningDetailsToTerraform(this._serviceCatalogProvisioningDetails),
            tags: cdktf.listMapper(sagemakerProjectTagsToTerraform)(this._tags),
        };
    }
}
exports.SagemakerProject = SagemakerProject;
// =================
// STATIC PROPERTIES
// =================
SagemakerProject.tfResourceType = "awscc_sagemaker_project";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FnZW1ha2VyLXByb2plY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYWdlbWFrZXItcHJvamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEseUVBQXlFO0FBQ3pFLDJDQUEyQzs7O0FBRzNDLCtCQUErQjtBQThCL0IsTUFBYSx1REFBd0QsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBSXBHLElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNELElBQVcsb0JBQW9CLENBQUMsS0FBYTtRQUMzQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUFDTSx5QkFBeUI7UUFDOUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBQztJQUN6QyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcseUJBQXlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFBO0lBQ25DLENBQUM7SUFJRCxJQUFXLCtCQUErQjtRQUN4QyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFDRCxJQUFXLCtCQUErQixDQUFDLEtBQWE7UUFDdEQsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLEtBQUssQ0FBQztJQUNoRCxDQUFDO0lBQ00sb0NBQW9DO1FBQ3pDLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxTQUFTLENBQUM7SUFDcEQsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLG9DQUFvQztRQUM3QyxPQUFPLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQTtJQUM5QyxDQUFDO0NBQ0Y7QUFqQ0QsMEhBaUNDO0FBRUQsU0FBZ0Isa0VBQWtFLENBQUMsTUFBZ0U7SUFDakosSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFF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QjtBQUNwQixvQkFBb0I7QUFDRywrQkFBYyxHQUFXLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivc2FnZW1ha2VyX3Byb2plY3QuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIFNhZ2VtYWtlclByb2plY3RDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBwcm9qZWN0LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivc2FnZW1ha2VyX3Byb2plY3QuaHRtbCNwcm9qZWN0X2Rlc2NyaXB0aW9uIFNhZ2VtYWtlclByb2plY3QjcHJvamVjdF9kZXNjcmlwdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgcHJvamVjdERlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgbmFtZSBvZiB0aGUgcHJvamVjdC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3NhZ2VtYWtlcl9wcm9qZWN0Lmh0bWwjcHJvamVjdF9uYW1lIFNhZ2VtYWtlclByb2plY3QjcHJvamVjdF9uYW1lfVxuICAqL1xuICByZWFkb25seSBwcm9qZWN0TmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBJbnB1dCBTZXJ2aWNlQ2F0YWxvZyBQcm92aXNpb25pbmcgRGV0YWlsc1xuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivc2FnZW1ha2VyX3Byb2plY3QuaHRtbCNzZXJ2aWNlX2NhdGFsb2dfcHJvdmlzaW9uaW5nX2RldGFpbHMgU2FnZW1ha2VyUHJvamVjdCNzZXJ2aWNlX2NhdGFsb2dfcHJvdmlzaW9uaW5nX2RldGFpbHN9XG4gICovXG4gIHJlYWRvbmx5IHNlcnZpY2VDYXRhbG9nUHJvdmlzaW9uaW5nRGV0YWlsczogU2FnZW1ha2VyUHJvamVjdFNlcnZpY2VDYXRhbG9nUHJvdmlzaW9uaW5nRGV0YWlscztcbiAgLyoqXG4gICogQW4gYXJyYXkgb2Yga2V5LXZhbHVlIHBhaXJzIHRvIGFwcGx5IHRvIHRoaXMgcmVzb3VyY2UuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9zYWdlbWFrZXJfcHJvamVjdC5odG1sI3RhZ3MgU2FnZW1ha2VyUHJvamVjdCN0YWdzfVxuICAqL1xuICByZWFkb25seSB0YWdzPzogU2FnZW1ha2VyUHJvamVjdFRhZ3NbXTtcbn1cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJQcm9qZWN0U2VydmljZUNhdGFsb2dQcm92aXNpb25lZFByb2R1Y3REZXRhaWxzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gcHJvdmlzaW9uZWRfcHJvZHVjdF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Byb3Zpc2lvbmVkUHJvZHVjdElkPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHByb3Zpc2lvbmVkUHJvZHVjdElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvdmlzaW9uZWRfcHJvZHVjdF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvdmlzaW9uZWRQcm9kdWN0SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Byb3Zpc2lvbmVkUHJvZHVjdElkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJvdmlzaW9uZWRQcm9kdWN0SWQoKSB7XG4gICAgdGhpcy5fcHJvdmlzaW9uZWRQcm9kdWN0SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb3Zpc2lvbmVkUHJvZHVjdElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3Zpc2lvbmVkUHJvZHVjdElkXG4gIH1cblxuICAvLyBwcm92aXNpb25lZF9wcm9kdWN0X3N0YXR1c19tZXNzYWdlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJvdmlzaW9uZWRQcm9kdWN0U3RhdHVzTWVzc2FnZT86IHN0cmluZztcbiAgcHVibGljIGdldCBwcm92aXNpb25lZFByb2R1Y3RTdGF0dXNNZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvdmlzaW9uZWRfcHJvZHVjdF9zdGF0dXNfbWVzc2FnZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvdmlzaW9uZWRQcm9kdWN0U3RhdHVzTWVzc2FnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJvdmlzaW9uZWRQcm9kdWN0U3RhdHVzTWVzc2FnZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByb3Zpc2lvbmVkUHJvZHVjdFN0YXR1c01lc3NhZ2UoKSB7XG4gICAgdGhpcy5fcHJvdmlzaW9uZWRQcm9kdWN0U3RhdHVzTWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvdmlzaW9uZWRQcm9kdWN0U3RhdHVzTWVzc2FnZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm92aXNpb25lZFByb2R1Y3RTdGF0dXNNZXNzYWdlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlclByb2plY3RTZXJ2aWNlQ2F0YWxvZ1Byb3Zpc2lvbmVkUHJvZHVjdERldGFpbHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJQcm9qZWN0U2VydmljZUNhdGFsb2dQcm92aXNpb25lZFByb2R1Y3REZXRhaWxzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHByb3Zpc2lvbmVkX3Byb2R1Y3RfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvdmlzaW9uZWRQcm9kdWN0SWQpLFxuICAgIHByb3Zpc2lvbmVkX3Byb2R1Y3Rfc3RhdHVzX21lc3NhZ2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvdmlzaW9uZWRQcm9kdWN0U3RhdHVzTWVzc2FnZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJQcm9qZWN0U2VydmljZUNhdGFsb2dQcm92aXNpb25pbmdEZXRhaWxzUHJvdmlzaW9uaW5nUGFyYW1ldGVycyB7XG4gIC8qKlxuICAqIFRoZSBwYXJhbWV0ZXIga2V5LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivc2FnZW1ha2VyX3Byb2plY3QuaHRtbCNrZXkgU2FnZW1ha2VyUHJvamVjdCNrZXl9XG4gICovXG4gIHJlYWRvbmx5IGtleTogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgcGFyYW1ldGVyIHZhbHVlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivc2FnZW1ha2VyX3Byb2plY3QuaHRtbCN2YWx1ZSBTYWdlbWFrZXJQcm9qZWN0I3ZhbHVlfVxuICAqL1xuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyUHJvamVjdFNlcnZpY2VDYXRhbG9nUHJvdmlzaW9uaW5nRGV0YWlsc1Byb3Zpc2lvbmluZ1BhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJQcm9qZWN0U2VydmljZUNhdGFsb2dQcm92aXNpb25pbmdEZXRhaWxzUHJvdmlzaW9uaW5nUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJQcm9qZWN0U2VydmljZUNhdGFsb2dQcm92aXNpb25pbmdEZXRhaWxzIHtcbiAgLyoqXG4gICogVGhlIHBhdGggaWRlbnRpZmllciBvZiB0aGUgcHJvZHVjdC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3NhZ2VtYWtlcl9wcm9qZWN0Lmh0bWwjcGF0aF9pZCBTYWdlbWFrZXJQcm9qZWN0I3BhdGhfaWR9XG4gICovXG4gIHJlYWRvbmx5IHBhdGhJZD86IHN0cmluZztcbiAgLyoqXG4gICogU2VydmljZSBDYXRhbG9nIHByb2R1Y3QgaWRlbnRpZmllci5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3NhZ2VtYWtlcl9wcm9qZWN0Lmh0bWwjcHJvZHVjdF9pZCBTYWdlbWFrZXJQcm9qZWN0I3Byb2R1Y3RfaWR9XG4gICovXG4gIHJlYWRvbmx5IHByb2R1Y3RJZDogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgaWRlbnRpZmllciBvZiB0aGUgcHJvdmlzaW9uaW5nIGFydGlmYWN0IChhbHNvIGtub3duIGFzIGEgdmVyc2lvbikuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9zYWdlbWFrZXJfcHJvamVjdC5odG1sI3Byb3Zpc2lvbmluZ19hcnRpZmFjdF9pZCBTYWdlbWFrZXJQcm9qZWN0I3Byb3Zpc2lvbmluZ19hcnRpZmFjdF9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgcHJvdmlzaW9uaW5nQXJ0aWZhY3RJZDogc3RyaW5nO1xuICAvKipcbiAgKiBQYXJhbWV0ZXJzIHNwZWNpZmllZCBieSB0aGUgYWRtaW5pc3RyYXRvciB0aGF0IGFyZSByZXF1aXJlZCBmb3IgcHJvdmlzaW9uaW5nIHRoZSBwcm9kdWN0LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivc2FnZW1ha2VyX3Byb2plY3QuaHRtbCNwcm92aXNpb25pbmdfcGFyYW1ldGVycyBTYWdlbWFrZXJQcm9qZWN0I3Byb3Zpc2lvbmluZ19wYXJhbWV0ZXJzfVxuICAqL1xuICByZWFkb25seSBwcm92aXNpb25pbmdQYXJhbWV0ZXJzPzogU2FnZW1ha2VyUHJvamVjdFNlcnZpY2VDYXRhbG9nUHJvdmlzaW9uaW5nRGV0YWlsc1Byb3Zpc2lvbmluZ1BhcmFtZXRlcnNbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlclByb2plY3RTZXJ2aWNlQ2F0YWxvZ1Byb3Zpc2lvbmluZ0RldGFpbHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJQcm9qZWN0U2VydmljZUNhdGFsb2dQcm92aXNpb25pbmdEZXRhaWxzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHBhdGhfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGF0aElkKSxcbiAgICBwcm9kdWN0X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByb2R1Y3RJZCksXG4gICAgcHJvdmlzaW9uaW5nX2FydGlmYWN0X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByb3Zpc2lvbmluZ0FydGlmYWN0SWQpLFxuICAgIHByb3Zpc2lvbmluZ19wYXJhbWV0ZXJzOiBjZGt0Zi5saXN0TWFwcGVyKHNhZ2VtYWtlclByb2plY3RTZXJ2aWNlQ2F0YWxvZ1Byb3Zpc2lvbmluZ0RldGFpbHNQcm92aXNpb25pbmdQYXJhbWV0ZXJzVG9UZXJyYWZvcm0pKHN0cnVjdCEucHJvdmlzaW9uaW5nUGFyYW1ldGVycyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJQcm9qZWN0VGFncyB7XG4gIC8qKlxuICAqIFRoZSBrZXkgbmFtZSBvZiB0aGUgdGFnLiBZb3UgY2FuIHNwZWNpZnkgYSB2YWx1ZSB0aGF0IGlzIDEgdG8gMTI3IFVuaWNvZGUgY2hhcmFjdGVycyBpbiBsZW5ndGggYW5kIGNhbm5vdCBiZSBwcmVmaXhlZCB3aXRoIGF3czouIFlvdSBjYW4gdXNlIGFueSBvZiB0aGUgZm9sbG93aW5nIGNoYXJhY3RlcnM6IHRoZSBzZXQgb2YgVW5pY29kZSBsZXR0ZXJzLCBkaWdpdHMsIHdoaXRlc3BhY2UsIF8sIC4sIC8sID0sICssIGFuZCAtLiBcbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3NhZ2VtYWtlcl9wcm9qZWN0Lmh0bWwja2V5IFNhZ2VtYWtlclByb2plY3Qja2V5fVxuICAqL1xuICByZWFkb25seSBrZXk6IHN0cmluZztcbiAgLyoqXG4gICogVGhlIHZhbHVlIGZvciB0aGUgdGFnLiBZb3UgY2FuIHNwZWNpZnkgYSB2YWx1ZSB0aGF0IGlzIDEgdG8gMjU1IFVuaWNvZGUgY2hhcmFjdGVycyBpbiBsZW5ndGggYW5kIGNhbm5vdCBiZSBwcmVmaXhlZCB3aXRoIGF3czouIFlvdSBjYW4gdXNlIGFueSBvZiB0aGUgZm9sbG93aW5nIGNoYXJhY3RlcnM6IHRoZSBzZXQgb2YgVW5pY29kZSBsZXR0ZXJzLCBkaWdpdHMsIHdoaXRlc3BhY2UsIF8sIC4sIC8sID0sICssIGFuZCAtLiBcbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3NhZ2VtYWtlcl9wcm9qZWN0Lmh0bWwjdmFsdWUgU2FnZW1ha2VyUHJvamVjdCN2YWx1ZX1cbiAgKi9cbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlclByb2plY3RUYWdzVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyUHJvamVjdFRhZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivc2FnZW1ha2VyX3Byb2plY3QuaHRtbCBhd3NjY19zYWdlbWFrZXJfcHJvamVjdH1cbiovXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyUHJvamVjdCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX3NhZ2VtYWtlcl9wcm9qZWN0XCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3NhZ2VtYWtlcl9wcm9qZWN0Lmh0bWwgYXdzY2Nfc2FnZW1ha2VyX3Byb2plY3R9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIFNhZ2VtYWtlclByb2plY3RDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogU2FnZW1ha2VyUHJvamVjdENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2Nfc2FnZW1ha2VyX3Byb2plY3QnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9wcm9qZWN0RGVzY3JpcHRpb24gPSBjb25maWcucHJvamVjdERlc2NyaXB0aW9uO1xuICAgIHRoaXMuX3Byb2plY3ROYW1lID0gY29uZmlnLnByb2plY3ROYW1lO1xuICAgIHRoaXMuX3NlcnZpY2VDYXRhbG9nUHJvdmlzaW9uaW5nRGV0YWlscyA9IGNvbmZpZy5zZXJ2aWNlQ2F0YWxvZ1Byb3Zpc2lvbmluZ0RldGFpbHM7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBjcmVhdGlvbl90aW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3JlYXRpb25UaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRpb25fdGltZScpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBwcm9qZWN0X2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByb2plY3RBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcm9qZWN0X2FybicpO1xuICB9XG5cbiAgLy8gcHJvamVjdF9kZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Byb2plY3REZXNjcmlwdGlvbj86IHN0cmluZztcbiAgcHVibGljIGdldCBwcm9qZWN0RGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcm9qZWN0X2Rlc2NyaXB0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcm9qZWN0RGVzY3JpcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Byb2plY3REZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByb2plY3REZXNjcmlwdGlvbigpIHtcbiAgICB0aGlzLl9wcm9qZWN0RGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb2plY3REZXNjcmlwdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9qZWN0RGVzY3JpcHRpb25cbiAgfVxuXG4gIC8vIHByb2plY3RfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm9qZWN0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcm9qZWN0X2lkJyk7XG4gIH1cblxuICAvLyBwcm9qZWN0X25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcHJvamVjdE5hbWU6IHN0cmluZztcbiAgcHVibGljIGdldCBwcm9qZWN0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb2plY3RfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvamVjdE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Byb2plY3ROYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb2plY3ROYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2plY3ROYW1lXG4gIH1cblxuICAvLyBwcm9qZWN0X3N0YXR1cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByb2plY3RTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcm9qZWN0X3N0YXR1cycpO1xuICB9XG5cbiAgLy8gc2VydmljZV9jYXRhbG9nX3Byb3Zpc2lvbmVkX3Byb2R1Y3RfZGV0YWlscyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlcnZpY2VDYXRhbG9nUHJvdmlzaW9uZWRQcm9kdWN0RGV0YWlscygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzZXJ2aWNlX2NhdGFsb2dfcHJvdmlzaW9uZWRfcHJvZHVjdF9kZXRhaWxzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc2VydmljZV9jYXRhbG9nX3Byb3Zpc2lvbmluZ19kZXRhaWxzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NlcnZpY2VDYXRhbG9nUHJvdmlzaW9uaW5nRGV0YWlsczogU2FnZW1ha2VyUHJvamVjdFNlcnZpY2VDYXRhbG9nUHJvdmlzaW9uaW5nRGV0YWlscztcbiAgcHVibGljIGdldCBzZXJ2aWNlQ2F0YWxvZ1Byb3Zpc2lvbmluZ0RldGFpbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc2VydmljZV9jYXRhbG9nX3Byb3Zpc2lvbmluZ19kZXRhaWxzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc2VydmljZUNhdGFsb2dQcm92aXNpb25pbmdEZXRhaWxzKHZhbHVlOiBTYWdlbWFrZXJQcm9qZWN0U2VydmljZUNhdGFsb2dQcm92aXNpb25pbmdEZXRhaWxzKSB7XG4gICAgdGhpcy5fc2VydmljZUNhdGFsb2dQcm92aXNpb25pbmdEZXRhaWxzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlcnZpY2VDYXRhbG9nUHJvdmlzaW9uaW5nRGV0YWlsc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlQ2F0YWxvZ1Byb3Zpc2lvbmluZ0RldGFpbHNcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogU2FnZW1ha2VyUHJvamVjdFRhZ3NbXTtcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiBTYWdlbWFrZXJQcm9qZWN0VGFnc1tdKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzXG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2plY3RfZGVzY3JpcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3Byb2plY3REZXNjcmlwdGlvbiksXG4gICAgICBwcm9qZWN0X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3Byb2plY3ROYW1lKSxcbiAgICAgIHNlcnZpY2VfY2F0YWxvZ19wcm92aXNpb25pbmdfZGV0YWlsczogc2FnZW1ha2VyUHJvamVjdFNlcnZpY2VDYXRhbG9nUHJvdmlzaW9uaW5nRGV0YWlsc1RvVGVycmFmb3JtKHRoaXMuX3NlcnZpY2VDYXRhbG9nUHJvdmlzaW9uaW5nRGV0YWlscyksXG4gICAgICB0YWdzOiBjZGt0Zi5saXN0TWFwcGVyKHNhZ2VtYWtlclByb2plY3RUYWdzVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==