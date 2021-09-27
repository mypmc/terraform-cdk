"use strict";
// https://www.terraform.io/docs/providers/awscc/r/iam_server_certificate.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.IamServerCertificate = exports.iamServerCertificateTagsToTerraform = void 0;
const cdktf = require("cdktf");
function iamServerCertificateTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.iamServerCertificateTagsToTerraform = iamServerCertificateTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iam_server_certificate.html awscc_iam_server_certificate}
*/
class IamServerCertificate extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iam_server_certificate.html awscc_iam_server_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamServerCertificateConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_iam_server_certificate',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._certificateBody = config.certificateBody;
        this._certificateChain = config.certificateChain;
        this._path = config.path;
        this._privateKey = config.privateKey;
        this._serverCertificateName = config.serverCertificateName;
        this._tags = config.tags;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get certificateBody() {
        return this.getStringAttribute('certificate_body');
    }
    set certificateBody(value) {
        this._certificateBody = value;
    }
    resetCertificateBody() {
        this._certificateBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get certificateBodyInput() {
        return this._certificateBody;
    }
    get certificateChain() {
        return this.getStringAttribute('certificate_chain');
    }
    set certificateChain(value) {
        this._certificateChain = value;
    }
    resetCertificateChain() {
        this._certificateChain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get certificateChainInput() {
        return this._certificateChain;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get path() {
        return this.getStringAttribute('path');
    }
    set path(value) {
        this._path = value;
    }
    resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pathInput() {
        return this._path;
    }
    get privateKey() {
        return this.getStringAttribute('private_key');
    }
    set privateKey(value) {
        this._privateKey = value;
    }
    resetPrivateKey() {
        this._privateKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get privateKeyInput() {
        return this._privateKey;
    }
    get serverCertificateName() {
        return this.getStringAttribute('server_certificate_name');
    }
    set serverCertificateName(value) {
        this._serverCertificateName = value;
    }
    resetServerCertificateName() {
        this._serverCertificateName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serverCertificateNameInput() {
        return this._serverCertificateName;
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
            certificate_body: cdktf.stringToTerraform(this._certificateBody),
            certificate_chain: cdktf.stringToTerraform(this._certificateChain),
            path: cdktf.stringToTerraform(this._path),
            private_key: cdktf.stringToTerraform(this._privateKey),
            server_certificate_name: cdktf.stringToTerraform(this._serverCertificateName),
            tags: cdktf.listMapper(iamServerCertificateTagsToTerraform)(this._tags),
        };
    }
}
exports.IamServerCertificate = IamServerCertificate;
// =================
// STATIC PROPERTIES
// =================
IamServerCertificate.tfResourceType = "awscc_iam_server_certificate";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWFtLXNlcnZlci1jZXJ0aWZpY2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImlhbS1zZXJ2ZXItY2VydGlmaWNhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhFQUE4RTtBQUM5RSwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUE2Qy9CLFNBQWdCLG1DQUFtQyxDQUFDLE1BQWlDO0lBQ25GLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3pDLEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQU5ELGtGQU1DO0FBR0Q7O0VBRUU7QUFDRixNQUFhLG9CQUFxQixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPL0QsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsU0FBcUMsRUFBRTtRQUN0RixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLDhCQUE4QjtZQUNyRCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLE9BQU87YUFDdEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDL0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FB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QkFBc0IsQ0FBQTtJQUNwQyxDQUFDO0lBSUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFRLENBQUM7SUFDdkQsQ0FBQztJQUNELElBQVcsSUFBSSxDQUFDLEtBQWlDO1FBQy9DLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7SUFDekIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ25CLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDaEUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNsRSxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekMsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3RELHVCQUF1QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUM7WUFDN0UsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3hFLENBQUM7SUFDSixDQUFDOztBQWhLSCxvREFpS0M7QUEvSkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyxtQ0FBYyxHQUFXLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvaWFtX3NlcnZlcl9jZXJ0aWZpY2F0ZS5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgSWFtU2VydmVyQ2VydGlmaWNhdGVDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9pYW1fc2VydmVyX2NlcnRpZmljYXRlLmh0bWwjY2VydGlmaWNhdGVfYm9keSBJYW1TZXJ2ZXJDZXJ0aWZpY2F0ZSNjZXJ0aWZpY2F0ZV9ib2R5fVxuICAqL1xuICByZWFkb25seSBjZXJ0aWZpY2F0ZUJvZHk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvaWFtX3NlcnZlcl9jZXJ0aWZpY2F0ZS5odG1sI2NlcnRpZmljYXRlX2NoYWluIElhbVNlcnZlckNlcnRpZmljYXRlI2NlcnRpZmljYXRlX2NoYWlufVxuICAqL1xuICByZWFkb25seSBjZXJ0aWZpY2F0ZUNoYWluPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2lhbV9zZXJ2ZXJfY2VydGlmaWNhdGUuaHRtbCNwYXRoIElhbVNlcnZlckNlcnRpZmljYXRlI3BhdGh9XG4gICovXG4gIHJlYWRvbmx5IHBhdGg/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvaWFtX3NlcnZlcl9jZXJ0aWZpY2F0ZS5odG1sI3ByaXZhdGVfa2V5IElhbVNlcnZlckNlcnRpZmljYXRlI3ByaXZhdGVfa2V5fVxuICAqL1xuICByZWFkb25seSBwcml2YXRlS2V5Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2lhbV9zZXJ2ZXJfY2VydGlmaWNhdGUuaHRtbCNzZXJ2ZXJfY2VydGlmaWNhdGVfbmFtZSBJYW1TZXJ2ZXJDZXJ0aWZpY2F0ZSNzZXJ2ZXJfY2VydGlmaWNhdGVfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgc2VydmVyQ2VydGlmaWNhdGVOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2lhbV9zZXJ2ZXJfY2VydGlmaWNhdGUuaHRtbCN0YWdzIElhbVNlcnZlckNlcnRpZmljYXRlI3RhZ3N9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3M/OiBJYW1TZXJ2ZXJDZXJ0aWZpY2F0ZVRhZ3NbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSWFtU2VydmVyQ2VydGlmaWNhdGVUYWdzIHtcbiAgLyoqXG4gICogVGhlIGtleSBuYW1lIG9mIHRoZSB0YWcuIFlvdSBjYW4gc3BlY2lmeSBhIHZhbHVlIHRoYXQgaXMgMSB0byAxMjggVW5pY29kZSBjaGFyYWN0ZXJzIGluIGxlbmd0aCBhbmQgY2Fubm90IGJlIHByZWZpeGVkIHdpdGggYXdzOi4gWW91IGNhbiB1c2UgYW55IG9mIHRoZSBmb2xsb3dpbmcgY2hhcmFjdGVyczogdGhlIHNldCBvZiBVbmljb2RlIGxldHRlcnMsIGRpZ2l0cywgd2hpdGVzcGFjZSwgXywgLiwgLywgPSwgKywgYW5kIC0uXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9pYW1fc2VydmVyX2NlcnRpZmljYXRlLmh0bWwja2V5IElhbVNlcnZlckNlcnRpZmljYXRlI2tleX1cbiAgKi9cbiAgcmVhZG9ubHkga2V5OiBzdHJpbmc7XG4gIC8qKlxuICAqIFRoZSB2YWx1ZSBmb3IgdGhlIHRhZy4gWW91IGNhbiBzcGVjaWZ5IGEgdmFsdWUgdGhhdCBpcyAwIHRvIDI1NiBVbmljb2RlIGNoYXJhY3RlcnMgaW4gbGVuZ3RoIGFuZCBjYW5ub3QgYmUgcHJlZml4ZWQgd2l0aCBhd3M6LiBZb3UgY2FuIHVzZSBhbnkgb2YgdGhlIGZvbGxvd2luZyBjaGFyYWN0ZXJzOiB0aGUgc2V0IG9mIFVuaWNvZGUgbGV0dGVycywgZGlnaXRzLCB3aGl0ZXNwYWNlLCBfLCAuLCAvLCA9LCArLCBhbmQgLS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2lhbV9zZXJ2ZXJfY2VydGlmaWNhdGUuaHRtbCN2YWx1ZSBJYW1TZXJ2ZXJDZXJ0aWZpY2F0ZSN2YWx1ZX1cbiAgKi9cbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlhbVNlcnZlckNlcnRpZmljYXRlVGFnc1RvVGVycmFmb3JtKHN0cnVjdD86IElhbVNlcnZlckNlcnRpZmljYXRlVGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9pYW1fc2VydmVyX2NlcnRpZmljYXRlLmh0bWwgYXdzY2NfaWFtX3NlcnZlcl9jZXJ0aWZpY2F0ZX1cbiovXG5leHBvcnQgY2xhc3MgSWFtU2VydmVyQ2VydGlmaWNhdGUgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NjY19pYW1fc2VydmVyX2NlcnRpZmljYXRlXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2lhbV9zZXJ2ZXJfY2VydGlmaWNhdGUuaHRtbCBhd3NjY19pYW1fc2VydmVyX2NlcnRpZmljYXRlfSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBJYW1TZXJ2ZXJDZXJ0aWZpY2F0ZUNvbmZpZyA9IHt9XG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IElhbVNlcnZlckNlcnRpZmljYXRlQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c2NjX2lhbV9zZXJ2ZXJfY2VydGlmaWNhdGUnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9jZXJ0aWZpY2F0ZUJvZHkgPSBjb25maWcuY2VydGlmaWNhdGVCb2R5O1xuICAgIHRoaXMuX2NlcnRpZmljYXRlQ2hhaW4gPSBjb25maWcuY2VydGlmaWNhdGVDaGFpbjtcbiAgICB0aGlzLl9wYXRoID0gY29uZmlnLnBhdGg7XG4gICAgdGhpcy5fcHJpdmF0ZUtleSA9IGNvbmZpZy5wcml2YXRlS2V5O1xuICAgIHRoaXMuX3NlcnZlckNlcnRpZmljYXRlTmFtZSA9IGNvbmZpZy5zZXJ2ZXJDZXJ0aWZpY2F0ZU5hbWU7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGNlcnRpZmljYXRlX2JvZHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZUJvZHk/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVCb2R5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2VydGlmaWNhdGVfYm9keScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2VydGlmaWNhdGVCb2R5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jZXJ0aWZpY2F0ZUJvZHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDZXJ0aWZpY2F0ZUJvZHkoKSB7XG4gICAgdGhpcy5fY2VydGlmaWNhdGVCb2R5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUJvZHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2VydGlmaWNhdGVCb2R5XG4gIH1cblxuICAvLyBjZXJ0aWZpY2F0ZV9jaGFpbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NlcnRpZmljYXRlQ2hhaW4/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVDaGFpbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NlcnRpZmljYXRlX2NoYWluJyk7XG4gIH1cbiAgcHVibGljIHNldCBjZXJ0aWZpY2F0ZUNoYWluKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2VydGlmaWNhdGVDaGFpbigpIHtcbiAgICB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUNoYWluSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NlcnRpZmljYXRlQ2hhaW5cbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gcGF0aCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wYXRoPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXRoJyk7XG4gIH1cbiAgcHVibGljIHNldCBwYXRoKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fcGF0aCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBhdGgoKSB7XG4gICAgdGhpcy5fcGF0aCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGF0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXRoXG4gIH1cblxuICAvLyBwcml2YXRlX2tleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ByaXZhdGVLZXk/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgcHJpdmF0ZUtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByaXZhdGVfa2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwcml2YXRlS2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcml2YXRlS2V5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJpdmF0ZUtleSgpIHtcbiAgICB0aGlzLl9wcml2YXRlS2V5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcml2YXRlS2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaXZhdGVLZXlcbiAgfVxuXG4gIC8vIHNlcnZlcl9jZXJ0aWZpY2F0ZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VydmVyQ2VydGlmaWNhdGVOYW1lPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHNlcnZlckNlcnRpZmljYXRlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlcnZlcl9jZXJ0aWZpY2F0ZV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXJ2ZXJDZXJ0aWZpY2F0ZU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlcnZlckNlcnRpZmljYXRlTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlcnZlckNlcnRpZmljYXRlTmFtZSgpIHtcbiAgICB0aGlzLl9zZXJ2ZXJDZXJ0aWZpY2F0ZU5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlcnZlckNlcnRpZmljYXRlTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2ZXJDZXJ0aWZpY2F0ZU5hbWVcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IElhbVNlcnZlckNlcnRpZmljYXRlVGFnc1tdO1xuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IElhbVNlcnZlckNlcnRpZmljYXRlVGFnc1tdICkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBjZXJ0aWZpY2F0ZV9ib2R5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jZXJ0aWZpY2F0ZUJvZHkpLFxuICAgICAgY2VydGlmaWNhdGVfY2hhaW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NlcnRpZmljYXRlQ2hhaW4pLFxuICAgICAgcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcGF0aCksXG4gICAgICBwcml2YXRlX2tleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcHJpdmF0ZUtleSksXG4gICAgICBzZXJ2ZXJfY2VydGlmaWNhdGVfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc2VydmVyQ2VydGlmaWNhdGVOYW1lKSxcbiAgICAgIHRhZ3M6IGNka3RmLmxpc3RNYXBwZXIoaWFtU2VydmVyQ2VydGlmaWNhdGVUYWdzVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==