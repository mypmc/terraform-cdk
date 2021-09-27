"use strict";
// https://www.terraform.io/docs/providers/awscc/r/timestream_table.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimestreamTable = exports.timestreamTableTagsToTerraform = exports.timestreamTableRetentionPropertiesToTerraform = void 0;
const cdktf = require("cdktf");
function timestreamTableRetentionPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        magnetic_store_retention_period_in_days: cdktf.stringToTerraform(struct.magneticStoreRetentionPeriodInDays),
        memory_store_retention_period_in_hours: cdktf.stringToTerraform(struct.memoryStoreRetentionPeriodInHours),
    };
}
exports.timestreamTableRetentionPropertiesToTerraform = timestreamTableRetentionPropertiesToTerraform;
function timestreamTableTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.timestreamTableTagsToTerraform = timestreamTableTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/timestream_table.html awscc_timestream_table}
*/
class TimestreamTable extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/timestream_table.html awscc_timestream_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TimestreamTableConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_timestream_table',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._databaseName = config.databaseName;
        this._retentionProperties = config.retentionProperties;
        this._tableName = config.tableName;
        this._tags = config.tags;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get databaseName() {
        return this.getStringAttribute('database_name');
    }
    set databaseName(value) {
        this._databaseName = value;
    }
    // Temporarily expose input value. Use with caution.
    get databaseNameInput() {
        return this._databaseName;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    get retentionProperties() {
        return this.interpolationForAttribute('retention_properties');
    }
    set retentionProperties(value) {
        this._retentionProperties = value;
    }
    resetRetentionProperties() {
        this._retentionProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get retentionPropertiesInput() {
        return this._retentionProperties;
    }
    get tableName() {
        return this.getStringAttribute('table_name');
    }
    set tableName(value) {
        this._tableName = value;
    }
    resetTableName() {
        this._tableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tableNameInput() {
        return this._tableName;
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
            database_name: cdktf.stringToTerraform(this._databaseName),
            retention_properties: timestreamTableRetentionPropertiesToTerraform(this._retentionProperties),
            table_name: cdktf.stringToTerraform(this._tableName),
            tags: cdktf.listMapper(timestreamTableTagsToTerraform)(this._tags),
        };
    }
}
exports.TimestreamTable = TimestreamTable;
// =================
// STATIC PROPERTIES
// =================
TimestreamTable.tfResourceType = "awscc_timestream_table";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXN0cmVhbS10YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbWVzdHJlYW0tdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdFQUF3RTtBQUN4RSwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUE2Qy9CLFNBQWdCLDZDQUE2QyxDQUFDLE1BQTJDO0lBQ3ZHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsdUNBQXVDLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxrQ0FBa0MsQ0FBQztRQUM1RyxzQ0FBc0MsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGlDQUFpQyxDQUFDO0tBQzNHLENBQUE7QUFDSCxDQUFDO0FBTkQsc0dBTUM7QUFhRCxTQUFnQiw4QkFBOEIsQ0FBQyxNQUE0QjtJQUN6RSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFORCx3RUFNQztBQUdEOztFQUVFO0FBQ0YsTUFBYSxlQUFnQixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPMUQsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBNkI7UUFDNUUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSx3QkFBd0I7WUFDL0MsMEJBQTBCLEVB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QUFJLENBQUMsYUFBYSxDQUFDO1lBQzFELG9CQUFvQixFQUFFLDZDQUE2QyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUM5RixVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDcEQsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsOEJBQThCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25FLENBQUM7SUFDSixDQUFDOztBQTlISCwwQ0ErSEM7QUE3SEMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyw4QkFBYyxHQUFXLHdCQUF3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvdGltZXN0cmVhbV90YWJsZS5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgVGltZXN0cmVhbVRhYmxlQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIFRoZSBuYW1lIGZvciB0aGUgZGF0YWJhc2Ugd2hpY2ggdGhlIHRhYmxlIHRvIGJlIGNyZWF0ZWQgYmVsb25ncyB0by5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3RpbWVzdHJlYW1fdGFibGUuaHRtbCNkYXRhYmFzZV9uYW1lIFRpbWVzdHJlYW1UYWJsZSNkYXRhYmFzZV9uYW1lfVxuICAqL1xuICByZWFkb25seSBkYXRhYmFzZU5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogVGhlIHJldGVudGlvbiBkdXJhdGlvbiBvZiB0aGUgbWVtb3J5IHN0b3JlIGFuZCB0aGUgbWFnbmV0aWMgc3RvcmUuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci90aW1lc3RyZWFtX3RhYmxlLmh0bWwjcmV0ZW50aW9uX3Byb3BlcnRpZXMgVGltZXN0cmVhbVRhYmxlI3JldGVudGlvbl9wcm9wZXJ0aWVzfVxuICAqL1xuICByZWFkb25seSByZXRlbnRpb25Qcm9wZXJ0aWVzPzogVGltZXN0cmVhbVRhYmxlUmV0ZW50aW9uUHJvcGVydGllcztcbiAgLyoqXG4gICogVGhlIG5hbWUgZm9yIHRoZSB0YWJsZS4gSWYgeW91IGRvbid0IHNwZWNpZnkgYSBuYW1lLCBBV1MgQ2xvdWRGb3JtYXRpb24gZ2VuZXJhdGVzIGEgdW5pcXVlIHBoeXNpY2FsIElEIGFuZCB1c2VzIHRoYXQgSUQgZm9yIHRoZSB0YWJsZSBuYW1lLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvdGltZXN0cmVhbV90YWJsZS5odG1sI3RhYmxlX25hbWUgVGltZXN0cmVhbVRhYmxlI3RhYmxlX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IHRhYmxlTmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogQW4gYXJyYXkgb2Yga2V5LXZhbHVlIHBhaXJzIHRvIGFwcGx5IHRvIHRoaXMgcmVzb3VyY2UuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci90aW1lc3RyZWFtX3RhYmxlLmh0bWwjdGFncyBUaW1lc3RyZWFtVGFibGUjdGFnc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFncz86IFRpbWVzdHJlYW1UYWJsZVRhZ3NbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVGltZXN0cmVhbVRhYmxlUmV0ZW50aW9uUHJvcGVydGllcyB7XG4gIC8qKlxuICAqIFRoZSBkdXJhdGlvbiBmb3Igd2hpY2ggZGF0YSBtdXN0IGJlIHN0b3JlZCBpbiB0aGUgbWFnbmV0aWMgc3RvcmUuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci90aW1lc3RyZWFtX3RhYmxlLmh0bWwjbWFnbmV0aWNfc3RvcmVfcmV0ZW50aW9uX3BlcmlvZF9pbl9kYXlzIFRpbWVzdHJlYW1UYWJsZSNtYWduZXRpY19zdG9yZV9yZXRlbnRpb25fcGVyaW9kX2luX2RheXN9XG4gICovXG4gIHJlYWRvbmx5IG1hZ25ldGljU3RvcmVSZXRlbnRpb25QZXJpb2RJbkRheXM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFRoZSBkdXJhdGlvbiBmb3Igd2hpY2ggZGF0YSBtdXN0IGJlIHN0b3JlZCBpbiB0aGUgbWVtb3J5IHN0b3JlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvdGltZXN0cmVhbV90YWJsZS5odG1sI21lbW9yeV9zdG9yZV9yZXRlbnRpb25fcGVyaW9kX2luX2hvdXJzIFRpbWVzdHJlYW1UYWJsZSNtZW1vcnlfc3RvcmVfcmV0ZW50aW9uX3BlcmlvZF9pbl9ob3Vyc31cbiAgKi9cbiAgcmVhZG9ubHkgbWVtb3J5U3RvcmVSZXRlbnRpb25QZXJpb2RJbkhvdXJzPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGltZXN0cmVhbVRhYmxlUmV0ZW50aW9uUHJvcGVydGllc1RvVGVycmFmb3JtKHN0cnVjdD86IFRpbWVzdHJlYW1UYWJsZVJldGVudGlvblByb3BlcnRpZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbWFnbmV0aWNfc3RvcmVfcmV0ZW50aW9uX3BlcmlvZF9pbl9kYXlzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hZ25ldGljU3RvcmVSZXRlbnRpb25QZXJpb2RJbkRheXMpLFxuICAgIG1lbW9yeV9zdG9yZV9yZXRlbnRpb25fcGVyaW9kX2luX2hvdXJzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1lbW9yeVN0b3JlUmV0ZW50aW9uUGVyaW9kSW5Ib3VycyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaW1lc3RyZWFtVGFibGVUYWdzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci90aW1lc3RyZWFtX3RhYmxlLmh0bWwja2V5IFRpbWVzdHJlYW1UYWJsZSNrZXl9XG4gICovXG4gIHJlYWRvbmx5IGtleT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci90aW1lc3RyZWFtX3RhYmxlLmh0bWwjdmFsdWUgVGltZXN0cmVhbVRhYmxlI3ZhbHVlfVxuICAqL1xuICByZWFkb25seSB2YWx1ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVzdHJlYW1UYWJsZVRhZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBUaW1lc3RyZWFtVGFibGVUYWdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3RpbWVzdHJlYW1fdGFibGUuaHRtbCBhd3NjY190aW1lc3RyZWFtX3RhYmxlfVxuKi9cbmV4cG9ydCBjbGFzcyBUaW1lc3RyZWFtVGFibGUgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NjY190aW1lc3RyZWFtX3RhYmxlXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3RpbWVzdHJlYW1fdGFibGUuaHRtbCBhd3NjY190aW1lc3RyZWFtX3RhYmxlfSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBUaW1lc3RyZWFtVGFibGVDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogVGltZXN0cmVhbVRhYmxlQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NjY190aW1lc3RyZWFtX3RhYmxlJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fZGF0YWJhc2VOYW1lID0gY29uZmlnLmRhdGFiYXNlTmFtZTtcbiAgICB0aGlzLl9yZXRlbnRpb25Qcm9wZXJ0aWVzID0gY29uZmlnLnJldGVudGlvblByb3BlcnRpZXM7XG4gICAgdGhpcy5fdGFibGVOYW1lID0gY29uZmlnLnRhYmxlTmFtZTtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gZGF0YWJhc2VfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kYXRhYmFzZU5hbWU6IHN0cmluZztcbiAgcHVibGljIGdldCBkYXRhYmFzZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhYmFzZV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBkYXRhYmFzZU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RhdGFiYXNlTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXRhYmFzZU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YWJhc2VOYW1lXG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG5cbiAgLy8gcmV0ZW50aW9uX3Byb3BlcnRpZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmV0ZW50aW9uUHJvcGVydGllcz86IFRpbWVzdHJlYW1UYWJsZVJldGVudGlvblByb3BlcnRpZXM7XG4gIHB1YmxpYyBnZXQgcmV0ZW50aW9uUHJvcGVydGllcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXRlbnRpb25fcHJvcGVydGllcycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHJldGVudGlvblByb3BlcnRpZXModmFsdWU6IFRpbWVzdHJlYW1UYWJsZVJldGVudGlvblByb3BlcnRpZXMgKSB7XG4gICAgdGhpcy5fcmV0ZW50aW9uUHJvcGVydGllcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJldGVudGlvblByb3BlcnRpZXMoKSB7XG4gICAgdGhpcy5fcmV0ZW50aW9uUHJvcGVydGllcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmV0ZW50aW9uUHJvcGVydGllc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXRlbnRpb25Qcm9wZXJ0aWVzXG4gIH1cblxuICAvLyB0YWJsZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFibGVOYW1lPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHRhYmxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RhYmxlX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhYmxlTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGFibGVOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFibGVOYW1lKCkge1xuICAgIHRoaXMuX3RhYmxlTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFibGVOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYmxlTmFtZVxuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogVGltZXN0cmVhbVRhYmxlVGFnc1tdO1xuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IFRpbWVzdHJlYW1UYWJsZVRhZ3NbXSApIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YWJhc2VfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGF0YWJhc2VOYW1lKSxcbiAgICAgIHJldGVudGlvbl9wcm9wZXJ0aWVzOiB0aW1lc3RyZWFtVGFibGVSZXRlbnRpb25Qcm9wZXJ0aWVzVG9UZXJyYWZvcm0odGhpcy5fcmV0ZW50aW9uUHJvcGVydGllcyksXG4gICAgICB0YWJsZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90YWJsZU5hbWUpLFxuICAgICAgdGFnczogY2RrdGYubGlzdE1hcHBlcih0aW1lc3RyZWFtVGFibGVUYWdzVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==