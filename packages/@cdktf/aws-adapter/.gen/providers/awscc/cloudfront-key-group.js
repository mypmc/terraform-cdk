"use strict";
// https://www.terraform.io/docs/providers/awscc/r/cloudfront_key_group.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudfrontKeyGroup = exports.cloudfrontKeyGroupKeyGroupConfigToTerraform = void 0;
const cdktf = require("cdktf");
function cloudfrontKeyGroupKeyGroupConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comment: cdktf.stringToTerraform(struct.comment),
        items: cdktf.listMapper(cdktf.stringToTerraform)(struct.items),
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.cloudfrontKeyGroupKeyGroupConfigToTerraform = cloudfrontKeyGroupKeyGroupConfigToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_key_group.html awscc_cloudfront_key_group}
*/
class CloudfrontKeyGroup extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_key_group.html awscc_cloudfront_key_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontKeyGroupConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudfront_key_group',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._keyGroupConfig = config.keyGroupConfig;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get keyGroupConfig() {
        return this.interpolationForAttribute('key_group_config');
    }
    set keyGroupConfig(value) {
        this._keyGroupConfig = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyGroupConfigInput() {
        return this._keyGroupConfig;
    }
    // last_modified_time - computed: true, optional: false, required: false
    get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            key_group_config: cloudfrontKeyGroupKeyGroupConfigToTerraform(this._keyGroupConfig),
        };
    }
}
exports.CloudfrontKeyGroup = CloudfrontKeyGroup;
// =================
// STATIC PROPERTIES
// =================
CloudfrontKeyGroup.tfResourceType = "awscc_cloudfront_key_group";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRmcm9udC1rZXktZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbG91ZGZyb250LWtleS1ncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEVBQTRFO0FBQzVFLDJDQUEyQzs7O0FBRzNDLCtCQUErQjtBQXlCL0IsU0FBZ0IsMkNBQTJDLENBQUMsTUFBeUM7SUFDbkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDakQsS0FBSyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztRQUMvRCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7S0FDNUMsQ0FBQTtBQUNILENBQUM7QUFQRCxrR0FPQztBQUdEOztFQUVFO0FBQ0YsTUFBYSxrQkFBbUIsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBTzdELGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQWdDO1FBQy9FLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsNEJBQTRCO1lBQ25ELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsT0FBTzthQUN0QjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDL0MsQ0FBQztJQUVELGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUViLHdEQUF3RDtJQUN4RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBSUQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGtCQUFrQixDQUFRLENBQUM7SUFDbkUsQ0FBQztJQUNELElBQVcsY0FBYyxDQUFDLEtBQXVDO1FBQy9ELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFBO0lBQzdCLENBQUM7SUFFRCx3RUFBd0U7SUFDeEUsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxnQkFBZ0IsRUFBRSwyQ0FBMkMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQ3BGLENBQUM7SUFDSixDQUFDOztBQW5FSCxnREFvRUM7QUFsRUMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyxpQ0FBYyxHQUFXLDRCQUE0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvY2xvdWRmcm9udF9rZXlfZ3JvdXAuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnRLZXlHcm91cENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Nsb3VkZnJvbnRfa2V5X2dyb3VwLmh0bWwja2V5X2dyb3VwX2NvbmZpZyBDbG91ZGZyb250S2V5R3JvdXAja2V5X2dyb3VwX2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkga2V5R3JvdXBDb25maWc6IENsb3VkZnJvbnRLZXlHcm91cEtleUdyb3VwQ29uZmlnO1xufVxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250S2V5R3JvdXBLZXlHcm91cENvbmZpZyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvY2xvdWRmcm9udF9rZXlfZ3JvdXAuaHRtbCNjb21tZW50IENsb3VkZnJvbnRLZXlHcm91cCNjb21tZW50fVxuICAqL1xuICByZWFkb25seSBjb21tZW50Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Nsb3VkZnJvbnRfa2V5X2dyb3VwLmh0bWwjaXRlbXMgQ2xvdWRmcm9udEtleUdyb3VwI2l0ZW1zfVxuICAqL1xuICByZWFkb25seSBpdGVtczogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvY2xvdWRmcm9udF9rZXlfZ3JvdXAuaHRtbCNuYW1lIENsb3VkZnJvbnRLZXlHcm91cCNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250S2V5R3JvdXBLZXlHcm91cENvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRLZXlHcm91cEtleUdyb3VwQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbW1lbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tbWVudCksXG4gICAgaXRlbXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuaXRlbXMpLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9jbG91ZGZyb250X2tleV9ncm91cC5odG1sIGF3c2NjX2Nsb3VkZnJvbnRfa2V5X2dyb3VwfVxuKi9cbmV4cG9ydCBjbGFzcyBDbG91ZGZyb250S2V5R3JvdXAgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NjY19jbG91ZGZyb250X2tleV9ncm91cFwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9jbG91ZGZyb250X2tleV9ncm91cC5odG1sIGF3c2NjX2Nsb3VkZnJvbnRfa2V5X2dyb3VwfSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBDbG91ZGZyb250S2V5R3JvdXBDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQ2xvdWRmcm9udEtleUdyb3VwQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NjY19jbG91ZGZyb250X2tleV9ncm91cCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3NjYydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2tleUdyb3VwQ29uZmlnID0gY29uZmlnLmtleUdyb3VwQ29uZmlnO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGtleV9ncm91cF9jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfa2V5R3JvdXBDb25maWc6IENsb3VkZnJvbnRLZXlHcm91cEtleUdyb3VwQ29uZmlnO1xuICBwdWJsaWMgZ2V0IGtleUdyb3VwQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2tleV9ncm91cF9jb25maWcnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBrZXlHcm91cENvbmZpZyh2YWx1ZTogQ2xvdWRmcm9udEtleUdyb3VwS2V5R3JvdXBDb25maWcpIHtcbiAgICB0aGlzLl9rZXlHcm91cENvbmZpZyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrZXlHcm91cENvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rZXlHcm91cENvbmZpZ1xuICB9XG5cbiAgLy8gbGFzdF9tb2RpZmllZF90aW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbGFzdE1vZGlmaWVkVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhc3RfbW9kaWZpZWRfdGltZScpO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBrZXlfZ3JvdXBfY29uZmlnOiBjbG91ZGZyb250S2V5R3JvdXBLZXlHcm91cENvbmZpZ1RvVGVycmFmb3JtKHRoaXMuX2tleUdyb3VwQ29uZmlnKSxcbiAgICB9O1xuICB9XG59XG4iXX0=