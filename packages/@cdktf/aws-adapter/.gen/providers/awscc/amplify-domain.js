"use strict";
// https://www.terraform.io/docs/providers/awscc/r/amplify_domain.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmplifyDomain = exports.amplifyDomainSubDomainSettingsToTerraform = void 0;
const cdktf = require("cdktf");
function amplifyDomainSubDomainSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        branch_name: cdktf.stringToTerraform(struct.branchName),
        prefix: cdktf.stringToTerraform(struct.prefix),
    };
}
exports.amplifyDomainSubDomainSettingsToTerraform = amplifyDomainSubDomainSettingsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/amplify_domain.html awscc_amplify_domain}
*/
class AmplifyDomain extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/amplify_domain.html awscc_amplify_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmplifyDomainConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_amplify_domain',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._appId = config.appId;
        this._autoSubDomainCreationPatterns = config.autoSubDomainCreationPatterns;
        this._autoSubDomainIamRole = config.autoSubDomainIamRole;
        this._domainName = config.domainName;
        this._enableAutoSubDomain = config.enableAutoSubDomain;
        this._subDomainSettings = config.subDomainSettings;
    }
    get appId() {
        return this.getStringAttribute('app_id');
    }
    set appId(value) {
        this._appId = value;
    }
    // Temporarily expose input value. Use with caution.
    get appIdInput() {
        return this._appId;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get autoSubDomainCreationPatterns() {
        return this.getListAttribute('auto_sub_domain_creation_patterns');
    }
    set autoSubDomainCreationPatterns(value) {
        this._autoSubDomainCreationPatterns = value;
    }
    resetAutoSubDomainCreationPatterns() {
        this._autoSubDomainCreationPatterns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoSubDomainCreationPatternsInput() {
        return this._autoSubDomainCreationPatterns;
    }
    get autoSubDomainIamRole() {
        return this.getStringAttribute('auto_sub_domain_iam_role');
    }
    set autoSubDomainIamRole(value) {
        this._autoSubDomainIamRole = value;
    }
    resetAutoSubDomainIamRole() {
        this._autoSubDomainIamRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoSubDomainIamRoleInput() {
        return this._autoSubDomainIamRole;
    }
    // certificate_record - computed: true, optional: false, required: false
    get certificateRecord() {
        return this.getStringAttribute('certificate_record');
    }
    get domainName() {
        return this.getStringAttribute('domain_name');
    }
    set domainName(value) {
        this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    get domainNameInput() {
        return this._domainName;
    }
    // domain_status - computed: true, optional: false, required: false
    get domainStatus() {
        return this.getStringAttribute('domain_status');
    }
    get enableAutoSubDomain() {
        return this.getBooleanAttribute('enable_auto_sub_domain');
    }
    set enableAutoSubDomain(value) {
        this._enableAutoSubDomain = value;
    }
    resetEnableAutoSubDomain() {
        this._enableAutoSubDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableAutoSubDomainInput() {
        return this._enableAutoSubDomain;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // status_reason - computed: true, optional: false, required: false
    get statusReason() {
        return this.getStringAttribute('status_reason');
    }
    get subDomainSettings() {
        return this.interpolationForAttribute('sub_domain_settings');
    }
    set subDomainSettings(value) {
        this._subDomainSettings = value;
    }
    // Temporarily expose input value. Use with caution.
    get subDomainSettingsInput() {
        return this._subDomainSettings;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            app_id: cdktf.stringToTerraform(this._appId),
            auto_sub_domain_creation_patterns: cdktf.listMapper(cdktf.stringToTerraform)(this._autoSubDomainCreationPatterns),
            auto_sub_domain_iam_role: cdktf.stringToTerraform(this._autoSubDomainIamRole),
            domain_name: cdktf.stringToTerraform(this._domainName),
            enable_auto_sub_domain: cdktf.booleanToTerraform(this._enableAutoSubDomain),
            sub_domain_settings: cdktf.listMapper(amplifyDomainSubDomainSettingsToTerraform)(this._subDomainSettings),
        };
    }
}
exports.AmplifyDomain = AmplifyDomain;
// =================
// STATIC PROPERTIES
// =================
AmplifyDomain.tfResourceType = "awscc_amplify_domain";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1wbGlmeS1kb21haW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbXBsaWZ5LWRvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0VBQXNFO0FBQ3RFLDJDQUEyQzs7O0FBRzNDLCtCQUErQjtBQXlDL0IsU0FBZ0IseUNBQXlDLENBQUMsTUFBdUM7SUFDL0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDeEQsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO0tBQ2hELENBQUE7QUFDSCxDQUFDO0FBTkQsOEZBTUM7QUFHRDs7RUFFRTtBQUNGLE1BQWEsYUFBYyxTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPeEQsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBMkI7UUFDMUUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxzQkFBc0I7WUFDN0MsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxPQUFPO2FBQ3RCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsOEJBQThCLEdBQUcsTUFBTSxDQUFDLDZCQUE2QixDQUFDO1FBQzNFLElBQUks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YyxHQUFXLHNCQUFzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYW1wbGlmeV9kb21haW4uaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIEFtcGxpZnlEb21haW5Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hbXBsaWZ5X2RvbWFpbi5odG1sI2FwcF9pZCBBbXBsaWZ5RG9tYWluI2FwcF9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgYXBwSWQ6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hbXBsaWZ5X2RvbWFpbi5odG1sI2F1dG9fc3ViX2RvbWFpbl9jcmVhdGlvbl9wYXR0ZXJucyBBbXBsaWZ5RG9tYWluI2F1dG9fc3ViX2RvbWFpbl9jcmVhdGlvbl9wYXR0ZXJuc31cbiAgKi9cbiAgcmVhZG9ubHkgYXV0b1N1YkRvbWFpbkNyZWF0aW9uUGF0dGVybnM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hbXBsaWZ5X2RvbWFpbi5odG1sI2F1dG9fc3ViX2RvbWFpbl9pYW1fcm9sZSBBbXBsaWZ5RG9tYWluI2F1dG9fc3ViX2RvbWFpbl9pYW1fcm9sZX1cbiAgKi9cbiAgcmVhZG9ubHkgYXV0b1N1YkRvbWFpbklhbVJvbGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYW1wbGlmeV9kb21haW4uaHRtbCNkb21haW5fbmFtZSBBbXBsaWZ5RG9tYWluI2RvbWFpbl9uYW1lfVxuICAqL1xuICByZWFkb25seSBkb21haW5OYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYW1wbGlmeV9kb21haW4uaHRtbCNlbmFibGVfYXV0b19zdWJfZG9tYWluIEFtcGxpZnlEb21haW4jZW5hYmxlX2F1dG9fc3ViX2RvbWFpbn1cbiAgKi9cbiAgcmVhZG9ubHkgZW5hYmxlQXV0b1N1YkRvbWFpbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hbXBsaWZ5X2RvbWFpbi5odG1sI3N1Yl9kb21haW5fc2V0dGluZ3MgQW1wbGlmeURvbWFpbiNzdWJfZG9tYWluX3NldHRpbmdzfVxuICAqL1xuICByZWFkb25seSBzdWJEb21haW5TZXR0aW5nczogQW1wbGlmeURvbWFpblN1YkRvbWFpblNldHRpbmdzW107XG59XG5leHBvcnQgaW50ZXJmYWNlIEFtcGxpZnlEb21haW5TdWJEb21haW5TZXR0aW5ncyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYW1wbGlmeV9kb21haW4uaHRtbCNicmFuY2hfbmFtZSBBbXBsaWZ5RG9tYWluI2JyYW5jaF9uYW1lfVxuICAqL1xuICByZWFkb25seSBicmFuY2hOYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYW1wbGlmeV9kb21haW4uaHRtbCNwcmVmaXggQW1wbGlmeURvbWFpbiNwcmVmaXh9XG4gICovXG4gIHJlYWRvbmx5IHByZWZpeDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW1wbGlmeURvbWFpblN1YkRvbWFpblNldHRpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogQW1wbGlmeURvbWFpblN1YkRvbWFpblNldHRpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGJyYW5jaF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJyYW5jaE5hbWUpLFxuICAgIHByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVmaXgpLFxuICB9XG59XG5cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYW1wbGlmeV9kb21haW4uaHRtbCBhd3NjY19hbXBsaWZ5X2RvbWFpbn1cbiovXG5leHBvcnQgY2xhc3MgQW1wbGlmeURvbWFpbiBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX2FtcGxpZnlfZG9tYWluXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FtcGxpZnlfZG9tYWluLmh0bWwgYXdzY2NfYW1wbGlmeV9kb21haW59IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIEFtcGxpZnlEb21haW5Db25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQW1wbGlmeURvbWFpbkNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfYW1wbGlmeV9kb21haW4nLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hcHBJZCA9IGNvbmZpZy5hcHBJZDtcbiAgICB0aGlzLl9hdXRvU3ViRG9tYWluQ3JlYXRpb25QYXR0ZXJucyA9IGNvbmZpZy5hdXRvU3ViRG9tYWluQ3JlYXRpb25QYXR0ZXJucztcbiAgICB0aGlzLl9hdXRvU3ViRG9tYWluSWFtUm9sZSA9IGNvbmZpZy5hdXRvU3ViRG9tYWluSWFtUm9sZTtcbiAgICB0aGlzLl9kb21haW5OYW1lID0gY29uZmlnLmRvbWFpbk5hbWU7XG4gICAgdGhpcy5fZW5hYmxlQXV0b1N1YkRvbWFpbiA9IGNvbmZpZy5lbmFibGVBdXRvU3ViRG9tYWluO1xuICAgIHRoaXMuX3N1YkRvbWFpblNldHRpbmdzID0gY29uZmlnLnN1YkRvbWFpblNldHRpbmdzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcHBfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYXBwSWQ6IHN0cmluZztcbiAgcHVibGljIGdldCBhcHBJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FwcF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXBwSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FwcElkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFwcElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcElkXG4gIH1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGF1dG9fc3ViX2RvbWFpbl9jcmVhdGlvbl9wYXR0ZXJucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXRvU3ViRG9tYWluQ3JlYXRpb25QYXR0ZXJucz86IHN0cmluZ1tdO1xuICBwdWJsaWMgZ2V0IGF1dG9TdWJEb21haW5DcmVhdGlvblBhdHRlcm5zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2F1dG9fc3ViX2RvbWFpbl9jcmVhdGlvbl9wYXR0ZXJucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0b1N1YkRvbWFpbkNyZWF0aW9uUGF0dGVybnModmFsdWU6IHN0cmluZ1tdICkge1xuICAgIHRoaXMuX2F1dG9TdWJEb21haW5DcmVhdGlvblBhdHRlcm5zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXV0b1N1YkRvbWFpbkNyZWF0aW9uUGF0dGVybnMoKSB7XG4gICAgdGhpcy5fYXV0b1N1YkRvbWFpbkNyZWF0aW9uUGF0dGVybnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dG9TdWJEb21haW5DcmVhdGlvblBhdHRlcm5zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9TdWJEb21haW5DcmVhdGlvblBhdHRlcm5zXG4gIH1cblxuICAvLyBhdXRvX3N1Yl9kb21haW5faWFtX3JvbGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0b1N1YkRvbWFpbklhbVJvbGU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgYXV0b1N1YkRvbWFpbklhbVJvbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdXRvX3N1Yl9kb21haW5faWFtX3JvbGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dG9TdWJEb21haW5JYW1Sb2xlKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fYXV0b1N1YkRvbWFpbklhbVJvbGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRvU3ViRG9tYWluSWFtUm9sZSgpIHtcbiAgICB0aGlzLl9hdXRvU3ViRG9tYWluSWFtUm9sZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0b1N1YkRvbWFpbklhbVJvbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b1N1YkRvbWFpbklhbVJvbGVcbiAgfVxuXG4gIC8vIGNlcnRpZmljYXRlX3JlY29yZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlUmVjb3JkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2VydGlmaWNhdGVfcmVjb3JkJyk7XG4gIH1cblxuICAvLyBkb21haW5fbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kb21haW5OYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZG9tYWluTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RvbWFpbl9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBkb21haW5OYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kb21haW5OYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRvbWFpbk5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9tYWluTmFtZVxuICB9XG5cbiAgLy8gZG9tYWluX3N0YXR1cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRvbWFpblN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RvbWFpbl9zdGF0dXMnKTtcbiAgfVxuXG4gIC8vIGVuYWJsZV9hdXRvX3N1Yl9kb21haW4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlQXV0b1N1YkRvbWFpbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgcHVibGljIGdldCBlbmFibGVBdXRvU3ViRG9tYWluKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZV9hdXRvX3N1Yl9kb21haW4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZUF1dG9TdWJEb21haW4odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSApIHtcbiAgICB0aGlzLl9lbmFibGVBdXRvU3ViRG9tYWluID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlQXV0b1N1YkRvbWFpbigpIHtcbiAgICB0aGlzLl9lbmFibGVBdXRvU3ViRG9tYWluID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmFibGVBdXRvU3ViRG9tYWluSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZUF1dG9TdWJEb21haW5cbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gc3RhdHVzX3JlYXNvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0YXR1c1JlYXNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXR1c19yZWFzb24nKTtcbiAgfVxuXG4gIC8vIHN1Yl9kb21haW5fc2V0dGluZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3ViRG9tYWluU2V0dGluZ3M6IEFtcGxpZnlEb21haW5TdWJEb21haW5TZXR0aW5nc1tdO1xuICBwdWJsaWMgZ2V0IHN1YkRvbWFpblNldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3N1Yl9kb21haW5fc2V0dGluZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzdWJEb21haW5TZXR0aW5ncyh2YWx1ZTogQW1wbGlmeURvbWFpblN1YkRvbWFpblNldHRpbmdzW10pIHtcbiAgICB0aGlzLl9zdWJEb21haW5TZXR0aW5ncyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdWJEb21haW5TZXR0aW5nc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdWJEb21haW5TZXR0aW5nc1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhcHBfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FwcElkKSxcbiAgICAgIGF1dG9fc3ViX2RvbWFpbl9jcmVhdGlvbl9wYXR0ZXJuczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fYXV0b1N1YkRvbWFpbkNyZWF0aW9uUGF0dGVybnMpLFxuICAgICAgYXV0b19zdWJfZG9tYWluX2lhbV9yb2xlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hdXRvU3ViRG9tYWluSWFtUm9sZSksXG4gICAgICBkb21haW5fbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZG9tYWluTmFtZSksXG4gICAgICBlbmFibGVfYXV0b19zdWJfZG9tYWluOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZW5hYmxlQXV0b1N1YkRvbWFpbiksXG4gICAgICBzdWJfZG9tYWluX3NldHRpbmdzOiBjZGt0Zi5saXN0TWFwcGVyKGFtcGxpZnlEb21haW5TdWJEb21haW5TZXR0aW5nc1RvVGVycmFmb3JtKSh0aGlzLl9zdWJEb21haW5TZXR0aW5ncyksXG4gICAgfTtcbiAgfVxufVxuIl19