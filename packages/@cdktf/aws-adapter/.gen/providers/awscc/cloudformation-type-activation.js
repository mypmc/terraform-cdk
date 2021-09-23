"use strict";
// https://www.terraform.io/docs/providers/awscc/r/cloudformation_type_activation.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudformationTypeActivation = exports.cloudformationTypeActivationLoggingConfigToTerraform = void 0;
const cdktf = require("cdktf");
function cloudformationTypeActivationLoggingConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_role_arn: cdktf.stringToTerraform(struct.logRoleArn),
    };
}
exports.cloudformationTypeActivationLoggingConfigToTerraform = cloudformationTypeActivationLoggingConfigToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_type_activation.html awscc_cloudformation_type_activation}
*/
class CloudformationTypeActivation extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_type_activation.html awscc_cloudformation_type_activation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationTypeActivationConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudformation_type_activation',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._autoUpdate = config.autoUpdate;
        this._executionRoleArn = config.executionRoleArn;
        this._loggingConfig = config.loggingConfig;
        this._majorVersion = config.majorVersion;
        this._publicTypeArn = config.publicTypeArn;
        this._publisherId = config.publisherId;
        this._type = config.type;
        this._typeName = config.typeName;
        this._typeNameAlias = config.typeNameAlias;
        this._versionBump = config.versionBump;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get autoUpdate() {
        return this.getBooleanAttribute('auto_update');
    }
    set autoUpdate(value) {
        this._autoUpdate = value;
    }
    resetAutoUpdate() {
        this._autoUpdate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoUpdateInput() {
        return this._autoUpdate;
    }
    get executionRoleArn() {
        return this.getStringAttribute('execution_role_arn');
    }
    set executionRoleArn(value) {
        this._executionRoleArn = value;
    }
    resetExecutionRoleArn() {
        this._executionRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get executionRoleArnInput() {
        return this._executionRoleArn;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get loggingConfig() {
        return this.interpolationForAttribute('logging_config');
    }
    set loggingConfig(value) {
        this._loggingConfig = value;
    }
    resetLoggingConfig() {
        this._loggingConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loggingConfigInput() {
        return this._loggingConfig;
    }
    get majorVersion() {
        return this.getStringAttribute('major_version');
    }
    set majorVersion(value) {
        this._majorVersion = value;
    }
    resetMajorVersion() {
        this._majorVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get majorVersionInput() {
        return this._majorVersion;
    }
    get publicTypeArn() {
        return this.getStringAttribute('public_type_arn');
    }
    set publicTypeArn(value) {
        this._publicTypeArn = value;
    }
    resetPublicTypeArn() {
        this._publicTypeArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get publicTypeArnInput() {
        return this._publicTypeArn;
    }
    get publisherId() {
        return this.getStringAttribute('publisher_id');
    }
    set publisherId(value) {
        this._publisherId = value;
    }
    resetPublisherId() {
        this._publisherId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get publisherIdInput() {
        return this._publisherId;
    }
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    get typeName() {
        return this.getStringAttribute('type_name');
    }
    set typeName(value) {
        this._typeName = value;
    }
    resetTypeName() {
        this._typeName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get typeNameInput() {
        return this._typeName;
    }
    get typeNameAlias() {
        return this.getStringAttribute('type_name_alias');
    }
    set typeNameAlias(value) {
        this._typeNameAlias = value;
    }
    resetTypeNameAlias() {
        this._typeNameAlias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get typeNameAliasInput() {
        return this._typeNameAlias;
    }
    get versionBump() {
        return this.getStringAttribute('version_bump');
    }
    set versionBump(value) {
        this._versionBump = value;
    }
    resetVersionBump() {
        this._versionBump = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get versionBumpInput() {
        return this._versionBump;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            auto_update: cdktf.booleanToTerraform(this._autoUpdate),
            execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
            logging_config: cloudformationTypeActivationLoggingConfigToTerraform(this._loggingConfig),
            major_version: cdktf.stringToTerraform(this._majorVersion),
            public_type_arn: cdktf.stringToTerraform(this._publicTypeArn),
            publisher_id: cdktf.stringToTerraform(this._publisherId),
            type: cdktf.stringToTerraform(this._type),
            type_name: cdktf.stringToTerraform(this._typeName),
            type_name_alias: cdktf.stringToTerraform(this._typeNameAlias),
            version_bump: cdktf.stringToTerraform(this._versionBump),
        };
    }
}
exports.CloudformationTypeActivation = CloudformationTypeActivation;
// =================
// STATIC PROPERTIES
// =================
CloudformationTypeActivation.tfResourceType = "awscc_cloudformation_type_activation";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRmb3JtYXRpb24tdHlwZS1hY3RpdmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xvdWRmb3JtYXRpb24tdHlwZS1hY3RpdmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzRkFBc0Y7QUFDdEYsMkNBQTJDOzs7QUFHM0MsK0JBQStCO0FBaUYvQixTQUFnQixvREFBb0QsQ0FBQyxNQUFrRDtJQUNySCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztRQUM3RCxZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7S0FDMUQsQ0FBQTtBQUNILENBQUM7QUFORCxvSEFNQztBQUdEOztFQUVFO0FBQ0YsTUFBYSw0QkFBNkIsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBT3ZFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLFNBQTZDLEVBQUU7UUFDOUYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxzQ0FBc0M7WUFDN0QsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxPQUFPO2FBQ3RCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsaUJBQWlC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Q0FBQztZQUN6RixhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDMUQsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQzdELFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN4RCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekMsU0FBUyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2xELGVBQWUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUM3RCxZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDekQsQ0FBQztJQUNKLENBQUM7O0FBeE9ILG9FQXlPQztBQXZPQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLDJDQUFjLEdBQVcsc0NBQXNDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9jbG91ZGZvcm1hdGlvbl90eXBlX2FjdGl2YXRpb24uaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZm9ybWF0aW9uVHlwZUFjdGl2YXRpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogV2hldGhlciB0byBhdXRvbWF0aWNhbGx5IHVwZGF0ZSB0aGUgZXh0ZW5zaW9uIGluIHRoaXMgYWNjb3VudCBhbmQgcmVnaW9uIHdoZW4gYSBuZXcgbWlub3IgdmVyc2lvbiBpcyBwdWJsaXNoZWQgYnkgdGhlIGV4dGVuc2lvbiBwdWJsaXNoZXIuIE1ham9yIHZlcnNpb25zIHJlbGVhc2VkIGJ5IHRoZSBwdWJsaXNoZXIgbXVzdCBiZSBtYW51YWxseSB1cGRhdGVkLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvY2xvdWRmb3JtYXRpb25fdHlwZV9hY3RpdmF0aW9uLmh0bWwjYXV0b191cGRhdGUgQ2xvdWRmb3JtYXRpb25UeXBlQWN0aXZhdGlvbiNhdXRvX3VwZGF0ZX1cbiAgKi9cbiAgcmVhZG9ubHkgYXV0b1VwZGF0ZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogVGhlIEFtYXpvbiBSZXNvdXJjZSBOYW1lIChBUk4pIG9mIHRoZSBJQU0gZXhlY3V0aW9uIHJvbGUgdG8gdXNlIHRvIHJlZ2lzdGVyIHRoZSB0eXBlLiBJZiB5b3VyIHJlc291cmNlIHR5cGUgY2FsbHMgQVdTIEFQSXMgaW4gYW55IG9mIGl0cyBoYW5kbGVycywgeW91IG11c3QgY3JlYXRlIGFuIElBTSBleGVjdXRpb24gcm9sZSB0aGF0IGluY2x1ZGVzIHRoZSBuZWNlc3NhcnkgcGVybWlzc2lvbnMgdG8gY2FsbCB0aG9zZSBBV1MgQVBJcywgYW5kIHByb3Zpc2lvbiB0aGF0IGV4ZWN1dGlvbiByb2xlIGluIHlvdXIgYWNjb3VudC4gQ2xvdWRGb3JtYXRpb24gdGhlbiBhc3N1bWVzIHRoYXQgZXhlY3V0aW9uIHJvbGUgdG8gcHJvdmlkZSB5b3VyIHJlc291cmNlIHR5cGUgd2l0aCB0aGUgYXBwcm9wcmlhdGUgY3JlZGVudGlhbHMuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9jbG91ZGZvcm1hdGlvbl90eXBlX2FjdGl2YXRpb24uaHRtbCNleGVjdXRpb25fcm9sZV9hcm4gQ2xvdWRmb3JtYXRpb25UeXBlQWN0aXZhdGlvbiNleGVjdXRpb25fcm9sZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IGV4ZWN1dGlvblJvbGVBcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvY2xvdWRmb3JtYXRpb25fdHlwZV9hY3RpdmF0aW9uLmh0bWwjbG9nZ2luZ19jb25maWcgQ2xvdWRmb3JtYXRpb25UeXBlQWN0aXZhdGlvbiNsb2dnaW5nX2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkgbG9nZ2luZ0NvbmZpZz86IENsb3VkZm9ybWF0aW9uVHlwZUFjdGl2YXRpb25Mb2dnaW5nQ29uZmlnO1xuICAvKipcbiAgKiBUaGUgTWFqb3IgVmVyc2lvbiBvZiB0aGUgdHlwZSB5b3Ugd2FudCB0byBlbmFibGVcbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Nsb3VkZm9ybWF0aW9uX3R5cGVfYWN0aXZhdGlvbi5odG1sI21ham9yX3ZlcnNpb24gQ2xvdWRmb3JtYXRpb25UeXBlQWN0aXZhdGlvbiNtYWpvcl92ZXJzaW9ufVxuICAqL1xuICByZWFkb25seSBtYWpvclZlcnNpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFRoZSBBbWF6b24gUmVzb3VyY2UgTnVtYmVyIChBUk4pIGFzc2lnbmVkIHRvIHRoZSBwdWJsaWMgZXh0ZW5zaW9uIHVwb24gcHVibGljYXRpb25cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Nsb3VkZm9ybWF0aW9uX3R5cGVfYWN0aXZhdGlvbi5odG1sI3B1YmxpY190eXBlX2FybiBDbG91ZGZvcm1hdGlvblR5cGVBY3RpdmF0aW9uI3B1YmxpY190eXBlX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgcHVibGljVHlwZUFybj86IHN0cmluZztcbiAgLyoqXG4gICogVGhlIHB1Ymxpc2hlciBpZCBhc3NpZ25lZCBieSBDbG91ZEZvcm1hdGlvbiBmb3IgcHVibGlzaGluZyBpbiB0aGlzIHJlZ2lvbi5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Nsb3VkZm9ybWF0aW9uX3R5cGVfYWN0aXZhdGlvbi5odG1sI3B1Ymxpc2hlcl9pZCBDbG91ZGZvcm1hdGlvblR5cGVBY3RpdmF0aW9uI3B1Ymxpc2hlcl9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgcHVibGlzaGVySWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFRoZSBraW5kIG9mIGV4dGVuc2lvblxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvY2xvdWRmb3JtYXRpb25fdHlwZV9hY3RpdmF0aW9uLmh0bWwjdHlwZSBDbG91ZGZvcm1hdGlvblR5cGVBY3RpdmF0aW9uI3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IHR5cGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFRoZSBuYW1lIG9mIHRoZSB0eXBlIGJlaW5nIHJlZ2lzdGVyZWQuXG5cbldlIHJlY29tbWVuZCB0aGF0IHR5cGUgbmFtZXMgYWRoZXJlIHRvIHRoZSBmb2xsb3dpbmcgcGF0dGVybjogY29tcGFueV9vcl9vcmdhbml6YXRpb246OnNlcnZpY2U6OnR5cGUuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9jbG91ZGZvcm1hdGlvbl90eXBlX2FjdGl2YXRpb24uaHRtbCN0eXBlX25hbWUgQ2xvdWRmb3JtYXRpb25UeXBlQWN0aXZhdGlvbiN0eXBlX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IHR5cGVOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBBbiBhbGlhcyB0byBhc3NpZ24gdG8gdGhlIHB1YmxpYyBleHRlbnNpb24gaW4gdGhpcyBhY2NvdW50IGFuZCByZWdpb24uIElmIHlvdSBzcGVjaWZ5IGFuIGFsaWFzIGZvciB0aGUgZXh0ZW5zaW9uLCB5b3UgbXVzdCB0aGVuIHVzZSB0aGUgYWxpYXMgdG8gcmVmZXIgdG8gdGhlIGV4dGVuc2lvbiBpbiB5b3VyIHRlbXBsYXRlcy5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Nsb3VkZm9ybWF0aW9uX3R5cGVfYWN0aXZhdGlvbi5odG1sI3R5cGVfbmFtZV9hbGlhcyBDbG91ZGZvcm1hdGlvblR5cGVBY3RpdmF0aW9uI3R5cGVfbmFtZV9hbGlhc31cbiAgKi9cbiAgcmVhZG9ubHkgdHlwZU5hbWVBbGlhcz86IHN0cmluZztcbiAgLyoqXG4gICogTWFudWFsbHkgdXBkYXRlcyBhIHByZXZpb3VzbHktZW5hYmxlZCB0eXBlIHRvIGEgbmV3IG1ham9yIG9yIG1pbm9yIHZlcnNpb24sIGlmIGF2YWlsYWJsZS4gWW91IGNhbiBhbHNvIHVzZSB0aGlzIHBhcmFtZXRlciB0byB1cGRhdGUgdGhlIHZhbHVlIG9mIEF1dG9VcGRhdGVFbmFibGVkXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9jbG91ZGZvcm1hdGlvbl90eXBlX2FjdGl2YXRpb24uaHRtbCN2ZXJzaW9uX2J1bXAgQ2xvdWRmb3JtYXRpb25UeXBlQWN0aXZhdGlvbiN2ZXJzaW9uX2J1bXB9XG4gICovXG4gIHJlYWRvbmx5IHZlcnNpb25CdW1wPzogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZvcm1hdGlvblR5cGVBY3RpdmF0aW9uTG9nZ2luZ0NvbmZpZyB7XG4gIC8qKlxuICAqIFRoZSBBbWF6b24gQ2xvdWRXYXRjaCBsb2cgZ3JvdXAgdG8gd2hpY2ggQ2xvdWRGb3JtYXRpb24gc2VuZHMgZXJyb3IgbG9nZ2luZyBpbmZvcm1hdGlvbiB3aGVuIGludm9raW5nIHRoZSB0eXBlJ3MgaGFuZGxlcnMuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9jbG91ZGZvcm1hdGlvbl90eXBlX2FjdGl2YXRpb24uaHRtbCNsb2dfZ3JvdXBfbmFtZSBDbG91ZGZvcm1hdGlvblR5cGVBY3RpdmF0aW9uI2xvZ19ncm91cF9uYW1lfVxuICAqL1xuICByZWFkb25seSBsb2dHcm91cE5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFRoZSBBUk4gb2YgdGhlIHJvbGUgdGhhdCBDbG91ZEZvcm1hdGlvbiBzaG91bGQgYXNzdW1lIHdoZW4gc2VuZGluZyBsb2cgZW50cmllcyB0byBDbG91ZFdhdGNoIGxvZ3MuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9jbG91ZGZvcm1hdGlvbl90eXBlX2FjdGl2YXRpb24uaHRtbCNsb2dfcm9sZV9hcm4gQ2xvdWRmb3JtYXRpb25UeXBlQWN0aXZhdGlvbiNsb2dfcm9sZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IGxvZ1JvbGVBcm4/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZvcm1hdGlvblR5cGVBY3RpdmF0aW9uTG9nZ2luZ0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZm9ybWF0aW9uVHlwZUFjdGl2YXRpb25Mb2dnaW5nQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGxvZ19ncm91cF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ0dyb3VwTmFtZSksXG4gICAgbG9nX3JvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ1JvbGVBcm4pLFxuICB9XG59XG5cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvY2xvdWRmb3JtYXRpb25fdHlwZV9hY3RpdmF0aW9uLmh0bWwgYXdzY2NfY2xvdWRmb3JtYXRpb25fdHlwZV9hY3RpdmF0aW9ufVxuKi9cbmV4cG9ydCBjbGFzcyBDbG91ZGZvcm1hdGlvblR5cGVBY3RpdmF0aW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2NfY2xvdWRmb3JtYXRpb25fdHlwZV9hY3RpdmF0aW9uXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Nsb3VkZm9ybWF0aW9uX3R5cGVfYWN0aXZhdGlvbi5odG1sIGF3c2NjX2Nsb3VkZm9ybWF0aW9uX3R5cGVfYWN0aXZhdGlvbn0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgQ2xvdWRmb3JtYXRpb25UeXBlQWN0aXZhdGlvbkNvbmZpZyA9IHt9XG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IENsb3VkZm9ybWF0aW9uVHlwZUFjdGl2YXRpb25Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfY2xvdWRmb3JtYXRpb25fdHlwZV9hY3RpdmF0aW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYXV0b1VwZGF0ZSA9IGNvbmZpZy5hdXRvVXBkYXRlO1xuICAgIHRoaXMuX2V4ZWN1dGlvblJvbGVBcm4gPSBjb25maWcuZXhlY3V0aW9uUm9sZUFybjtcbiAgICB0aGlzLl9sb2dnaW5nQ29uZmlnID0gY29uZmlnLmxvZ2dpbmdDb25maWc7XG4gICAgdGhpcy5fbWFqb3JWZXJzaW9uID0gY29uZmlnLm1ham9yVmVyc2lvbjtcbiAgICB0aGlzLl9wdWJsaWNUeXBlQXJuID0gY29uZmlnLnB1YmxpY1R5cGVBcm47XG4gICAgdGhpcy5fcHVibGlzaGVySWQgPSBjb25maWcucHVibGlzaGVySWQ7XG4gICAgdGhpcy5fdHlwZSA9IGNvbmZpZy50eXBlO1xuICAgIHRoaXMuX3R5cGVOYW1lID0gY29uZmlnLnR5cGVOYW1lO1xuICAgIHRoaXMuX3R5cGVOYW1lQWxpYXMgPSBjb25maWcudHlwZU5hbWVBbGlhcztcbiAgICB0aGlzLl92ZXJzaW9uQnVtcCA9IGNvbmZpZy52ZXJzaW9uQnVtcDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBhdXRvX3VwZGF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXRvVXBkYXRlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICBwdWJsaWMgZ2V0IGF1dG9VcGRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYXV0b191cGRhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dG9VcGRhdGUodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSApIHtcbiAgICB0aGlzLl9hdXRvVXBkYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXV0b1VwZGF0ZSgpIHtcbiAgICB0aGlzLl9hdXRvVXBkYXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRvVXBkYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9VcGRhdGVcbiAgfVxuXG4gIC8vIGV4ZWN1dGlvbl9yb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2V4ZWN1dGlvblJvbGVBcm4/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZXhlY3V0aW9uUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4ZWN1dGlvbl9yb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXhlY3V0aW9uUm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXhlY3V0aW9uUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEV4ZWN1dGlvblJvbGVBcm4oKSB7XG4gICAgdGhpcy5fZXhlY3V0aW9uUm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXhlY3V0aW9uUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9leGVjdXRpb25Sb2xlQXJuXG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGxvZ2dpbmdfY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbG9nZ2luZ0NvbmZpZz86IENsb3VkZm9ybWF0aW9uVHlwZUFjdGl2YXRpb25Mb2dnaW5nQ29uZmlnO1xuICBwdWJsaWMgZ2V0IGxvZ2dpbmdDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbG9nZ2luZ19jb25maWcnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBsb2dnaW5nQ29uZmlnKHZhbHVlOiBDbG91ZGZvcm1hdGlvblR5cGVBY3RpdmF0aW9uTG9nZ2luZ0NvbmZpZykge1xuICAgIHRoaXMuX2xvZ2dpbmdDb25maWcgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMb2dnaW5nQ29uZmlnKCkge1xuICAgIHRoaXMuX2xvZ2dpbmdDb25maWcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxvZ2dpbmdDb25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nZ2luZ0NvbmZpZ1xuICB9XG5cbiAgLy8gbWFqb3JfdmVyc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYWpvclZlcnNpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbWFqb3JWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWFqb3JfdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWFqb3JWZXJzaW9uKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fbWFqb3JWZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWFqb3JWZXJzaW9uKCkge1xuICAgIHRoaXMuX21ham9yVmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWFqb3JWZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ham9yVmVyc2lvblxuICB9XG5cbiAgLy8gcHVibGljX3R5cGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHVibGljVHlwZUFybj86IHN0cmluZztcbiAgcHVibGljIGdldCBwdWJsaWNUeXBlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHVibGljX3R5cGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBwdWJsaWNUeXBlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wdWJsaWNUeXBlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHVibGljVHlwZUFybigpIHtcbiAgICB0aGlzLl9wdWJsaWNUeXBlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwdWJsaWNUeXBlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3B1YmxpY1R5cGVBcm5cbiAgfVxuXG4gIC8vIHB1Ymxpc2hlcl9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3B1Ymxpc2hlcklkPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHB1Ymxpc2hlcklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHVibGlzaGVyX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBwdWJsaXNoZXJJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHVibGlzaGVySWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQdWJsaXNoZXJJZCgpIHtcbiAgICB0aGlzLl9wdWJsaXNoZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHVibGlzaGVySWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHVibGlzaGVySWRcbiAgfVxuXG4gIC8vIHR5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90eXBlPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHlwZSgpIHtcbiAgICB0aGlzLl90eXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0eXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGVcbiAgfVxuXG4gIC8vIHR5cGVfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R5cGVOYW1lPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHR5cGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCB0eXBlTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUeXBlTmFtZSgpIHtcbiAgICB0aGlzLl90eXBlTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHlwZU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZU5hbWVcbiAgfVxuXG4gIC8vIHR5cGVfbmFtZV9hbGlhcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R5cGVOYW1lQWxpYXM/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgdHlwZU5hbWVBbGlhcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R5cGVfbmFtZV9hbGlhcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHlwZU5hbWVBbGlhcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZU5hbWVBbGlhcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR5cGVOYW1lQWxpYXMoKSB7XG4gICAgdGhpcy5fdHlwZU5hbWVBbGlhcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHlwZU5hbWVBbGlhc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlTmFtZUFsaWFzXG4gIH1cblxuICAvLyB2ZXJzaW9uX2J1bXAgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdmVyc2lvbkJ1bXA/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgdmVyc2lvbkJ1bXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2ZXJzaW9uX2J1bXAnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZlcnNpb25CdW1wKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fdmVyc2lvbkJ1bXAgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWZXJzaW9uQnVtcCgpIHtcbiAgICB0aGlzLl92ZXJzaW9uQnVtcCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmVyc2lvbkJ1bXBJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmVyc2lvbkJ1bXBcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXV0b191cGRhdGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9hdXRvVXBkYXRlKSxcbiAgICAgIGV4ZWN1dGlvbl9yb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZXhlY3V0aW9uUm9sZUFybiksXG4gICAgICBsb2dnaW5nX2NvbmZpZzogY2xvdWRmb3JtYXRpb25UeXBlQWN0aXZhdGlvbkxvZ2dpbmdDb25maWdUb1RlcnJhZm9ybSh0aGlzLl9sb2dnaW5nQ29uZmlnKSxcbiAgICAgIG1ham9yX3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX21ham9yVmVyc2lvbiksXG4gICAgICBwdWJsaWNfdHlwZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3B1YmxpY1R5cGVBcm4pLFxuICAgICAgcHVibGlzaGVyX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wdWJsaXNoZXJJZCksXG4gICAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90eXBlKSxcbiAgICAgIHR5cGVfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdHlwZU5hbWUpLFxuICAgICAgdHlwZV9uYW1lX2FsaWFzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90eXBlTmFtZUFsaWFzKSxcbiAgICAgIHZlcnNpb25fYnVtcDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdmVyc2lvbkJ1bXApLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==