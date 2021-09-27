"use strict";
// https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.SsmResourceDataSync = exports.ssmResourceDataSyncSyncSourceToTerraform = exports.ssmResourceDataSyncSyncSourceAwsOrganizationsSourceToTerraform = exports.ssmResourceDataSyncS3DestinationToTerraform = void 0;
const cdktf = require("cdktf");
function ssmResourceDataSyncS3DestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        bucket_prefix: cdktf.stringToTerraform(struct.bucketPrefix),
        bucket_region: cdktf.stringToTerraform(struct.bucketRegion),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
        sync_format: cdktf.stringToTerraform(struct.syncFormat),
    };
}
exports.ssmResourceDataSyncS3DestinationToTerraform = ssmResourceDataSyncS3DestinationToTerraform;
function ssmResourceDataSyncSyncSourceAwsOrganizationsSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        organization_source_type: cdktf.stringToTerraform(struct.organizationSourceType),
        organizational_units: cdktf.listMapper(cdktf.stringToTerraform)(struct.organizationalUnits),
    };
}
exports.ssmResourceDataSyncSyncSourceAwsOrganizationsSourceToTerraform = ssmResourceDataSyncSyncSourceAwsOrganizationsSourceToTerraform;
function ssmResourceDataSyncSyncSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        aws_organizations_source: ssmResourceDataSyncSyncSourceAwsOrganizationsSourceToTerraform(struct.awsOrganizationsSource),
        include_future_regions: cdktf.booleanToTerraform(struct.includeFutureRegions),
        source_regions: cdktf.listMapper(cdktf.stringToTerraform)(struct.sourceRegions),
        source_type: cdktf.stringToTerraform(struct.sourceType),
    };
}
exports.ssmResourceDataSyncSyncSourceToTerraform = ssmResourceDataSyncSyncSourceToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html awscc_ssm_resource_data_sync}
*/
class SsmResourceDataSync extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html awscc_ssm_resource_data_sync} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmResourceDataSyncConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_ssm_resource_data_sync',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._bucketName = config.bucketName;
        this._bucketPrefix = config.bucketPrefix;
        this._bucketRegion = config.bucketRegion;
        this._kmsKeyArn = config.kmsKeyArn;
        this._s3Destination = config.s3Destination;
        this._syncFormat = config.syncFormat;
        this._syncName = config.syncName;
        this._syncSource = config.syncSource;
        this._syncType = config.syncType;
    }
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    set bucketName(value) {
        this._bucketName = value;
    }
    resetBucketName() {
        this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bucketNameInput() {
        return this._bucketName;
    }
    get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    set bucketPrefix(value) {
        this._bucketPrefix = value;
    }
    resetBucketPrefix() {
        this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bucketPrefixInput() {
        return this._bucketPrefix;
    }
    get bucketRegion() {
        return this.getStringAttribute('bucket_region');
    }
    set bucketRegion(value) {
        this._bucketRegion = value;
    }
    resetBucketRegion() {
        this._bucketRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bucketRegionInput() {
        return this._bucketRegion;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    set kmsKeyArn(value) {
        this._kmsKeyArn = value;
    }
    resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }
    get s3Destination() {
        return this.interpolationForAttribute('s3_destination');
    }
    set s3Destination(value) {
        this._s3Destination = value;
    }
    resetS3Destination() {
        this._s3Destination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get s3DestinationInput() {
        return this._s3Destination;
    }
    get syncFormat() {
        return this.getStringAttribute('sync_format');
    }
    set syncFormat(value) {
        this._syncFormat = value;
    }
    resetSyncFormat() {
        this._syncFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get syncFormatInput() {
        return this._syncFormat;
    }
    get syncName() {
        return this.getStringAttribute('sync_name');
    }
    set syncName(value) {
        this._syncName = value;
    }
    // Temporarily expose input value. Use with caution.
    get syncNameInput() {
        return this._syncName;
    }
    get syncSource() {
        return this.interpolationForAttribute('sync_source');
    }
    set syncSource(value) {
        this._syncSource = value;
    }
    resetSyncSource() {
        this._syncSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get syncSourceInput() {
        return this._syncSource;
    }
    get syncType() {
        return this.getStringAttribute('sync_type');
    }
    set syncType(value) {
        this._syncType = value;
    }
    resetSyncType() {
        this._syncType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get syncTypeInput() {
        return this._syncType;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            bucket_name: cdktf.stringToTerraform(this._bucketName),
            bucket_prefix: cdktf.stringToTerraform(this._bucketPrefix),
            bucket_region: cdktf.stringToTerraform(this._bucketRegion),
            kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
            s3_destination: ssmResourceDataSyncS3DestinationToTerraform(this._s3Destination),
            sync_format: cdktf.stringToTerraform(this._syncFormat),
            sync_name: cdktf.stringToTerraform(this._syncName),
            sync_source: ssmResourceDataSyncSyncSourceToTerraform(this._syncSource),
            sync_type: cdktf.stringToTerraform(this._syncType),
        };
    }
}
exports.SsmResourceDataSync = SsmResourceDataSync;
// =================
// STATIC PROPERTIES
// =================
SsmResourceDataSync.tfResourceType = "awscc_ssm_resource_data_sync";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3NtLXJlc291cmNlLWRhdGEtc3luYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNzbS1yZXNvdXJjZS1kYXRhLXN5bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhFQUE4RTtBQUM5RSwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUFpRS9CLFNBQWdCLDJDQUEyQyxDQUFDLE1BQXlDO0lBQ25HLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3hELGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztRQUM1RCxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDNUQsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3ZELFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztLQUN6RCxDQUFBO0FBQ0gsQ0FBQztBQVRELGtHQVNDO0FBYUQsU0FBZ0IsOERBQThELENBQUMsTUFBNEQ7SUFDekksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCx3QkFBd0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQ2pGLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLG1CQUFtQixDQUFDO0tBQzdGLENBQUE7QUFDSCxDQUFDO0FBTkQsd0lB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SUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO0lBQ3ZCLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN0RCxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDMUQsYUFBYSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzFELFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNyRCxjQUFjLEVBQUUsMkNBQTJDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUNoRixXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDdEQsU0FBUyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2xELFdBQVcsRUFBRSx3Q0FBd0MsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3ZFLFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUNuRCxDQUFDO0lBQ0osQ0FBQzs7QUE5TUgsa0RBK01DO0FBN01DLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csa0NBQWMsR0FBVyw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3NzbV9yZXNvdXJjZV9kYXRhX3N5bmMuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIFNzbVJlc291cmNlRGF0YVN5bmNDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9zc21fcmVzb3VyY2VfZGF0YV9zeW5jLmh0bWwjYnVja2V0X25hbWUgU3NtUmVzb3VyY2VEYXRhU3luYyNidWNrZXRfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgYnVja2V0TmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9zc21fcmVzb3VyY2VfZGF0YV9zeW5jLmh0bWwjYnVja2V0X3ByZWZpeCBTc21SZXNvdXJjZURhdGFTeW5jI2J1Y2tldF9wcmVmaXh9XG4gICovXG4gIHJlYWRvbmx5IGJ1Y2tldFByZWZpeD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9zc21fcmVzb3VyY2VfZGF0YV9zeW5jLmh0bWwjYnVja2V0X3JlZ2lvbiBTc21SZXNvdXJjZURhdGFTeW5jI2J1Y2tldF9yZWdpb259XG4gICovXG4gIHJlYWRvbmx5IGJ1Y2tldFJlZ2lvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9zc21fcmVzb3VyY2VfZGF0YV9zeW5jLmh0bWwja21zX2tleV9hcm4gU3NtUmVzb3VyY2VEYXRhU3luYyNrbXNfa2V5X2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkga21zS2V5QXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3NzbV9yZXNvdXJjZV9kYXRhX3N5bmMuaHRtbCNzM19kZXN0aW5hdGlvbiBTc21SZXNvdXJjZURhdGFTeW5jI3MzX2Rlc3RpbmF0aW9ufVxuICAqL1xuICByZWFkb25seSBzM0Rlc3RpbmF0aW9uPzogU3NtUmVzb3VyY2VEYXRhU3luY1MzRGVzdGluYXRpb247XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivc3NtX3Jlc291cmNlX2RhdGFfc3luYy5odG1sI3N5bmNfZm9ybWF0IFNzbVJlc291cmNlRGF0YVN5bmMjc3luY19mb3JtYXR9XG4gICovXG4gIHJlYWRvbmx5IHN5bmNGb3JtYXQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivc3NtX3Jlc291cmNlX2RhdGFfc3luYy5odG1sI3N5bmNfbmFtZSBTc21SZXNvdXJjZURhdGFTeW5jI3N5bmNfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgc3luY05hbWU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9zc21fcmVzb3VyY2VfZGF0YV9zeW5jLmh0bWwjc3luY19zb3VyY2UgU3NtUmVzb3VyY2VEYXRhU3luYyNzeW5jX3NvdXJjZX1cbiAgKi9cbiAgcmVhZG9ubHkgc3luY1NvdXJjZT86IFNzbVJlc291cmNlRGF0YVN5bmNTeW5jU291cmNlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3NzbV9yZXNvdXJjZV9kYXRhX3N5bmMuaHRtbCNzeW5jX3R5cGUgU3NtUmVzb3VyY2VEYXRhU3luYyNzeW5jX3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IHN5bmNUeXBlPzogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBTc21SZXNvdXJjZURhdGFTeW5jUzNEZXN0aW5hdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivc3NtX3Jlc291cmNlX2RhdGFfc3luYy5odG1sI2J1Y2tldF9uYW1lIFNzbVJlc291cmNlRGF0YVN5bmMjYnVja2V0X25hbWV9XG4gICovXG4gIHJlYWRvbmx5IGJ1Y2tldE5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9zc21fcmVzb3VyY2VfZGF0YV9zeW5jLmh0bWwjYnVja2V0X3ByZWZpeCBTc21SZXNvdXJjZURhdGFTeW5jI2J1Y2tldF9wcmVmaXh9XG4gICovXG4gIHJlYWRvbmx5IGJ1Y2tldFByZWZpeD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9zc21fcmVzb3VyY2VfZGF0YV9zeW5jLmh0bWwjYnVja2V0X3JlZ2lvbiBTc21SZXNvdXJjZURhdGFTeW5jI2J1Y2tldF9yZWdpb259XG4gICovXG4gIHJlYWRvbmx5IGJ1Y2tldFJlZ2lvbjogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3NzbV9yZXNvdXJjZV9kYXRhX3N5bmMuaHRtbCNrbXNfa2V5X2FybiBTc21SZXNvdXJjZURhdGFTeW5jI2ttc19rZXlfYXJufVxuICAqL1xuICByZWFkb25seSBrbXNLZXlBcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivc3NtX3Jlc291cmNlX2RhdGFfc3luYy5odG1sI3N5bmNfZm9ybWF0IFNzbVJlc291cmNlRGF0YVN5bmMjc3luY19mb3JtYXR9XG4gICovXG4gIHJlYWRvbmx5IHN5bmNGb3JtYXQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNzbVJlc291cmNlRGF0YVN5bmNTM0Rlc3RpbmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogU3NtUmVzb3VyY2VEYXRhU3luY1MzRGVzdGluYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYnVja2V0X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0TmFtZSksXG4gICAgYnVja2V0X3ByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXRQcmVmaXgpLFxuICAgIGJ1Y2tldF9yZWdpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0UmVnaW9uKSxcbiAgICBrbXNfa2V5X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rbXNLZXlBcm4pLFxuICAgIHN5bmNfZm9ybWF0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN5bmNGb3JtYXQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3NtUmVzb3VyY2VEYXRhU3luY1N5bmNTb3VyY2VBd3NPcmdhbml6YXRpb25zU291cmNlIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9zc21fcmVzb3VyY2VfZGF0YV9zeW5jLmh0bWwjb3JnYW5pemF0aW9uX3NvdXJjZV90eXBlIFNzbVJlc291cmNlRGF0YVN5bmMjb3JnYW5pemF0aW9uX3NvdXJjZV90eXBlfVxuICAqL1xuICByZWFkb25seSBvcmdhbml6YXRpb25Tb3VyY2VUeXBlOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivc3NtX3Jlc291cmNlX2RhdGFfc3luYy5odG1sI29yZ2FuaXphdGlvbmFsX3VuaXRzIFNzbVJlc291cmNlRGF0YVN5bmMjb3JnYW5pemF0aW9uYWxfdW5pdHN9XG4gICovXG4gIHJlYWRvbmx5IG9yZ2FuaXphdGlvbmFsVW5pdHM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNzbVJlc291cmNlRGF0YVN5bmNTeW5jU291cmNlQXdzT3JnYW5pemF0aW9uc1NvdXJjZVRvVGVycmFmb3JtKHN0cnVjdD86IFNzbVJlc291cmNlRGF0YVN5bmNTeW5jU291cmNlQXdzT3JnYW5pemF0aW9uc1NvdXJjZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBvcmdhbml6YXRpb25fc291cmNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub3JnYW5pemF0aW9uU291cmNlVHlwZSksXG4gICAgb3JnYW5pemF0aW9uYWxfdW5pdHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEub3JnYW5pemF0aW9uYWxVbml0cyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTc21SZXNvdXJjZURhdGFTeW5jU3luY1NvdXJjZSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivc3NtX3Jlc291cmNlX2RhdGFfc3luYy5odG1sI2F3c19vcmdhbml6YXRpb25zX3NvdXJjZSBTc21SZXNvdXJjZURhdGFTeW5jI2F3c19vcmdhbml6YXRpb25zX3NvdXJjZX1cbiAgKi9cbiAgcmVhZG9ubHkgYXdzT3JnYW5pemF0aW9uc1NvdXJjZT86IFNzbVJlc291cmNlRGF0YVN5bmNTeW5jU291cmNlQXdzT3JnYW5pemF0aW9uc1NvdXJjZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9zc21fcmVzb3VyY2VfZGF0YV9zeW5jLmh0bWwjaW5jbHVkZV9mdXR1cmVfcmVnaW9ucyBTc21SZXNvdXJjZURhdGFTeW5jI2luY2x1ZGVfZnV0dXJlX3JlZ2lvbnN9XG4gICovXG4gIHJlYWRvbmx5IGluY2x1ZGVGdXR1cmVSZWdpb25zPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3NzbV9yZXNvdXJjZV9kYXRhX3N5bmMuaHRtbCNzb3VyY2VfcmVnaW9ucyBTc21SZXNvdXJjZURhdGFTeW5jI3NvdXJjZV9yZWdpb25zfVxuICAqL1xuICByZWFkb25seSBzb3VyY2VSZWdpb25zOiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9zc21fcmVzb3VyY2VfZGF0YV9zeW5jLmh0bWwjc291cmNlX3R5cGUgU3NtUmVzb3VyY2VEYXRhU3luYyNzb3VyY2VfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgc291cmNlVHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3NtUmVzb3VyY2VEYXRhU3luY1N5bmNTb3VyY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTc21SZXNvdXJjZURhdGFTeW5jU3luY1NvdXJjZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhd3Nfb3JnYW5pemF0aW9uc19zb3VyY2U6IHNzbVJlc291cmNlRGF0YVN5bmNTeW5jU291cmNlQXdzT3JnYW5pemF0aW9uc1NvdXJjZVRvVGVycmFmb3JtKHN0cnVjdCEuYXdzT3JnYW5pemF0aW9uc1NvdXJjZSksXG4gICAgaW5jbHVkZV9mdXR1cmVfcmVnaW9uczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaW5jbHVkZUZ1dHVyZVJlZ2lvbnMpLFxuICAgIHNvdXJjZV9yZWdpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNvdXJjZVJlZ2lvbnMpLFxuICAgIHNvdXJjZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNvdXJjZVR5cGUpLFxuICB9XG59XG5cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivc3NtX3Jlc291cmNlX2RhdGFfc3luYy5odG1sIGF3c2NjX3NzbV9yZXNvdXJjZV9kYXRhX3N5bmN9XG4qL1xuZXhwb3J0IGNsYXNzIFNzbVJlc291cmNlRGF0YVN5bmMgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NjY19zc21fcmVzb3VyY2VfZGF0YV9zeW5jXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3NzbV9yZXNvdXJjZV9kYXRhX3N5bmMuaHRtbCBhd3NjY19zc21fcmVzb3VyY2VfZGF0YV9zeW5jfSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBTc21SZXNvdXJjZURhdGFTeW5jQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFNzbVJlc291cmNlRGF0YVN5bmNDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c2NjX3NzbV9yZXNvdXJjZV9kYXRhX3N5bmMnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9idWNrZXROYW1lID0gY29uZmlnLmJ1Y2tldE5hbWU7XG4gICAgdGhpcy5fYnVja2V0UHJlZml4ID0gY29uZmlnLmJ1Y2tldFByZWZpeDtcbiAgICB0aGlzLl9idWNrZXRSZWdpb24gPSBjb25maWcuYnVja2V0UmVnaW9uO1xuICAgIHRoaXMuX2ttc0tleUFybiA9IGNvbmZpZy5rbXNLZXlBcm47XG4gICAgdGhpcy5fczNEZXN0aW5hdGlvbiA9IGNvbmZpZy5zM0Rlc3RpbmF0aW9uO1xuICAgIHRoaXMuX3N5bmNGb3JtYXQgPSBjb25maWcuc3luY0Zvcm1hdDtcbiAgICB0aGlzLl9zeW5jTmFtZSA9IGNvbmZpZy5zeW5jTmFtZTtcbiAgICB0aGlzLl9zeW5jU291cmNlID0gY29uZmlnLnN5bmNTb3VyY2U7XG4gICAgdGhpcy5fc3luY1R5cGUgPSBjb25maWcuc3luY1R5cGU7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGJ1Y2tldF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYnVja2V0TmFtZT86IHN0cmluZztcbiAgcHVibGljIGdldCBidWNrZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVja2V0X25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1Y2tldE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2J1Y2tldE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCdWNrZXROYW1lKCkge1xuICAgIHRoaXMuX2J1Y2tldE5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1Y2tldE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVja2V0TmFtZVxuICB9XG5cbiAgLy8gYnVja2V0X3ByZWZpeCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2J1Y2tldFByZWZpeD86IHN0cmluZztcbiAgcHVibGljIGdldCBidWNrZXRQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXRfcHJlZml4Jyk7XG4gIH1cbiAgcHVibGljIHNldCBidWNrZXRQcmVmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2J1Y2tldFByZWZpeCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJ1Y2tldFByZWZpeCgpIHtcbiAgICB0aGlzLl9idWNrZXRQcmVmaXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1Y2tldFByZWZpeElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWNrZXRQcmVmaXhcbiAgfVxuXG4gIC8vIGJ1Y2tldF9yZWdpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9idWNrZXRSZWdpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgYnVja2V0UmVnaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVja2V0X3JlZ2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnVja2V0UmVnaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9idWNrZXRSZWdpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCdWNrZXRSZWdpb24oKSB7XG4gICAgdGhpcy5fYnVja2V0UmVnaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBidWNrZXRSZWdpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVja2V0UmVnaW9uXG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGttc19rZXlfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa21zS2V5QXJuPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGttc0tleUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19rZXlfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBrbXNLZXlBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ttc0tleUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEttc0tleUFybigpIHtcbiAgICB0aGlzLl9rbXNLZXlBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGttc0tleUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rbXNLZXlBcm5cbiAgfVxuXG4gIC8vIHMzX2Rlc3RpbmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfczNEZXN0aW5hdGlvbj86IFNzbVJlc291cmNlRGF0YVN5bmNTM0Rlc3RpbmF0aW9uO1xuICBwdWJsaWMgZ2V0IHMzRGVzdGluYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnczNfZGVzdGluYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzM0Rlc3RpbmF0aW9uKHZhbHVlOiBTc21SZXNvdXJjZURhdGFTeW5jUzNEZXN0aW5hdGlvbikge1xuICAgIHRoaXMuX3MzRGVzdGluYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTM0Rlc3RpbmF0aW9uKCkge1xuICAgIHRoaXMuX3MzRGVzdGluYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHMzRGVzdGluYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fczNEZXN0aW5hdGlvblxuICB9XG5cbiAgLy8gc3luY19mb3JtYXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zeW5jRm9ybWF0Pzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHN5bmNGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzeW5jX2Zvcm1hdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3luY0Zvcm1hdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3luY0Zvcm1hdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN5bmNGb3JtYXQoKSB7XG4gICAgdGhpcy5fc3luY0Zvcm1hdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3luY0Zvcm1hdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zeW5jRm9ybWF0XG4gIH1cblxuICAvLyBzeW5jX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3luY05hbWU6IHN0cmluZztcbiAgcHVibGljIGdldCBzeW5jTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N5bmNfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3luY05hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N5bmNOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN5bmNOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N5bmNOYW1lXG4gIH1cblxuICAvLyBzeW5jX3NvdXJjZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zeW5jU291cmNlPzogU3NtUmVzb3VyY2VEYXRhU3luY1N5bmNTb3VyY2U7XG4gIHB1YmxpYyBnZXQgc3luY1NvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzeW5jX3NvdXJjZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHN5bmNTb3VyY2UodmFsdWU6IFNzbVJlc291cmNlRGF0YVN5bmNTeW5jU291cmNlICkge1xuICAgIHRoaXMuX3N5bmNTb3VyY2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTeW5jU291cmNlKCkge1xuICAgIHRoaXMuX3N5bmNTb3VyY2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN5bmNTb3VyY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3luY1NvdXJjZVxuICB9XG5cbiAgLy8gc3luY190eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3luY1R5cGU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgc3luY1R5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzeW5jX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN5bmNUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zeW5jVHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN5bmNUeXBlKCkge1xuICAgIHRoaXMuX3N5bmNUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzeW5jVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zeW5jVHlwZVxuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBidWNrZXRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYnVja2V0TmFtZSksXG4gICAgICBidWNrZXRfcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9idWNrZXRQcmVmaXgpLFxuICAgICAgYnVja2V0X3JlZ2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYnVja2V0UmVnaW9uKSxcbiAgICAgIGttc19rZXlfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9rbXNLZXlBcm4pLFxuICAgICAgczNfZGVzdGluYXRpb246IHNzbVJlc291cmNlRGF0YVN5bmNTM0Rlc3RpbmF0aW9uVG9UZXJyYWZvcm0odGhpcy5fczNEZXN0aW5hdGlvbiksXG4gICAgICBzeW5jX2Zvcm1hdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc3luY0Zvcm1hdCksXG4gICAgICBzeW5jX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3N5bmNOYW1lKSxcbiAgICAgIHN5bmNfc291cmNlOiBzc21SZXNvdXJjZURhdGFTeW5jU3luY1NvdXJjZVRvVGVycmFmb3JtKHRoaXMuX3N5bmNTb3VyY2UpLFxuICAgICAgc3luY190eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zeW5jVHlwZSksXG4gICAgfTtcbiAgfVxufVxuIl19