"use strict";
// https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroundstationMissionProfile = exports.groundstationMissionProfileTagsToTerraform = exports.groundstationMissionProfileDataflowEdgesToTerraform = void 0;
const cdktf = require("cdktf");
function groundstationMissionProfileDataflowEdgesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        destination: cdktf.stringToTerraform(struct.destination),
        source: cdktf.stringToTerraform(struct.source),
    };
}
exports.groundstationMissionProfileDataflowEdgesToTerraform = groundstationMissionProfileDataflowEdgesToTerraform;
function groundstationMissionProfileTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.groundstationMissionProfileTagsToTerraform = groundstationMissionProfileTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html awscc_groundstation_mission_profile}
*/
class GroundstationMissionProfile extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html awscc_groundstation_mission_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GroundstationMissionProfileConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_groundstation_mission_profile',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._contactPostPassDurationSeconds = config.contactPostPassDurationSeconds;
        this._contactPrePassDurationSeconds = config.contactPrePassDurationSeconds;
        this._dataflowEdges = config.dataflowEdges;
        this._minimumViableContactDurationSeconds = config.minimumViableContactDurationSeconds;
        this._name = config.name;
        this._tags = config.tags;
        this._trackingConfigArn = config.trackingConfigArn;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get contactPostPassDurationSeconds() {
        return this.getNumberAttribute('contact_post_pass_duration_seconds');
    }
    set contactPostPassDurationSeconds(value) {
        this._contactPostPassDurationSeconds = value;
    }
    resetContactPostPassDurationSeconds() {
        this._contactPostPassDurationSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contactPostPassDurationSecondsInput() {
        return this._contactPostPassDurationSeconds;
    }
    get contactPrePassDurationSeconds() {
        return this.getNumberAttribute('contact_pre_pass_duration_seconds');
    }
    set contactPrePassDurationSeconds(value) {
        this._contactPrePassDurationSeconds = value;
    }
    resetContactPrePassDurationSeconds() {
        this._contactPrePassDurationSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contactPrePassDurationSecondsInput() {
        return this._contactPrePassDurationSeconds;
    }
    get dataflowEdges() {
        return this.interpolationForAttribute('dataflow_edges');
    }
    set dataflowEdges(value) {
        this._dataflowEdges = value;
    }
    // Temporarily expose input value. Use with caution.
    get dataflowEdgesInput() {
        return this._dataflowEdges;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get minimumViableContactDurationSeconds() {
        return this.getNumberAttribute('minimum_viable_contact_duration_seconds');
    }
    set minimumViableContactDurationSeconds(value) {
        this._minimumViableContactDurationSeconds = value;
    }
    // Temporarily expose input value. Use with caution.
    get minimumViableContactDurationSecondsInput() {
        return this._minimumViableContactDurationSeconds;
    }
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // region - computed: true, optional: false, required: false
    get region() {
        return this.getStringAttribute('region');
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
    get trackingConfigArn() {
        return this.getStringAttribute('tracking_config_arn');
    }
    set trackingConfigArn(value) {
        this._trackingConfigArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get trackingConfigArnInput() {
        return this._trackingConfigArn;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            contact_post_pass_duration_seconds: cdktf.numberToTerraform(this._contactPostPassDurationSeconds),
            contact_pre_pass_duration_seconds: cdktf.numberToTerraform(this._contactPrePassDurationSeconds),
            dataflow_edges: cdktf.listMapper(groundstationMissionProfileDataflowEdgesToTerraform)(this._dataflowEdges),
            minimum_viable_contact_duration_seconds: cdktf.numberToTerraform(this._minimumViableContactDurationSeconds),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.listMapper(groundstationMissionProfileTagsToTerraform)(this._tags),
            tracking_config_arn: cdktf.stringToTerraform(this._trackingConfigArn),
        };
    }
}
exports.GroundstationMissionProfile = GroundstationMissionProfile;
// =================
// STATIC PROPERTIES
// =================
GroundstationMissionProfile.tfResourceType = "awscc_groundstation_mission_profile";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdW5kc3RhdGlvbi1taXNzaW9uLXByb2ZpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm91bmRzdGF0aW9uLW1pc3Npb24tcHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUZBQXFGO0FBQ3JGLDJDQUEyQzs7O0FBRzNDLCtCQUErQjtBQXFEL0IsU0FBZ0IsbURBQW1ELENBQUMsTUFBaUQ7SUFDbkgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7UUFDekQsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO0tBQ2hELENBQUE7QUFDSCxDQUFDO0FBTkQsa0hBTUM7QUFhRCxTQUFnQiwwQ0FBMEMsQ0FBQyxNQUF3QztJQUNqRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFORCxnR0FNQztBQUdEOztFQUVFO0FBQ0YsTUFBYSwyQkFBNEIsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBT3RFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQXlDO1FBQ3hGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUscUNB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QUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDO1lBQy9GLGNBQWMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLG1EQUFtRCxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUMxRyx1Q0FBdUMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLG9DQUFvQyxDQUFDO1lBQzNHLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QyxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDOUUsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztTQUN0RSxDQUFDO0lBQ0osQ0FBQzs7QUEzS0gsa0VBNEtDO0FBMUtDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csMENBQWMsR0FBVyxxQ0FBcUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2dyb3VuZHN0YXRpb25fbWlzc2lvbl9wcm9maWxlLmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBHcm91bmRzdGF0aW9uTWlzc2lvblByb2ZpbGVDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogUG9zdC1wYXNzIHRpbWUgbmVlZGVkIGFmdGVyIHRoZSBjb250YWN0LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ3JvdW5kc3RhdGlvbl9taXNzaW9uX3Byb2ZpbGUuaHRtbCNjb250YWN0X3Bvc3RfcGFzc19kdXJhdGlvbl9zZWNvbmRzIEdyb3VuZHN0YXRpb25NaXNzaW9uUHJvZmlsZSNjb250YWN0X3Bvc3RfcGFzc19kdXJhdGlvbl9zZWNvbmRzfVxuICAqL1xuICByZWFkb25seSBjb250YWN0UG9zdFBhc3NEdXJhdGlvblNlY29uZHM/OiBudW1iZXI7XG4gIC8qKlxuICAqIFByZS1wYXNzIHRpbWUgbmVlZGVkIGJlZm9yZSB0aGUgY29udGFjdC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2dyb3VuZHN0YXRpb25fbWlzc2lvbl9wcm9maWxlLmh0bWwjY29udGFjdF9wcmVfcGFzc19kdXJhdGlvbl9zZWNvbmRzIEdyb3VuZHN0YXRpb25NaXNzaW9uUHJvZmlsZSNjb250YWN0X3ByZV9wYXNzX2R1cmF0aW9uX3NlY29uZHN9XG4gICovXG4gIHJlYWRvbmx5IGNvbnRhY3RQcmVQYXNzRHVyYXRpb25TZWNvbmRzPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2dyb3VuZHN0YXRpb25fbWlzc2lvbl9wcm9maWxlLmh0bWwjZGF0YWZsb3dfZWRnZXMgR3JvdW5kc3RhdGlvbk1pc3Npb25Qcm9maWxlI2RhdGFmbG93X2VkZ2VzfVxuICAqL1xuICByZWFkb25seSBkYXRhZmxvd0VkZ2VzOiBHcm91bmRzdGF0aW9uTWlzc2lvblByb2ZpbGVEYXRhZmxvd0VkZ2VzW107XG4gIC8qKlxuICAqIFZpc2liaWxpdGllcyB3aXRoIHNob3J0ZXIgZHVyYXRpb24gdGhhbiB0aGUgc3BlY2lmaWVkIG1pbmltdW0gdmlhYmxlIGNvbnRhY3QgZHVyYXRpb24gd2lsbCBiZSBpZ25vcmVkIHdoZW4gc2VhcmNoaW5nIGZvciBhdmFpbGFibGUgY29udGFjdHMuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9ncm91bmRzdGF0aW9uX21pc3Npb25fcHJvZmlsZS5odG1sI21pbmltdW1fdmlhYmxlX2NvbnRhY3RfZHVyYXRpb25fc2Vjb25kcyBHcm91bmRzdGF0aW9uTWlzc2lvblByb2ZpbGUjbWluaW11bV92aWFibGVfY29udGFjdF9kdXJhdGlvbl9zZWNvbmRzfVxuICAqL1xuICByZWFkb25seSBtaW5pbXVtVmlhYmxlQ29udGFjdER1cmF0aW9uU2Vjb25kczogbnVtYmVyO1xuICAvKipcbiAgKiBBIG5hbWUgdXNlZCB0byBpZGVudGlmeSBhIG1pc3Npb24gcHJvZmlsZS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2dyb3VuZHN0YXRpb25fbWlzc2lvbl9wcm9maWxlLmh0bWwjbmFtZSBHcm91bmRzdGF0aW9uTWlzc2lvblByb2ZpbGUjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2dyb3VuZHN0YXRpb25fbWlzc2lvbl9wcm9maWxlLmh0bWwjdGFncyBHcm91bmRzdGF0aW9uTWlzc2lvblByb2ZpbGUjdGFnc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFncz86IEdyb3VuZHN0YXRpb25NaXNzaW9uUHJvZmlsZVRhZ3NbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9ncm91bmRzdGF0aW9uX21pc3Npb25fcHJvZmlsZS5odG1sI3RyYWNraW5nX2NvbmZpZ19hcm4gR3JvdW5kc3RhdGlvbk1pc3Npb25Qcm9maWxlI3RyYWNraW5nX2NvbmZpZ19hcm59XG4gICovXG4gIHJlYWRvbmx5IHRyYWNraW5nQ29uZmlnQXJuOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEdyb3VuZHN0YXRpb25NaXNzaW9uUHJvZmlsZURhdGFmbG93RWRnZXMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2dyb3VuZHN0YXRpb25fbWlzc2lvbl9wcm9maWxlLmh0bWwjZGVzdGluYXRpb24gR3JvdW5kc3RhdGlvbk1pc3Npb25Qcm9maWxlI2Rlc3RpbmF0aW9ufVxuICAqL1xuICByZWFkb25seSBkZXN0aW5hdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9ncm91bmRzdGF0aW9uX21pc3Npb25fcHJvZmlsZS5odG1sI3NvdXJjZSBHcm91bmRzdGF0aW9uTWlzc2lvblByb2ZpbGUjc291cmNlfVxuICAqL1xuICByZWFkb25seSBzb3VyY2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncm91bmRzdGF0aW9uTWlzc2lvblByb2ZpbGVEYXRhZmxvd0VkZ2VzVG9UZXJyYWZvcm0oc3RydWN0PzogR3JvdW5kc3RhdGlvbk1pc3Npb25Qcm9maWxlRGF0YWZsb3dFZGdlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZXN0aW5hdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXN0aW5hdGlvbiksXG4gICAgc291cmNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNvdXJjZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHcm91bmRzdGF0aW9uTWlzc2lvblByb2ZpbGVUYWdzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9ncm91bmRzdGF0aW9uX21pc3Npb25fcHJvZmlsZS5odG1sI2tleSBHcm91bmRzdGF0aW9uTWlzc2lvblByb2ZpbGUja2V5fVxuICAqL1xuICByZWFkb25seSBrZXk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ3JvdW5kc3RhdGlvbl9taXNzaW9uX3Byb2ZpbGUuaHRtbCN2YWx1ZSBHcm91bmRzdGF0aW9uTWlzc2lvblByb2ZpbGUjdmFsdWV9XG4gICovXG4gIHJlYWRvbmx5IHZhbHVlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JvdW5kc3RhdGlvbk1pc3Npb25Qcm9maWxlVGFnc1RvVGVycmFmb3JtKHN0cnVjdD86IEdyb3VuZHN0YXRpb25NaXNzaW9uUHJvZmlsZVRhZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ3JvdW5kc3RhdGlvbl9taXNzaW9uX3Byb2ZpbGUuaHRtbCBhd3NjY19ncm91bmRzdGF0aW9uX21pc3Npb25fcHJvZmlsZX1cbiovXG5leHBvcnQgY2xhc3MgR3JvdW5kc3RhdGlvbk1pc3Npb25Qcm9maWxlIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2NfZ3JvdW5kc3RhdGlvbl9taXNzaW9uX3Byb2ZpbGVcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ3JvdW5kc3RhdGlvbl9taXNzaW9uX3Byb2ZpbGUuaHRtbCBhd3NjY19ncm91bmRzdGF0aW9uX21pc3Npb25fcHJvZmlsZX0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgR3JvdW5kc3RhdGlvbk1pc3Npb25Qcm9maWxlQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEdyb3VuZHN0YXRpb25NaXNzaW9uUHJvZmlsZUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfZ3JvdW5kc3RhdGlvbl9taXNzaW9uX3Byb2ZpbGUnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9jb250YWN0UG9zdFBhc3NEdXJhdGlvblNlY29uZHMgPSBjb25maWcuY29udGFjdFBvc3RQYXNzRHVyYXRpb25TZWNvbmRzO1xuICAgIHRoaXMuX2NvbnRhY3RQcmVQYXNzRHVyYXRpb25TZWNvbmRzID0gY29uZmlnLmNvbnRhY3RQcmVQYXNzRHVyYXRpb25TZWNvbmRzO1xuICAgIHRoaXMuX2RhdGFmbG93RWRnZXMgPSBjb25maWcuZGF0YWZsb3dFZGdlcztcbiAgICB0aGlzLl9taW5pbXVtVmlhYmxlQ29udGFjdER1cmF0aW9uU2Vjb25kcyA9IGNvbmZpZy5taW5pbXVtVmlhYmxlQ29udGFjdER1cmF0aW9uU2Vjb25kcztcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RyYWNraW5nQ29uZmlnQXJuID0gY29uZmlnLnRyYWNraW5nQ29uZmlnQXJuO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGNvbnRhY3RfcG9zdF9wYXNzX2R1cmF0aW9uX3NlY29uZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29udGFjdFBvc3RQYXNzRHVyYXRpb25TZWNvbmRzPzogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IGNvbnRhY3RQb3N0UGFzc0R1cmF0aW9uU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2NvbnRhY3RfcG9zdF9wYXNzX2R1cmF0aW9uX3NlY29uZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbnRhY3RQb3N0UGFzc0R1cmF0aW9uU2Vjb25kcyh2YWx1ZTogbnVtYmVyICkge1xuICAgIHRoaXMuX2NvbnRhY3RQb3N0UGFzc0R1cmF0aW9uU2Vjb25kcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbnRhY3RQb3N0UGFzc0R1cmF0aW9uU2Vjb25kcygpIHtcbiAgICB0aGlzLl9jb250YWN0UG9zdFBhc3NEdXJhdGlvblNlY29uZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbnRhY3RQb3N0UGFzc0R1cmF0aW9uU2Vjb25kc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250YWN0UG9zdFBhc3NEdXJhdGlvblNlY29uZHNcbiAgfVxuXG4gIC8vIGNvbnRhY3RfcHJlX3Bhc3NfZHVyYXRpb25fc2Vjb25kcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb250YWN0UHJlUGFzc0R1cmF0aW9uU2Vjb25kcz86IG51bWJlcjtcbiAgcHVibGljIGdldCBjb250YWN0UHJlUGFzc0R1cmF0aW9uU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2NvbnRhY3RfcHJlX3Bhc3NfZHVyYXRpb25fc2Vjb25kcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29udGFjdFByZVBhc3NEdXJhdGlvblNlY29uZHModmFsdWU6IG51bWJlciApIHtcbiAgICB0aGlzLl9jb250YWN0UHJlUGFzc0R1cmF0aW9uU2Vjb25kcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbnRhY3RQcmVQYXNzRHVyYXRpb25TZWNvbmRzKCkge1xuICAgIHRoaXMuX2NvbnRhY3RQcmVQYXNzRHVyYXRpb25TZWNvbmRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb250YWN0UHJlUGFzc0R1cmF0aW9uU2Vjb25kc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250YWN0UHJlUGFzc0R1cmF0aW9uU2Vjb25kc1xuICB9XG5cbiAgLy8gZGF0YWZsb3dfZWRnZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGF0YWZsb3dFZGdlczogR3JvdW5kc3RhdGlvbk1pc3Npb25Qcm9maWxlRGF0YWZsb3dFZGdlc1tdO1xuICBwdWJsaWMgZ2V0IGRhdGFmbG93RWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGF0YWZsb3dfZWRnZXMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBkYXRhZmxvd0VkZ2VzKHZhbHVlOiBHcm91bmRzdGF0aW9uTWlzc2lvblByb2ZpbGVEYXRhZmxvd0VkZ2VzW10pIHtcbiAgICB0aGlzLl9kYXRhZmxvd0VkZ2VzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRhdGFmbG93RWRnZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YWZsb3dFZGdlc1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBtaW5pbXVtX3ZpYWJsZV9jb250YWN0X2R1cmF0aW9uX3NlY29uZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWluaW11bVZpYWJsZUNvbnRhY3REdXJhdGlvblNlY29uZHM6IG51bWJlcjtcbiAgcHVibGljIGdldCBtaW5pbXVtVmlhYmxlQ29udGFjdER1cmF0aW9uU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21pbmltdW1fdmlhYmxlX2NvbnRhY3RfZHVyYXRpb25fc2Vjb25kcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWluaW11bVZpYWJsZUNvbnRhY3REdXJhdGlvblNlY29uZHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21pbmltdW1WaWFibGVDb250YWN0RHVyYXRpb25TZWNvbmRzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1pbmltdW1WaWFibGVDb250YWN0RHVyYXRpb25TZWNvbmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21pbmltdW1WaWFibGVDb250YWN0RHVyYXRpb25TZWNvbmRzXG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVcbiAgfVxuXG4gIC8vIHJlZ2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlZ2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlZ2lvbicpO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogR3JvdW5kc3RhdGlvbk1pc3Npb25Qcm9maWxlVGFnc1tdO1xuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IEdyb3VuZHN0YXRpb25NaXNzaW9uUHJvZmlsZVRhZ3NbXSApIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NcbiAgfVxuXG4gIC8vIHRyYWNraW5nX2NvbmZpZ19hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdHJhY2tpbmdDb25maWdBcm46IHN0cmluZztcbiAgcHVibGljIGdldCB0cmFja2luZ0NvbmZpZ0FybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RyYWNraW5nX2NvbmZpZ19hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRyYWNraW5nQ29uZmlnQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90cmFja2luZ0NvbmZpZ0FybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0cmFja2luZ0NvbmZpZ0FybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90cmFja2luZ0NvbmZpZ0FyblxuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBjb250YWN0X3Bvc3RfcGFzc19kdXJhdGlvbl9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9jb250YWN0UG9zdFBhc3NEdXJhdGlvblNlY29uZHMpLFxuICAgICAgY29udGFjdF9wcmVfcGFzc19kdXJhdGlvbl9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9jb250YWN0UHJlUGFzc0R1cmF0aW9uU2Vjb25kcyksXG4gICAgICBkYXRhZmxvd19lZGdlczogY2RrdGYubGlzdE1hcHBlcihncm91bmRzdGF0aW9uTWlzc2lvblByb2ZpbGVEYXRhZmxvd0VkZ2VzVG9UZXJyYWZvcm0pKHRoaXMuX2RhdGFmbG93RWRnZXMpLFxuICAgICAgbWluaW11bV92aWFibGVfY29udGFjdF9kdXJhdGlvbl9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9taW5pbXVtVmlhYmxlQ29udGFjdER1cmF0aW9uU2Vjb25kcyksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHRhZ3M6IGNka3RmLmxpc3RNYXBwZXIoZ3JvdW5kc3RhdGlvbk1pc3Npb25Qcm9maWxlVGFnc1RvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRyYWNraW5nX2NvbmZpZ19hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3RyYWNraW5nQ29uZmlnQXJuKSxcbiAgICB9O1xuICB9XG59XG4iXX0=