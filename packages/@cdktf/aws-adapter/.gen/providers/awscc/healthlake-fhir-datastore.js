"use strict";
// https://www.terraform.io/docs/providers/awscc/r/healthlake_fhir_datastore.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthlakeFhirDatastore = exports.healthlakeFhirDatastoreTagsToTerraform = exports.healthlakeFhirDatastoreSseConfigurationToTerraform = exports.healthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigToTerraform = exports.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig = exports.healthlakeFhirDatastorePreloadDataConfigToTerraform = exports.healthlakeFhirDatastoreCreatedAtToTerraform = exports.HealthlakeFhirDatastoreCreatedAt = void 0;
const cdktf = require("cdktf");
class HealthlakeFhirDatastoreCreatedAt extends cdktf.ComplexComputedList {
    // nanos - computed: true, optional: false, required: true
    get nanos() {
        return this.getNumberAttribute('nanos');
    }
    // seconds - computed: true, optional: false, required: true
    get seconds() {
        return this.getStringAttribute('seconds');
    }
}
exports.HealthlakeFhirDatastoreCreatedAt = HealthlakeFhirDatastoreCreatedAt;
function healthlakeFhirDatastoreCreatedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        nanos: cdktf.numberToTerraform(struct.nanos),
        seconds: cdktf.stringToTerraform(struct.seconds),
    };
}
exports.healthlakeFhirDatastoreCreatedAtToTerraform = healthlakeFhirDatastoreCreatedAtToTerraform;
function healthlakeFhirDatastorePreloadDataConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        preload_data_type: cdktf.stringToTerraform(struct.preloadDataType),
    };
}
exports.healthlakeFhirDatastorePreloadDataConfigToTerraform = healthlakeFhirDatastorePreloadDataConfigToTerraform;
class HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {
    // cmk_type - computed: true, optional: false, required: true
    get cmkType() {
        return this.getStringAttribute('cmk_type');
    }
    get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    set kmsKeyId(value) {
        this._kmsKeyId = value;
    }
    resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kmsKeyIdInput() {
        return this._kmsKeyId;
    }
}
exports.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig = HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig;
function healthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cmk_type: cdktf.stringToTerraform(struct.cmkType),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
    };
}
exports.healthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigToTerraform = healthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigToTerraform;
function healthlakeFhirDatastoreSseConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_encryption_config: healthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigToTerraform(struct.kmsEncryptionConfig),
    };
}
exports.healthlakeFhirDatastoreSseConfigurationToTerraform = healthlakeFhirDatastoreSseConfigurationToTerraform;
function healthlakeFhirDatastoreTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.healthlakeFhirDatastoreTagsToTerraform = healthlakeFhirDatastoreTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/healthlake_fhir_datastore.html awscc_healthlake_fhir_datastore}
*/
class HealthlakeFhirDatastore extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/healthlake_fhir_datastore.html awscc_healthlake_fhir_datastore} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options HealthlakeFhirDatastoreConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_healthlake_fhir_datastore',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._datastoreName = config.datastoreName;
        this._datastoreTypeVersion = config.datastoreTypeVersion;
        this._preloadDataConfig = config.preloadDataConfig;
        this._sseConfiguration = config.sseConfiguration;
        this._tags = config.tags;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.interpolationForAttribute('created_at');
    }
    // datastore_arn - computed: true, optional: false, required: false
    get datastoreArn() {
        return this.getStringAttribute('datastore_arn');
    }
    // datastore_endpoint - computed: true, optional: false, required: false
    get datastoreEndpoint() {
        return this.getStringAttribute('datastore_endpoint');
    }
    // datastore_id - computed: true, optional: false, required: false
    get datastoreId() {
        return this.getStringAttribute('datastore_id');
    }
    get datastoreName() {
        return this.getStringAttribute('datastore_name');
    }
    set datastoreName(value) {
        this._datastoreName = value;
    }
    resetDatastoreName() {
        this._datastoreName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get datastoreNameInput() {
        return this._datastoreName;
    }
    // datastore_status - computed: true, optional: false, required: false
    get datastoreStatus() {
        return this.getStringAttribute('datastore_status');
    }
    get datastoreTypeVersion() {
        return this.getStringAttribute('datastore_type_version');
    }
    set datastoreTypeVersion(value) {
        this._datastoreTypeVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    get datastoreTypeVersionInput() {
        return this._datastoreTypeVersion;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get preloadDataConfig() {
        return this.interpolationForAttribute('preload_data_config');
    }
    set preloadDataConfig(value) {
        this._preloadDataConfig = value;
    }
    resetPreloadDataConfig() {
        this._preloadDataConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get preloadDataConfigInput() {
        return this._preloadDataConfig;
    }
    get sseConfiguration() {
        return this.interpolationForAttribute('sse_configuration');
    }
    set sseConfiguration(value) {
        this._sseConfiguration = value;
    }
    resetSseConfiguration() {
        this._sseConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sseConfigurationInput() {
        return this._sseConfiguration;
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
            datastore_name: cdktf.stringToTerraform(this._datastoreName),
            datastore_type_version: cdktf.stringToTerraform(this._datastoreTypeVersion),
            preload_data_config: healthlakeFhirDatastorePreloadDataConfigToTerraform(this._preloadDataConfig),
            sse_configuration: healthlakeFhirDatastoreSseConfigurationToTerraform(this._sseConfiguration),
            tags: cdktf.listMapper(healthlakeFhirDatastoreTagsToTerraform)(this._tags),
        };
    }
}
exports.HealthlakeFhirDatastore = HealthlakeFhirDatastore;
// =================
// STATIC PROPERTIES
// =================
HealthlakeFhirDatastore.tfResourceType = "awscc_healthlake_fhir_datastore";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhbHRobGFrZS1maGlyLWRhdGFzdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlYWx0aGxha2UtZmhpci1kYXRhc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlGQUFpRjtBQUNqRiwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUFrQy9CLE1BQWEsZ0NBQWlDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUU3RSwwREFBMEQ7SUFDMUQsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELDREQUE0RDtJQUM1RCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGO0FBWEQsNEVBV0M7QUFFRCxTQUFnQiwyQ0FBMkMsQ0FBQyxNQUF5QztJQUNuRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztRQUM3QyxPQUFPLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7S0FDbEQsQ0FBQTtBQUNILENBQUM7QUFORCxrR0FNQztBQVdELFNBQWdCLG1EQUFtRCxDQUFDLE1BQWlEO0lBQ25ILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxlQUFlLENBQUM7S0FDcEUsQ0FBQTtBQUNILENBQUM7QUFMRCxrSEFLQztBQUVELE1BQWEsMERBQTJELFNBQVEsS0FB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LG9EQUFvRDtJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ25CLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUM1RCxzQkFBc0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1lBQzNFLG1CQUFtQixFQUFFLG1EQUFtRCxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUNqRyxpQkFBaUIsRUFBRSxrREFBa0QsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDN0YsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzNFLENBQUM7SUFDSixDQUFDOztBQS9KSCwwREFnS0M7QUE5SkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyxzQ0FBYyxHQUFXLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvaGVhbHRobGFrZV9maGlyX2RhdGFzdG9yZS5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVhbHRobGFrZUZoaXJEYXRhc3RvcmVDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogVGhlIHVzZXItZ2VuZXJhdGVkIG5hbWUgZm9yIHRoZSBEYXRhIFN0b3JlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvaGVhbHRobGFrZV9maGlyX2RhdGFzdG9yZS5odG1sI2RhdGFzdG9yZV9uYW1lIEhlYWx0aGxha2VGaGlyRGF0YXN0b3JlI2RhdGFzdG9yZV9uYW1lfVxuICAqL1xuICByZWFkb25seSBkYXRhc3RvcmVOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgRkhJUiB2ZXJzaW9uLiBPbmx5IFI0IHZlcnNpb24gZGF0YSBpcyBzdXBwb3J0ZWQuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9oZWFsdGhsYWtlX2ZoaXJfZGF0YXN0b3JlLmh0bWwjZGF0YXN0b3JlX3R5cGVfdmVyc2lvbiBIZWFsdGhsYWtlRmhpckRhdGFzdG9yZSNkYXRhc3RvcmVfdHlwZV92ZXJzaW9ufVxuICAqL1xuICByZWFkb25seSBkYXRhc3RvcmVUeXBlVmVyc2lvbjogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgcHJlbG9hZGVkIGRhdGEgY29uZmlndXJhdGlvbiBmb3IgdGhlIERhdGEgU3RvcmUuIE9ubHkgZGF0YSBwcmVsb2FkZWQgZnJvbSBTeW50aGVhIGlzIHN1cHBvcnRlZC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2hlYWx0aGxha2VfZmhpcl9kYXRhc3RvcmUuaHRtbCNwcmVsb2FkX2RhdGFfY29uZmlnIEhlYWx0aGxha2VGaGlyRGF0YXN0b3JlI3ByZWxvYWRfZGF0YV9jb25maWd9XG4gICovXG4gIHJlYWRvbmx5IHByZWxvYWREYXRhQ29uZmlnPzogSGVhbHRobGFrZUZoaXJEYXRhc3RvcmVQcmVsb2FkRGF0YUNvbmZpZztcbiAgLyoqXG4gICogVGhlIHNlcnZlci1zaWRlIGVuY3J5cHRpb24ga2V5IGNvbmZpZ3VyYXRpb24gZm9yIGEgY3VzdG9tZXIgcHJvdmlkZWQgZW5jcnlwdGlvbiBrZXkuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9oZWFsdGhsYWtlX2ZoaXJfZGF0YXN0b3JlLmh0bWwjc3NlX2NvbmZpZ3VyYXRpb24gSGVhbHRobGFrZUZoaXJEYXRhc3RvcmUjc3NlX2NvbmZpZ3VyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IHNzZUNvbmZpZ3VyYXRpb24/OiBIZWFsdGhsYWtlRmhpckRhdGFzdG9yZVNzZUNvbmZpZ3VyYXRpb247XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvaGVhbHRobGFrZV9maGlyX2RhdGFzdG9yZS5odG1sI3RhZ3MgSGVhbHRobGFrZUZoaXJEYXRhc3RvcmUjdGFnc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFncz86IEhlYWx0aGxha2VGaGlyRGF0YXN0b3JlVGFnc1tdO1xufVxuZXhwb3J0IGNsYXNzIEhlYWx0aGxha2VGaGlyRGF0YXN0b3JlQ3JlYXRlZEF0IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbmFub3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwdWJsaWMgZ2V0IG5hbm9zKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbmFub3MnKTtcbiAgfVxuXG4gIC8vIHNlY29uZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwdWJsaWMgZ2V0IHNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZWNvbmRzJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhlYWx0aGxha2VGaGlyRGF0YXN0b3JlQ3JlYXRlZEF0VG9UZXJyYWZvcm0oc3RydWN0PzogSGVhbHRobGFrZUZoaXJEYXRhc3RvcmVDcmVhdGVkQXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbmFub3M6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubmFub3MpLFxuICAgIHNlY29uZHM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2Vjb25kcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBIZWFsdGhsYWtlRmhpckRhdGFzdG9yZVByZWxvYWREYXRhQ29uZmlnIHtcbiAgLyoqXG4gICogVGhlIHR5cGUgb2YgcHJlbG9hZGVkIGRhdGEuIE9ubHkgU3ludGhlYSBwcmVsb2FkZWQgZGF0YSBpcyBzdXBwb3J0ZWQuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9oZWFsdGhsYWtlX2ZoaXJfZGF0YXN0b3JlLmh0bWwjcHJlbG9hZF9kYXRhX3R5cGUgSGVhbHRobGFrZUZoaXJEYXRhc3RvcmUjcHJlbG9hZF9kYXRhX3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IHByZWxvYWREYXRhVHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGVhbHRobGFrZUZoaXJEYXRhc3RvcmVQcmVsb2FkRGF0YUNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IEhlYWx0aGxha2VGaGlyRGF0YXN0b3JlUHJlbG9hZERhdGFDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcHJlbG9hZF9kYXRhX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJlbG9hZERhdGFUeXBlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSGVhbHRobGFrZUZoaXJEYXRhc3RvcmVTc2VDb25maWd1cmF0aW9uS21zRW5jcnlwdGlvbkNvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNta190eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHVibGljIGdldCBjbWtUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY21rX3R5cGUnKTtcbiAgfVxuXG4gIC8vIGttc19rZXlfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rbXNLZXlJZD86IHN0cmluZztcbiAgcHVibGljIGdldCBrbXNLZXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19rZXlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGttc0tleUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rbXNLZXlJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEttc0tleUlkKCkge1xuICAgIHRoaXMuX2ttc0tleUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrbXNLZXlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rbXNLZXlJZFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFsdGhsYWtlRmhpckRhdGFzdG9yZVNzZUNvbmZpZ3VyYXRpb25LbXNFbmNyeXB0aW9uQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogSGVhbHRobGFrZUZoaXJEYXRhc3RvcmVTc2VDb25maWd1cmF0aW9uS21zRW5jcnlwdGlvbkNvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjbWtfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbWtUeXBlKSxcbiAgICBrbXNfa2V5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc0tleUlkKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhlYWx0aGxha2VGaGlyRGF0YXN0b3JlU3NlQ29uZmlndXJhdGlvbiB7XG4gIC8qKlxuICAqIFRoZSBjdXN0b21lci1tYW5hZ2VkLWtleSAoQ01LKSB1c2VkIHdoZW4gY3JlYXRpbmcgYSBEYXRhIFN0b3JlLiBJZiBhIGN1c3RvbWVyIG93bmVkIGtleSBpcyBub3Qgc3BlY2lmaWVkLCBhbiBBV1Mgb3duZWQga2V5IHdpbGwgYmUgdXNlZCBmb3IgZW5jcnlwdGlvbi5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2hlYWx0aGxha2VfZmhpcl9kYXRhc3RvcmUuaHRtbCNrbXNfZW5jcnlwdGlvbl9jb25maWcgSGVhbHRobGFrZUZoaXJEYXRhc3RvcmUja21zX2VuY3J5cHRpb25fY29uZmlnfVxuICAqL1xuICByZWFkb25seSBrbXNFbmNyeXB0aW9uQ29uZmlnOiBIZWFsdGhsYWtlRmhpckRhdGFzdG9yZVNzZUNvbmZpZ3VyYXRpb25LbXNFbmNyeXB0aW9uQ29uZmlnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGVhbHRobGFrZUZoaXJEYXRhc3RvcmVTc2VDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogSGVhbHRobGFrZUZoaXJEYXRhc3RvcmVTc2VDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGttc19lbmNyeXB0aW9uX2NvbmZpZzogaGVhbHRobGFrZUZoaXJEYXRhc3RvcmVTc2VDb25maWd1cmF0aW9uS21zRW5jcnlwdGlvbkNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdCEua21zRW5jcnlwdGlvbkNvbmZpZyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBIZWFsdGhsYWtlRmhpckRhdGFzdG9yZVRhZ3Mge1xuICAvKipcbiAgKiBUaGUga2V5IG9mIHRoZSB0YWcuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9oZWFsdGhsYWtlX2ZoaXJfZGF0YXN0b3JlLmh0bWwja2V5IEhlYWx0aGxha2VGaGlyRGF0YXN0b3JlI2tleX1cbiAgKi9cbiAgcmVhZG9ubHkga2V5OiBzdHJpbmc7XG4gIC8qKlxuICAqIFRoZSB2YWx1ZSBvZiB0aGUgdGFnLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvaGVhbHRobGFrZV9maGlyX2RhdGFzdG9yZS5odG1sI3ZhbHVlIEhlYWx0aGxha2VGaGlyRGF0YXN0b3JlI3ZhbHVlfVxuICAqL1xuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGVhbHRobGFrZUZoaXJEYXRhc3RvcmVUYWdzVG9UZXJyYWZvcm0oc3RydWN0PzogSGVhbHRobGFrZUZoaXJEYXRhc3RvcmVUYWdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2hlYWx0aGxha2VfZmhpcl9kYXRhc3RvcmUuaHRtbCBhd3NjY19oZWFsdGhsYWtlX2ZoaXJfZGF0YXN0b3JlfVxuKi9cbmV4cG9ydCBjbGFzcyBIZWFsdGhsYWtlRmhpckRhdGFzdG9yZSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX2hlYWx0aGxha2VfZmhpcl9kYXRhc3RvcmVcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvaGVhbHRobGFrZV9maGlyX2RhdGFzdG9yZS5odG1sIGF3c2NjX2hlYWx0aGxha2VfZmhpcl9kYXRhc3RvcmV9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIEhlYWx0aGxha2VGaGlyRGF0YXN0b3JlQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEhlYWx0aGxha2VGaGlyRGF0YXN0b3JlQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NjY19oZWFsdGhsYWtlX2ZoaXJfZGF0YXN0b3JlJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fZGF0YXN0b3JlTmFtZSA9IGNvbmZpZy5kYXRhc3RvcmVOYW1lO1xuICAgIHRoaXMuX2RhdGFzdG9yZVR5cGVWZXJzaW9uID0gY29uZmlnLmRhdGFzdG9yZVR5cGVWZXJzaW9uO1xuICAgIHRoaXMuX3ByZWxvYWREYXRhQ29uZmlnID0gY29uZmlnLnByZWxvYWREYXRhQ29uZmlnO1xuICAgIHRoaXMuX3NzZUNvbmZpZ3VyYXRpb24gPSBjb25maWcuc3NlQ29uZmlndXJhdGlvbjtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGNyZWF0ZWRfYXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjcmVhdGVkQXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY3JlYXRlZF9hdCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGRhdGFzdG9yZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhc3RvcmVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhc3RvcmVfYXJuJyk7XG4gIH1cblxuICAvLyBkYXRhc3RvcmVfZW5kcG9pbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhc3RvcmVFbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFzdG9yZV9lbmRwb2ludCcpO1xuICB9XG5cbiAgLy8gZGF0YXN0b3JlX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YXN0b3JlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhc3RvcmVfaWQnKTtcbiAgfVxuXG4gIC8vIGRhdGFzdG9yZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGF0YXN0b3JlTmFtZT86IHN0cmluZztcbiAgcHVibGljIGdldCBkYXRhc3RvcmVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YXN0b3JlX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRhdGFzdG9yZU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RhdGFzdG9yZU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREYXRhc3RvcmVOYW1lKCkge1xuICAgIHRoaXMuX2RhdGFzdG9yZU5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRhdGFzdG9yZU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YXN0b3JlTmFtZVxuICB9XG5cbiAgLy8gZGF0YXN0b3JlX3N0YXR1cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFzdG9yZVN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFzdG9yZV9zdGF0dXMnKTtcbiAgfVxuXG4gIC8vIGRhdGFzdG9yZV90eXBlX3ZlcnNpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGF0YXN0b3JlVHlwZVZlcnNpb246IHN0cmluZztcbiAgcHVibGljIGdldCBkYXRhc3RvcmVUeXBlVmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFzdG9yZV90eXBlX3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRhdGFzdG9yZVR5cGVWZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYXRhc3RvcmVUeXBlVmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXRhc3RvcmVUeXBlVmVyc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhc3RvcmVUeXBlVmVyc2lvblxuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBwcmVsb2FkX2RhdGFfY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJlbG9hZERhdGFDb25maWc/OiBIZWFsdGhsYWtlRmhpckRhdGFzdG9yZVByZWxvYWREYXRhQ29uZmlnO1xuICBwdWJsaWMgZ2V0IHByZWxvYWREYXRhQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ByZWxvYWRfZGF0YV9jb25maWcnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBwcmVsb2FkRGF0YUNvbmZpZyh2YWx1ZTogSGVhbHRobGFrZUZoaXJEYXRhc3RvcmVQcmVsb2FkRGF0YUNvbmZpZykge1xuICAgIHRoaXMuX3ByZWxvYWREYXRhQ29uZmlnID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJlbG9hZERhdGFDb25maWcoKSB7XG4gICAgdGhpcy5fcHJlbG9hZERhdGFDb25maWcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWxvYWREYXRhQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWxvYWREYXRhQ29uZmlnXG4gIH1cblxuICAvLyBzc2VfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NzZUNvbmZpZ3VyYXRpb24/OiBIZWFsdGhsYWtlRmhpckRhdGFzdG9yZVNzZUNvbmZpZ3VyYXRpb247XG4gIHB1YmxpYyBnZXQgc3NlQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzc2VfY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHNzZUNvbmZpZ3VyYXRpb24odmFsdWU6IEhlYWx0aGxha2VGaGlyRGF0YXN0b3JlU3NlQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX3NzZUNvbmZpZ3VyYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTc2VDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX3NzZUNvbmZpZ3VyYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNzZUNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3NlQ29uZmlndXJhdGlvblxuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogSGVhbHRobGFrZUZoaXJEYXRhc3RvcmVUYWdzW107XG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogSGVhbHRobGFrZUZoaXJEYXRhc3RvcmVUYWdzW10gKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzXG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGFzdG9yZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kYXRhc3RvcmVOYW1lKSxcbiAgICAgIGRhdGFzdG9yZV90eXBlX3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RhdGFzdG9yZVR5cGVWZXJzaW9uKSxcbiAgICAgIHByZWxvYWRfZGF0YV9jb25maWc6IGhlYWx0aGxha2VGaGlyRGF0YXN0b3JlUHJlbG9hZERhdGFDb25maWdUb1RlcnJhZm9ybSh0aGlzLl9wcmVsb2FkRGF0YUNvbmZpZyksXG4gICAgICBzc2VfY29uZmlndXJhdGlvbjogaGVhbHRobGFrZUZoaXJEYXRhc3RvcmVTc2VDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0odGhpcy5fc3NlQ29uZmlndXJhdGlvbiksXG4gICAgICB0YWdzOiBjZGt0Zi5saXN0TWFwcGVyKGhlYWx0aGxha2VGaGlyRGF0YXN0b3JlVGFnc1RvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICB9O1xuICB9XG59XG4iXX0=