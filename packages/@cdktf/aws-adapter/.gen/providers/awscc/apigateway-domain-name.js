"use strict";
// https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApigatewayDomainName = exports.apigatewayDomainNameTagsToTerraform = exports.apigatewayDomainNameMutualTlsAuthenticationToTerraform = exports.apigatewayDomainNameEndpointConfigurationToTerraform = void 0;
const cdktf = require("cdktf");
function apigatewayDomainNameEndpointConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        types: cdktf.listMapper(cdktf.stringToTerraform)(struct.types),
    };
}
exports.apigatewayDomainNameEndpointConfigurationToTerraform = apigatewayDomainNameEndpointConfigurationToTerraform;
function apigatewayDomainNameMutualTlsAuthenticationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        truststore_uri: cdktf.stringToTerraform(struct.truststoreUri),
        truststore_version: cdktf.stringToTerraform(struct.truststoreVersion),
    };
}
exports.apigatewayDomainNameMutualTlsAuthenticationToTerraform = apigatewayDomainNameMutualTlsAuthenticationToTerraform;
function apigatewayDomainNameTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.apigatewayDomainNameTagsToTerraform = apigatewayDomainNameTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html awscc_apigateway_domain_name}
*/
class ApigatewayDomainName extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html awscc_apigateway_domain_name} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApigatewayDomainNameConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_apigateway_domain_name',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._certificateArn = config.certificateArn;
        this._domainName = config.domainName;
        this._endpointConfiguration = config.endpointConfiguration;
        this._mutualTlsAuthentication = config.mutualTlsAuthentication;
        this._ownershipVerificationCertificateArn = config.ownershipVerificationCertificateArn;
        this._regionalCertificateArn = config.regionalCertificateArn;
        this._securityPolicy = config.securityPolicy;
        this._tags = config.tags;
    }
    get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    set certificateArn(value) {
        this._certificateArn = value;
    }
    resetCertificateArn() {
        this._certificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get certificateArnInput() {
        return this._certificateArn;
    }
    // distribution_domain_name - computed: true, optional: false, required: false
    get distributionDomainName() {
        return this.getStringAttribute('distribution_domain_name');
    }
    // distribution_hosted_zone_id - computed: true, optional: false, required: false
    get distributionHostedZoneId() {
        return this.getStringAttribute('distribution_hosted_zone_id');
    }
    get domainName() {
        return this.getStringAttribute('domain_name');
    }
    set domainName(value) {
        this._domainName = value;
    }
    resetDomainName() {
        this._domainName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get domainNameInput() {
        return this._domainName;
    }
    get endpointConfiguration() {
        return this.interpolationForAttribute('endpoint_configuration');
    }
    set endpointConfiguration(value) {
        this._endpointConfiguration = value;
    }
    resetEndpointConfiguration() {
        this._endpointConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get endpointConfigurationInput() {
        return this._endpointConfiguration;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get mutualTlsAuthentication() {
        return this.interpolationForAttribute('mutual_tls_authentication');
    }
    set mutualTlsAuthentication(value) {
        this._mutualTlsAuthentication = value;
    }
    resetMutualTlsAuthentication() {
        this._mutualTlsAuthentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mutualTlsAuthenticationInput() {
        return this._mutualTlsAuthentication;
    }
    get ownershipVerificationCertificateArn() {
        return this.getStringAttribute('ownership_verification_certificate_arn');
    }
    set ownershipVerificationCertificateArn(value) {
        this._ownershipVerificationCertificateArn = value;
    }
    resetOwnershipVerificationCertificateArn() {
        this._ownershipVerificationCertificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ownershipVerificationCertificateArnInput() {
        return this._ownershipVerificationCertificateArn;
    }
    get regionalCertificateArn() {
        return this.getStringAttribute('regional_certificate_arn');
    }
    set regionalCertificateArn(value) {
        this._regionalCertificateArn = value;
    }
    resetRegionalCertificateArn() {
        this._regionalCertificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get regionalCertificateArnInput() {
        return this._regionalCertificateArn;
    }
    // regional_domain_name - computed: true, optional: false, required: false
    get regionalDomainName() {
        return this.getStringAttribute('regional_domain_name');
    }
    // regional_hosted_zone_id - computed: true, optional: false, required: false
    get regionalHostedZoneId() {
        return this.getStringAttribute('regional_hosted_zone_id');
    }
    get securityPolicy() {
        return this.getStringAttribute('security_policy');
    }
    set securityPolicy(value) {
        this._securityPolicy = value;
    }
    resetSecurityPolicy() {
        this._securityPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get securityPolicyInput() {
        return this._securityPolicy;
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
            certificate_arn: cdktf.stringToTerraform(this._certificateArn),
            domain_name: cdktf.stringToTerraform(this._domainName),
            endpoint_configuration: apigatewayDomainNameEndpointConfigurationToTerraform(this._endpointConfiguration),
            mutual_tls_authentication: apigatewayDomainNameMutualTlsAuthenticationToTerraform(this._mutualTlsAuthentication),
            ownership_verification_certificate_arn: cdktf.stringToTerraform(this._ownershipVerificationCertificateArn),
            regional_certificate_arn: cdktf.stringToTerraform(this._regionalCertificateArn),
            security_policy: cdktf.stringToTerraform(this._securityPolicy),
            tags: cdktf.listMapper(apigatewayDomainNameTagsToTerraform)(this._tags),
        };
    }
}
exports.ApigatewayDomainName = ApigatewayDomainName;
// =================
// STATIC PROPERTIES
// =================
ApigatewayDomainName.tfResourceType = "awscc_apigateway_domain_name";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpZ2F0ZXdheS1kb21haW4tbmFtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwaWdhdGV3YXktZG9tYWluLW5hbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhFQUE4RTtBQUM5RSwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUE2Qy9CLFNBQWdCLG9EQUFvRCxDQUFDLE1BQWtEO0lBQ3JILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsS0FBSyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUNoRSxDQUFBO0FBQ0gsQ0FBQztBQUxELG9IQUtDO0FBYUQsU0FBZ0Isc0RBQXNELENBQUMsTUFBb0Q7SUFDekgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7UUFDOUQsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxpQkFBaUIsQ0FBQztLQUN2RSxDQUFBO0FBQ0gsQ0FBQztBQU5ELHdIQU1DO0FBYUQsU0FBZ0IsbUNBQW1DLENBQUMsTUFBaUM7SUFDbkYsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7UUFDekMsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tB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QWlCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUM5RCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDdEQsc0JBQXNCLEVBQUUsb0RBQW9ELENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1lBQ3pHLHlCQUF5QixFQUFFLHNEQUFzRCxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztZQUNoSCxzQ0FBc0MsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLG9DQUFvQyxDQUFDO1lBQzFHLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7WUFDL0UsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQzlELElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLG1DQUFtQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUN4RSxDQUFDO0lBQ0osQ0FBQzs7QUFuTkgsb0RBb05DO0FBbE5DLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csbUNBQWMsR0FBVyw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FwaWdhdGV3YXlfZG9tYWluX25hbWUuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIEFwaWdhdGV3YXlEb21haW5OYW1lQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYXBpZ2F0ZXdheV9kb21haW5fbmFtZS5odG1sI2NlcnRpZmljYXRlX2FybiBBcGlnYXRld2F5RG9tYWluTmFtZSNjZXJ0aWZpY2F0ZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IGNlcnRpZmljYXRlQXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FwaWdhdGV3YXlfZG9tYWluX25hbWUuaHRtbCNkb21haW5fbmFtZSBBcGlnYXRld2F5RG9tYWluTmFtZSNkb21haW5fbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgZG9tYWluTmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hcGlnYXRld2F5X2RvbWFpbl9uYW1lLmh0bWwjZW5kcG9pbnRfY29uZmlndXJhdGlvbiBBcGlnYXRld2F5RG9tYWluTmFtZSNlbmRwb2ludF9jb25maWd1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSBlbmRwb2ludENvbmZpZ3VyYXRpb24/OiBBcGlnYXRld2F5RG9tYWluTmFtZUVuZHBvaW50Q29uZmlndXJhdGlvbjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hcGlnYXRld2F5X2RvbWFpbl9uYW1lLmh0bWwjbXV0dWFsX3Rsc19hdXRoZW50aWNhdGlvbiBBcGlnYXRld2F5RG9tYWluTmFtZSNtdXR1YWxfdGxzX2F1dGhlbnRpY2F0aW9ufVxuICAqL1xuICByZWFkb25seSBtdXR1YWxUbHNBdXRoZW50aWNhdGlvbj86IEFwaWdhdGV3YXlEb21haW5OYW1lTXV0dWFsVGxzQXV0aGVudGljYXRpb247XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYXBpZ2F0ZXdheV9kb21haW5fbmFtZS5odG1sI293bmVyc2hpcF92ZXJpZmljYXRpb25fY2VydGlmaWNhdGVfYXJuIEFwaWdhdGV3YXlEb21haW5OYW1lI293bmVyc2hpcF92ZXJpZmljYXRpb25fY2VydGlmaWNhdGVfYXJufVxuICAqL1xuICByZWFkb25seSBvd25lcnNoaXBWZXJpZmljYXRpb25DZXJ0aWZpY2F0ZUFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hcGlnYXRld2F5X2RvbWFpbl9uYW1lLmh0bWwjcmVnaW9uYWxfY2VydGlmaWNhdGVfYXJuIEFwaWdhdGV3YXlEb21haW5OYW1lI3JlZ2lvbmFsX2NlcnRpZmljYXRlX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgcmVnaW9uYWxDZXJ0aWZpY2F0ZUFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hcGlnYXRld2F5X2RvbWFpbl9uYW1lLmh0bWwjc2VjdXJpdHlfcG9saWN5IEFwaWdhdGV3YXlEb21haW5OYW1lI3NlY3VyaXR5X3BvbGljeX1cbiAgKi9cbiAgcmVhZG9ubHkgc2VjdXJpdHlQb2xpY3k/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYXBpZ2F0ZXdheV9kb21haW5fbmFtZS5odG1sI3RhZ3MgQXBpZ2F0ZXdheURvbWFpbk5hbWUjdGFnc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFncz86IEFwaWdhdGV3YXlEb21haW5OYW1lVGFnc1tdO1xufVxuZXhwb3J0IGludGVyZmFjZSBBcGlnYXRld2F5RG9tYWluTmFtZUVuZHBvaW50Q29uZmlndXJhdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYXBpZ2F0ZXdheV9kb21haW5fbmFtZS5odG1sI3R5cGVzIEFwaWdhdGV3YXlEb21haW5OYW1lI3R5cGVzfVxuICAqL1xuICByZWFkb25seSB0eXBlcz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBpZ2F0ZXdheURvbWFpbk5hbWVFbmRwb2ludENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcGlnYXRld2F5RG9tYWluTmFtZUVuZHBvaW50Q29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB0eXBlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS50eXBlcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcGlnYXRld2F5RG9tYWluTmFtZU11dHVhbFRsc0F1dGhlbnRpY2F0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hcGlnYXRld2F5X2RvbWFpbl9uYW1lLmh0bWwjdHJ1c3RzdG9yZV91cmkgQXBpZ2F0ZXdheURvbWFpbk5hbWUjdHJ1c3RzdG9yZV91cml9XG4gICovXG4gIHJlYWRvbmx5IHRydXN0c3RvcmVVcmk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYXBpZ2F0ZXdheV9kb21haW5fbmFtZS5odG1sI3RydXN0c3RvcmVfdmVyc2lvbiBBcGlnYXRld2F5RG9tYWluTmFtZSN0cnVzdHN0b3JlX3ZlcnNpb259XG4gICovXG4gIHJlYWRvbmx5IHRydXN0c3RvcmVWZXJzaW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBpZ2F0ZXdheURvbWFpbk5hbWVNdXR1YWxUbHNBdXRoZW50aWNhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEFwaWdhdGV3YXlEb21haW5OYW1lTXV0dWFsVGxzQXV0aGVudGljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdHJ1c3RzdG9yZV91cmk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHJ1c3RzdG9yZVVyaSksXG4gICAgdHJ1c3RzdG9yZV92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRydXN0c3RvcmVWZXJzaW9uKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwaWdhdGV3YXlEb21haW5OYW1lVGFncyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYXBpZ2F0ZXdheV9kb21haW5fbmFtZS5odG1sI2tleSBBcGlnYXRld2F5RG9tYWluTmFtZSNrZXl9XG4gICovXG4gIHJlYWRvbmx5IGtleT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hcGlnYXRld2F5X2RvbWFpbl9uYW1lLmh0bWwjdmFsdWUgQXBpZ2F0ZXdheURvbWFpbk5hbWUjdmFsdWV9XG4gICovXG4gIHJlYWRvbmx5IHZhbHVlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBpZ2F0ZXdheURvbWFpbk5hbWVUYWdzVG9UZXJyYWZvcm0oc3RydWN0PzogQXBpZ2F0ZXdheURvbWFpbk5hbWVUYWdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FwaWdhdGV3YXlfZG9tYWluX25hbWUuaHRtbCBhd3NjY19hcGlnYXRld2F5X2RvbWFpbl9uYW1lfVxuKi9cbmV4cG9ydCBjbGFzcyBBcGlnYXRld2F5RG9tYWluTmFtZSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX2FwaWdhdGV3YXlfZG9tYWluX25hbWVcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYXBpZ2F0ZXdheV9kb21haW5fbmFtZS5odG1sIGF3c2NjX2FwaWdhdGV3YXlfZG9tYWluX25hbWV9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIEFwaWdhdGV3YXlEb21haW5OYW1lQ29uZmlnID0ge31cbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQXBpZ2F0ZXdheURvbWFpbk5hbWVDb25maWcgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfYXBpZ2F0ZXdheV9kb21haW5fbmFtZScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3NjYydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2NlcnRpZmljYXRlQXJuID0gY29uZmlnLmNlcnRpZmljYXRlQXJuO1xuICAgIHRoaXMuX2RvbWFpbk5hbWUgPSBjb25maWcuZG9tYWluTmFtZTtcbiAgICB0aGlzLl9lbmRwb2ludENvbmZpZ3VyYXRpb24gPSBjb25maWcuZW5kcG9pbnRDb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX211dHVhbFRsc0F1dGhlbnRpY2F0aW9uID0gY29uZmlnLm11dHVhbFRsc0F1dGhlbnRpY2F0aW9uO1xuICAgIHRoaXMuX293bmVyc2hpcFZlcmlmaWNhdGlvbkNlcnRpZmljYXRlQXJuID0gY29uZmlnLm93bmVyc2hpcFZlcmlmaWNhdGlvbkNlcnRpZmljYXRlQXJuO1xuICAgIHRoaXMuX3JlZ2lvbmFsQ2VydGlmaWNhdGVBcm4gPSBjb25maWcucmVnaW9uYWxDZXJ0aWZpY2F0ZUFybjtcbiAgICB0aGlzLl9zZWN1cml0eVBvbGljeSA9IGNvbmZpZy5zZWN1cml0eVBvbGljeTtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGNlcnRpZmljYXRlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZUFybj86IHN0cmluZztcbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NlcnRpZmljYXRlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2VydGlmaWNhdGVBcm4odmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9jZXJ0aWZpY2F0ZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENlcnRpZmljYXRlQXJuKCkge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jZXJ0aWZpY2F0ZUFyblxuICB9XG5cbiAgLy8gZGlzdHJpYnV0aW9uX2RvbWFpbl9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGlzdHJpYnV0aW9uRG9tYWluTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rpc3RyaWJ1dGlvbl9kb21haW5fbmFtZScpO1xuICB9XG5cbiAgLy8gZGlzdHJpYnV0aW9uX2hvc3RlZF96b25lX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGlzdHJpYnV0aW9uSG9zdGVkWm9uZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGlzdHJpYnV0aW9uX2hvc3RlZF96b25lX2lkJyk7XG4gIH1cblxuICAvLyBkb21haW5fbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RvbWFpbk5hbWU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZG9tYWluTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RvbWFpbl9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBkb21haW5OYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kb21haW5OYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RG9tYWluTmFtZSgpIHtcbiAgICB0aGlzLl9kb21haW5OYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkb21haW5OYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvbWFpbk5hbWVcbiAgfVxuXG4gIC8vIGVuZHBvaW50X2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5kcG9pbnRDb25maWd1cmF0aW9uPzogQXBpZ2F0ZXdheURvbWFpbk5hbWVFbmRwb2ludENvbmZpZ3VyYXRpb247XG4gIHB1YmxpYyBnZXQgZW5kcG9pbnRDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2VuZHBvaW50X2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlbmRwb2ludENvbmZpZ3VyYXRpb24odmFsdWU6IEFwaWdhdGV3YXlEb21haW5OYW1lRW5kcG9pbnRDb25maWd1cmF0aW9uICkge1xuICAgIHRoaXMuX2VuZHBvaW50Q29uZmlndXJhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuZHBvaW50Q29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9lbmRwb2ludENvbmZpZ3VyYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuZHBvaW50Q29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmRwb2ludENvbmZpZ3VyYXRpb25cbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbXV0dWFsX3Rsc19hdXRoZW50aWNhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tdXR1YWxUbHNBdXRoZW50aWNhdGlvbj86IEFwaWdhdGV3YXlEb21haW5OYW1lTXV0dWFsVGxzQXV0aGVudGljYXRpb247XG4gIHB1YmxpYyBnZXQgbXV0dWFsVGxzQXV0aGVudGljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbXV0dWFsX3Rsc19hdXRoZW50aWNhdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG11dHVhbFRsc0F1dGhlbnRpY2F0aW9uKHZhbHVlOiBBcGlnYXRld2F5RG9tYWluTmFtZU11dHVhbFRsc0F1dGhlbnRpY2F0aW9uICkge1xuICAgIHRoaXMuX211dHVhbFRsc0F1dGhlbnRpY2F0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TXV0dWFsVGxzQXV0aGVudGljYXRpb24oKSB7XG4gICAgdGhpcy5fbXV0dWFsVGxzQXV0aGVudGljYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG11dHVhbFRsc0F1dGhlbnRpY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX211dHVhbFRsc0F1dGhlbnRpY2F0aW9uXG4gIH1cblxuICAvLyBvd25lcnNoaXBfdmVyaWZpY2F0aW9uX2NlcnRpZmljYXRlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vd25lcnNoaXBWZXJpZmljYXRpb25DZXJ0aWZpY2F0ZUFybj86IHN0cmluZztcbiAgcHVibGljIGdldCBvd25lcnNoaXBWZXJpZmljYXRpb25DZXJ0aWZpY2F0ZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ293bmVyc2hpcF92ZXJpZmljYXRpb25fY2VydGlmaWNhdGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBvd25lcnNoaXBWZXJpZmljYXRpb25DZXJ0aWZpY2F0ZUFybih2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX293bmVyc2hpcFZlcmlmaWNhdGlvbkNlcnRpZmljYXRlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T3duZXJzaGlwVmVyaWZpY2F0aW9uQ2VydGlmaWNhdGVBcm4oKSB7XG4gICAgdGhpcy5fb3duZXJzaGlwVmVyaWZpY2F0aW9uQ2VydGlmaWNhdGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG93bmVyc2hpcFZlcmlmaWNhdGlvbkNlcnRpZmljYXRlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX293bmVyc2hpcFZlcmlmaWNhdGlvbkNlcnRpZmljYXRlQXJuXG4gIH1cblxuICAvLyByZWdpb25hbF9jZXJ0aWZpY2F0ZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVnaW9uYWxDZXJ0aWZpY2F0ZUFybj86IHN0cmluZztcbiAgcHVibGljIGdldCByZWdpb25hbENlcnRpZmljYXRlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVnaW9uYWxfY2VydGlmaWNhdGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCByZWdpb25hbENlcnRpZmljYXRlQXJuKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fcmVnaW9uYWxDZXJ0aWZpY2F0ZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlZ2lvbmFsQ2VydGlmaWNhdGVBcm4oKSB7XG4gICAgdGhpcy5fcmVnaW9uYWxDZXJ0aWZpY2F0ZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVnaW9uYWxDZXJ0aWZpY2F0ZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWdpb25hbENlcnRpZmljYXRlQXJuXG4gIH1cblxuICAvLyByZWdpb25hbF9kb21haW5fbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlZ2lvbmFsRG9tYWluTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlZ2lvbmFsX2RvbWFpbl9uYW1lJyk7XG4gIH1cblxuICAvLyByZWdpb25hbF9ob3N0ZWRfem9uZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlZ2lvbmFsSG9zdGVkWm9uZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVnaW9uYWxfaG9zdGVkX3pvbmVfaWQnKTtcbiAgfVxuXG4gIC8vIHNlY3VyaXR5X3BvbGljeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZWN1cml0eVBvbGljeT86IHN0cmluZztcbiAgcHVibGljIGdldCBzZWN1cml0eVBvbGljeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlY3VyaXR5X3BvbGljeScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjdXJpdHlQb2xpY3kodmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9zZWN1cml0eVBvbGljeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlY3VyaXR5UG9saWN5KCkge1xuICAgIHRoaXMuX3NlY3VyaXR5UG9saWN5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWN1cml0eVBvbGljeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWN1cml0eVBvbGljeVxuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogQXBpZ2F0ZXdheURvbWFpbk5hbWVUYWdzW107XG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogQXBpZ2F0ZXdheURvbWFpbk5hbWVUYWdzW10gKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzXG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNlcnRpZmljYXRlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY2VydGlmaWNhdGVBcm4pLFxuICAgICAgZG9tYWluX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RvbWFpbk5hbWUpLFxuICAgICAgZW5kcG9pbnRfY29uZmlndXJhdGlvbjogYXBpZ2F0ZXdheURvbWFpbk5hbWVFbmRwb2ludENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9lbmRwb2ludENvbmZpZ3VyYXRpb24pLFxuICAgICAgbXV0dWFsX3Rsc19hdXRoZW50aWNhdGlvbjogYXBpZ2F0ZXdheURvbWFpbk5hbWVNdXR1YWxUbHNBdXRoZW50aWNhdGlvblRvVGVycmFmb3JtKHRoaXMuX211dHVhbFRsc0F1dGhlbnRpY2F0aW9uKSxcbiAgICAgIG93bmVyc2hpcF92ZXJpZmljYXRpb25fY2VydGlmaWNhdGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9vd25lcnNoaXBWZXJpZmljYXRpb25DZXJ0aWZpY2F0ZUFybiksXG4gICAgICByZWdpb25hbF9jZXJ0aWZpY2F0ZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JlZ2lvbmFsQ2VydGlmaWNhdGVBcm4pLFxuICAgICAgc2VjdXJpdHlfcG9saWN5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zZWN1cml0eVBvbGljeSksXG4gICAgICB0YWdzOiBjZGt0Zi5saXN0TWFwcGVyKGFwaWdhdGV3YXlEb21haW5OYW1lVGFnc1RvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICB9O1xuICB9XG59XG4iXX0=