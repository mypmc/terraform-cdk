"use strict";
// https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_endpoint.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.RdsDbProxyEndpoint = exports.rdsDbProxyEndpointTagsToTerraform = void 0;
const cdktf = require("cdktf");
function rdsDbProxyEndpointTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.rdsDbProxyEndpointTagsToTerraform = rdsDbProxyEndpointTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_endpoint.html awscc_rds_db_proxy_endpoint}
*/
class RdsDbProxyEndpoint extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_endpoint.html awscc_rds_db_proxy_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsDbProxyEndpointConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_rds_db_proxy_endpoint',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._dbProxyEndpointName = config.dbProxyEndpointName;
        this._dbProxyName = config.dbProxyName;
        this._tags = config.tags;
        this._targetRole = config.targetRole;
        this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
        this._vpcSubnetIds = config.vpcSubnetIds;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // db_proxy_endpoint_arn - computed: true, optional: false, required: false
    get dbProxyEndpointArn() {
        return this.getStringAttribute('db_proxy_endpoint_arn');
    }
    get dbProxyEndpointName() {
        return this.getStringAttribute('db_proxy_endpoint_name');
    }
    set dbProxyEndpointName(value) {
        this._dbProxyEndpointName = value;
    }
    // Temporarily expose input value. Use with caution.
    get dbProxyEndpointNameInput() {
        return this._dbProxyEndpointName;
    }
    get dbProxyName() {
        return this.getStringAttribute('db_proxy_name');
    }
    set dbProxyName(value) {
        this._dbProxyName = value;
    }
    // Temporarily expose input value. Use with caution.
    get dbProxyNameInput() {
        return this._dbProxyName;
    }
    // endpoint - computed: true, optional: false, required: false
    get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // is_default - computed: true, optional: false, required: false
    get isDefault() {
        return this.getBooleanAttribute('is_default');
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
    get targetRole() {
        return this.getStringAttribute('target_role');
    }
    set targetRole(value) {
        this._targetRole = value;
    }
    resetTargetRole() {
        this._targetRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get targetRoleInput() {
        return this._targetRole;
    }
    // vpc_id - computed: true, optional: false, required: false
    get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    get vpcSecurityGroupIds() {
        return this.getListAttribute('vpc_security_group_ids');
    }
    set vpcSecurityGroupIds(value) {
        this._vpcSecurityGroupIds = value;
    }
    resetVpcSecurityGroupIds() {
        this._vpcSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vpcSecurityGroupIdsInput() {
        return this._vpcSecurityGroupIds;
    }
    get vpcSubnetIds() {
        return this.getListAttribute('vpc_subnet_ids');
    }
    set vpcSubnetIds(value) {
        this._vpcSubnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    get vpcSubnetIdsInput() {
        return this._vpcSubnetIds;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            db_proxy_endpoint_name: cdktf.stringToTerraform(this._dbProxyEndpointName),
            db_proxy_name: cdktf.stringToTerraform(this._dbProxyName),
            tags: cdktf.listMapper(rdsDbProxyEndpointTagsToTerraform)(this._tags),
            target_role: cdktf.stringToTerraform(this._targetRole),
            vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
            vpc_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSubnetIds),
        };
    }
}
exports.RdsDbProxyEndpoint = RdsDbProxyEndpoint;
// =================
// STATIC PROPERTIES
// =================
RdsDbProxyEndpoint.tfResourceType = "awscc_rds_db_proxy_endpoint";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmRzLWRiLXByb3h5LWVuZHBvaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmRzLWRiLXByb3h5LWVuZHBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2RUFBNkU7QUFDN0UsMkNBQTJDOzs7QUFHM0MsK0JBQStCO0FBcUQvQixTQUFnQixpQ0FBaUMsQ0FBQyxNQUErQjtJQUMvRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFORCw4RUFNQztBQUdEOztFQUVFO0FBQ0YsTUFBYSxrQkFBbUIsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBTzdELGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQWdDO1FBQy9FLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsNkJBQTZCO1lBQ3BELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsT0FBTzthQUN0QjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcs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QUFvQjtBQUNwQixvQkFBb0I7QUFDRyxpQ0FBYyxHQUFXLDZCQUE2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcmRzX2RiX3Byb3h5X2VuZHBvaW50Lmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBSZHNEYlByb3h5RW5kcG9pbnRDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogVGhlIGlkZW50aWZpZXIgZm9yIHRoZSBEQiBwcm94eSBlbmRwb2ludC4gVGhpcyBuYW1lIG11c3QgYmUgdW5pcXVlIGZvciBhbGwgREIgcHJveHkgZW5kcG9pbnRzIG93bmVkIGJ5IHlvdXIgQVdTIGFjY291bnQgaW4gdGhlIHNwZWNpZmllZCBBV1MgUmVnaW9uLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcmRzX2RiX3Byb3h5X2VuZHBvaW50Lmh0bWwjZGJfcHJveHlfZW5kcG9pbnRfbmFtZSBSZHNEYlByb3h5RW5kcG9pbnQjZGJfcHJveHlfZW5kcG9pbnRfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgZGJQcm94eUVuZHBvaW50TmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgaWRlbnRpZmllciBmb3IgdGhlIHByb3h5LiBUaGlzIG5hbWUgbXVzdCBiZSB1bmlxdWUgZm9yIGFsbCBwcm94aWVzIG93bmVkIGJ5IHlvdXIgQVdTIGFjY291bnQgaW4gdGhlIHNwZWNpZmllZCBBV1MgUmVnaW9uLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcmRzX2RiX3Byb3h5X2VuZHBvaW50Lmh0bWwjZGJfcHJveHlfbmFtZSBSZHNEYlByb3h5RW5kcG9pbnQjZGJfcHJveHlfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgZGJQcm94eU5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogQW4gb3B0aW9uYWwgc2V0IG9mIGtleS12YWx1ZSBwYWlycyB0byBhc3NvY2lhdGUgYXJiaXRyYXJ5IGRhdGEgb2YgeW91ciBjaG9vc2luZyB3aXRoIHRoZSBEQiBwcm94eSBlbmRwb2ludC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3Jkc19kYl9wcm94eV9lbmRwb2ludC5odG1sI3RhZ3MgUmRzRGJQcm94eUVuZHBvaW50I3RhZ3N9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3M/OiBSZHNEYlByb3h5RW5kcG9pbnRUYWdzW107XG4gIC8qKlxuICAqIEEgdmFsdWUgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgREIgcHJveHkgZW5kcG9pbnQgY2FuIGJlIHVzZWQgZm9yIHJlYWQvd3JpdGUgb3IgcmVhZC1vbmx5IG9wZXJhdGlvbnMuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9yZHNfZGJfcHJveHlfZW5kcG9pbnQuaHRtbCN0YXJnZXRfcm9sZSBSZHNEYlByb3h5RW5kcG9pbnQjdGFyZ2V0X3JvbGV9XG4gICovXG4gIHJlYWRvbmx5IHRhcmdldFJvbGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFZQQyBzZWN1cml0eSBncm91cCBJRHMgdG8gYXNzb2NpYXRlIHdpdGggdGhlIG5ldyBEQiBwcm94eSBlbmRwb2ludC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3Jkc19kYl9wcm94eV9lbmRwb2ludC5odG1sI3ZwY19zZWN1cml0eV9ncm91cF9pZHMgUmRzRGJQcm94eUVuZHBvaW50I3ZwY19zZWN1cml0eV9ncm91cF9pZHN9XG4gICovXG4gIHJlYWRvbmx5IHZwY1NlY3VyaXR5R3JvdXBJZHM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogVlBDIHN1Ym5ldCBJRHMgdG8gYXNzb2NpYXRlIHdpdGggdGhlIG5ldyBEQiBwcm94eSBlbmRwb2ludC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3Jkc19kYl9wcm94eV9lbmRwb2ludC5odG1sI3ZwY19zdWJuZXRfaWRzIFJkc0RiUHJveHlFbmRwb2ludCN2cGNfc3VibmV0X2lkc31cbiAgKi9cbiAgcmVhZG9ubHkgdnBjU3VibmV0SWRzOiBzdHJpbmdbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUmRzRGJQcm94eUVuZHBvaW50VGFncyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcmRzX2RiX3Byb3h5X2VuZHBvaW50Lmh0bWwja2V5IFJkc0RiUHJveHlFbmRwb2ludCNrZXl9XG4gICovXG4gIHJlYWRvbmx5IGtleT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9yZHNfZGJfcHJveHlfZW5kcG9pbnQuaHRtbCN2YWx1ZSBSZHNEYlByb3h5RW5kcG9pbnQjdmFsdWV9XG4gICovXG4gIHJlYWRvbmx5IHZhbHVlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmRzRGJQcm94eUVuZHBvaW50VGFnc1RvVGVycmFmb3JtKHN0cnVjdD86IFJkc0RiUHJveHlFbmRwb2ludFRhZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcmRzX2RiX3Byb3h5X2VuZHBvaW50Lmh0bWwgYXdzY2NfcmRzX2RiX3Byb3h5X2VuZHBvaW50fVxuKi9cbmV4cG9ydCBjbGFzcyBSZHNEYlByb3h5RW5kcG9pbnQgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NjY19yZHNfZGJfcHJveHlfZW5kcG9pbnRcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcmRzX2RiX3Byb3h5X2VuZHBvaW50Lmh0bWwgYXdzY2NfcmRzX2RiX3Byb3h5X2VuZHBvaW50fSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBSZHNEYlByb3h5RW5kcG9pbnRDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogUmRzRGJQcm94eUVuZHBvaW50Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NjY19yZHNfZGJfcHJveHlfZW5kcG9pbnQnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9kYlByb3h5RW5kcG9pbnROYW1lID0gY29uZmlnLmRiUHJveHlFbmRwb2ludE5hbWU7XG4gICAgdGhpcy5fZGJQcm94eU5hbWUgPSBjb25maWcuZGJQcm94eU5hbWU7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhcmdldFJvbGUgPSBjb25maWcudGFyZ2V0Um9sZTtcbiAgICB0aGlzLl92cGNTZWN1cml0eUdyb3VwSWRzID0gY29uZmlnLnZwY1NlY3VyaXR5R3JvdXBJZHM7XG4gICAgdGhpcy5fdnBjU3VibmV0SWRzID0gY29uZmlnLnZwY1N1Ym5ldElkcztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gZGJfcHJveHlfZW5kcG9pbnRfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGJQcm94eUVuZHBvaW50QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGJfcHJveHlfZW5kcG9pbnRfYXJuJyk7XG4gIH1cblxuICAvLyBkYl9wcm94eV9lbmRwb2ludF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RiUHJveHlFbmRwb2ludE5hbWU6IHN0cmluZztcbiAgcHVibGljIGdldCBkYlByb3h5RW5kcG9pbnROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGJfcHJveHlfZW5kcG9pbnRfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGJQcm94eUVuZHBvaW50TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGJQcm94eUVuZHBvaW50TmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYlByb3h5RW5kcG9pbnROYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RiUHJveHlFbmRwb2ludE5hbWVcbiAgfVxuXG4gIC8vIGRiX3Byb3h5X25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGJQcm94eU5hbWU6IHN0cmluZztcbiAgcHVibGljIGdldCBkYlByb3h5TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RiX3Byb3h5X25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRiUHJveHlOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYlByb3h5TmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYlByb3h5TmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYlByb3h5TmFtZVxuICB9XG5cbiAgLy8gZW5kcG9pbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuZHBvaW50Jyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGlzX2RlZmF1bHQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpc0RlZmF1bHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaXNfZGVmYXVsdCcpO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogUmRzRGJQcm94eUVuZHBvaW50VGFnc1tdO1xuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IFJkc0RiUHJveHlFbmRwb2ludFRhZ3NbXSApIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NcbiAgfVxuXG4gIC8vIHRhcmdldF9yb2xlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFyZ2V0Um9sZT86IHN0cmluZztcbiAgcHVibGljIGdldCB0YXJnZXRSb2xlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGFyZ2V0X3JvbGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhcmdldFJvbGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RhcmdldFJvbGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYXJnZXRSb2xlKCkge1xuICAgIHRoaXMuX3RhcmdldFJvbGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhcmdldFJvbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0Um9sZVxuICB9XG5cbiAgLy8gdnBjX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdnBjSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2cGNfaWQnKTtcbiAgfVxuXG4gIC8vIHZwY19zZWN1cml0eV9ncm91cF9pZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdnBjU2VjdXJpdHlHcm91cElkcz86IHN0cmluZ1tdO1xuICBwdWJsaWMgZ2V0IHZwY1NlY3VyaXR5R3JvdXBJZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgndnBjX3NlY3VyaXR5X2dyb3VwX2lkcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdnBjU2VjdXJpdHlHcm91cElkcyh2YWx1ZTogc3RyaW5nW10gKSB7XG4gICAgdGhpcy5fdnBjU2VjdXJpdHlHcm91cElkcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZwY1NlY3VyaXR5R3JvdXBJZHMoKSB7XG4gICAgdGhpcy5fdnBjU2VjdXJpdHlHcm91cElkcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdnBjU2VjdXJpdHlHcm91cElkc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92cGNTZWN1cml0eUdyb3VwSWRzXG4gIH1cblxuICAvLyB2cGNfc3VibmV0X2lkcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF92cGNTdWJuZXRJZHM6IHN0cmluZ1tdO1xuICBwdWJsaWMgZ2V0IHZwY1N1Ym5ldElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd2cGNfc3VibmV0X2lkcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdnBjU3VibmV0SWRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3ZwY1N1Ym5ldElkcyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2cGNTdWJuZXRJZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdnBjU3VibmV0SWRzXG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRiX3Byb3h5X2VuZHBvaW50X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RiUHJveHlFbmRwb2ludE5hbWUpLFxuICAgICAgZGJfcHJveHlfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGJQcm94eU5hbWUpLFxuICAgICAgdGFnczogY2RrdGYubGlzdE1hcHBlcihyZHNEYlByb3h5RW5kcG9pbnRUYWdzVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFyZ2V0X3JvbGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3RhcmdldFJvbGUpLFxuICAgICAgdnBjX3NlY3VyaXR5X2dyb3VwX2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdnBjU2VjdXJpdHlHcm91cElkcyksXG4gICAgICB2cGNfc3VibmV0X2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdnBjU3VibmV0SWRzKSxcbiAgICB9O1xuICB9XG59XG4iXX0=