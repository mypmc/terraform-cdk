"use strict";
// https://www.terraform.io/docs/providers/awscc/r/cloudfront_function.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudfrontFunction = exports.cloudfrontFunctionFunctionMetadataToTerraform = exports.cloudfrontFunctionFunctionConfigToTerraform = void 0;
const cdktf = require("cdktf");
function cloudfrontFunctionFunctionConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comment: cdktf.stringToTerraform(struct.comment),
        runtime: cdktf.stringToTerraform(struct.runtime),
    };
}
exports.cloudfrontFunctionFunctionConfigToTerraform = cloudfrontFunctionFunctionConfigToTerraform;
function cloudfrontFunctionFunctionMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        function_arn: cdktf.stringToTerraform(struct.functionArn),
    };
}
exports.cloudfrontFunctionFunctionMetadataToTerraform = cloudfrontFunctionFunctionMetadataToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_function.html awscc_cloudfront_function}
*/
class CloudfrontFunction extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_function.html awscc_cloudfront_function} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontFunctionConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudfront_function',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._autoPublish = config.autoPublish;
        this._functionCode = config.functionCode;
        this._functionConfig = config.functionConfig;
        this._functionMetadata = config.functionMetadata;
        this._name = config.name;
    }
    get autoPublish() {
        return this.getBooleanAttribute('auto_publish');
    }
    set autoPublish(value) {
        this._autoPublish = value;
    }
    resetAutoPublish() {
        this._autoPublish = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoPublishInput() {
        return this._autoPublish;
    }
    // function_arn - computed: true, optional: false, required: false
    get functionArn() {
        return this.getStringAttribute('function_arn');
    }
    get functionCode() {
        return this.getStringAttribute('function_code');
    }
    set functionCode(value) {
        this._functionCode = value;
    }
    resetFunctionCode() {
        this._functionCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get functionCodeInput() {
        return this._functionCode;
    }
    get functionConfig() {
        return this.interpolationForAttribute('function_config');
    }
    set functionConfig(value) {
        this._functionConfig = value;
    }
    resetFunctionConfig() {
        this._functionConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get functionConfigInput() {
        return this._functionConfig;
    }
    get functionMetadata() {
        return this.interpolationForAttribute('function_metadata');
    }
    set functionMetadata(value) {
        this._functionMetadata = value;
    }
    resetFunctionMetadata() {
        this._functionMetadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get functionMetadataInput() {
        return this._functionMetadata;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
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
    // stage - computed: true, optional: false, required: false
    get stage() {
        return this.getStringAttribute('stage');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            auto_publish: cdktf.booleanToTerraform(this._autoPublish),
            function_code: cdktf.stringToTerraform(this._functionCode),
            function_config: cloudfrontFunctionFunctionConfigToTerraform(this._functionConfig),
            function_metadata: cloudfrontFunctionFunctionMetadataToTerraform(this._functionMetadata),
            name: cdktf.stringToTerraform(this._name),
        };
    }
}
exports.CloudfrontFunction = CloudfrontFunction;
// =================
// STATIC PROPERTIES
// =================
CloudfrontFunction.tfResourceType = "awscc_cloudfront_function";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRmcm9udC1mdW5jdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsb3VkZnJvbnQtZnVuY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJFQUEyRTtBQUMzRSwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUFxQy9CLFNBQWdCLDJDQUEyQyxDQUFDLE1BQXlDO0lBQ25HLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2pELE9BQU8sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztLQUNsRCxDQUFBO0FBQ0gsQ0FBQztBQU5ELGtHQU1DO0FBU0QsU0FBZ0IsNkNBQTZDLENBQUMsTUFBMkM7SUFDdkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7S0FDM0QsQ0FBQTtBQUNILENBQUM7QUFMRCxzR0FLQztBQUdEOztFQUVFO0FBQ0YsTUFBYSxrQkFBbUIsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBTzdELGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQWdDO1FBQy9FLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsMkJBQTJCO1lBQ2xELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsT0FBTzthQUN0QjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFB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Q0Qsb0RBQW9EO0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDbkIsQ0FBQztJQUVELDJEQUEyRDtJQUMzRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxZQUFZLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDekQsYUFBYSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzFELGVBQWUsRUFBRSwyQ0FBMkMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQ2xGLGlCQUFpQixFQUFFLDZDQUE2QyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUN4RixJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDMUMsQ0FBQztJQUNKLENBQUM7O0FBaEpILGdEQWlKQztBQS9JQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLGlDQUFjLEdBQVcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9jbG91ZGZyb250X2Z1bmN0aW9uLmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250RnVuY3Rpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9jbG91ZGZyb250X2Z1bmN0aW9uLmh0bWwjYXV0b19wdWJsaXNoIENsb3VkZnJvbnRGdW5jdGlvbiNhdXRvX3B1Ymxpc2h9XG4gICovXG4gIHJlYWRvbmx5IGF1dG9QdWJsaXNoPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Nsb3VkZnJvbnRfZnVuY3Rpb24uaHRtbCNmdW5jdGlvbl9jb2RlIENsb3VkZnJvbnRGdW5jdGlvbiNmdW5jdGlvbl9jb2RlfVxuICAqL1xuICByZWFkb25seSBmdW5jdGlvbkNvZGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvY2xvdWRmcm9udF9mdW5jdGlvbi5odG1sI2Z1bmN0aW9uX2NvbmZpZyBDbG91ZGZyb250RnVuY3Rpb24jZnVuY3Rpb25fY29uZmlnfVxuICAqL1xuICByZWFkb25seSBmdW5jdGlvbkNvbmZpZz86IENsb3VkZnJvbnRGdW5jdGlvbkZ1bmN0aW9uQ29uZmlnO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Nsb3VkZnJvbnRfZnVuY3Rpb24uaHRtbCNmdW5jdGlvbl9tZXRhZGF0YSBDbG91ZGZyb250RnVuY3Rpb24jZnVuY3Rpb25fbWV0YWRhdGF9XG4gICovXG4gIHJlYWRvbmx5IGZ1bmN0aW9uTWV0YWRhdGE/OiBDbG91ZGZyb250RnVuY3Rpb25GdW5jdGlvbk1ldGFkYXRhO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Nsb3VkZnJvbnRfZnVuY3Rpb24uaHRtbCNuYW1lIENsb3VkZnJvbnRGdW5jdGlvbiNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnRGdW5jdGlvbkZ1bmN0aW9uQ29uZmlnIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9jbG91ZGZyb250X2Z1bmN0aW9uLmh0bWwjY29tbWVudCBDbG91ZGZyb250RnVuY3Rpb24jY29tbWVudH1cbiAgKi9cbiAgcmVhZG9ubHkgY29tbWVudDogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Nsb3VkZnJvbnRfZnVuY3Rpb24uaHRtbCNydW50aW1lIENsb3VkZnJvbnRGdW5jdGlvbiNydW50aW1lfVxuICAqL1xuICByZWFkb25seSBydW50aW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250RnVuY3Rpb25GdW5jdGlvbkNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRGdW5jdGlvbkZ1bmN0aW9uQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbW1lbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tbWVudCksXG4gICAgcnVudGltZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ydW50aW1lKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnRGdW5jdGlvbkZ1bmN0aW9uTWV0YWRhdGEge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Nsb3VkZnJvbnRfZnVuY3Rpb24uaHRtbCNmdW5jdGlvbl9hcm4gQ2xvdWRmcm9udEZ1bmN0aW9uI2Z1bmN0aW9uX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgZnVuY3Rpb25Bcm46IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRGdW5jdGlvbkZ1bmN0aW9uTWV0YWRhdGFUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250RnVuY3Rpb25GdW5jdGlvbk1ldGFkYXRhKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGZ1bmN0aW9uX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5mdW5jdGlvbkFybiksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9jbG91ZGZyb250X2Z1bmN0aW9uLmh0bWwgYXdzY2NfY2xvdWRmcm9udF9mdW5jdGlvbn1cbiovXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udEZ1bmN0aW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2NfY2xvdWRmcm9udF9mdW5jdGlvblwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9jbG91ZGZyb250X2Z1bmN0aW9uLmh0bWwgYXdzY2NfY2xvdWRmcm9udF9mdW5jdGlvbn0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgQ2xvdWRmcm9udEZ1bmN0aW9uQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IENsb3VkZnJvbnRGdW5jdGlvbkNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfY2xvdWRmcm9udF9mdW5jdGlvbicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3NjYydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2F1dG9QdWJsaXNoID0gY29uZmlnLmF1dG9QdWJsaXNoO1xuICAgIHRoaXMuX2Z1bmN0aW9uQ29kZSA9IGNvbmZpZy5mdW5jdGlvbkNvZGU7XG4gICAgdGhpcy5fZnVuY3Rpb25Db25maWcgPSBjb25maWcuZnVuY3Rpb25Db25maWc7XG4gICAgdGhpcy5fZnVuY3Rpb25NZXRhZGF0YSA9IGNvbmZpZy5mdW5jdGlvbk1ldGFkYXRhO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXV0b19wdWJsaXNoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dG9QdWJsaXNoPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICBwdWJsaWMgZ2V0IGF1dG9QdWJsaXNoKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2F1dG9fcHVibGlzaCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0b1B1Ymxpc2godmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSApIHtcbiAgICB0aGlzLl9hdXRvUHVibGlzaCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dG9QdWJsaXNoKCkge1xuICAgIHRoaXMuX2F1dG9QdWJsaXNoID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRvUHVibGlzaElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvUHVibGlzaFxuICB9XG5cbiAgLy8gZnVuY3Rpb25fYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZnVuY3Rpb25Bcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmdW5jdGlvbl9hcm4nKTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uX2NvZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZnVuY3Rpb25Db2RlPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGZ1bmN0aW9uQ29kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Z1bmN0aW9uX2NvZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZ1bmN0aW9uQ29kZSh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2Z1bmN0aW9uQ29kZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZ1bmN0aW9uQ29kZSgpIHtcbiAgICB0aGlzLl9mdW5jdGlvbkNvZGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZ1bmN0aW9uQ29kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mdW5jdGlvbkNvZGVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9mdW5jdGlvbkNvbmZpZz86IENsb3VkZnJvbnRGdW5jdGlvbkZ1bmN0aW9uQ29uZmlnO1xuICBwdWJsaWMgZ2V0IGZ1bmN0aW9uQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Z1bmN0aW9uX2NvbmZpZycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGZ1bmN0aW9uQ29uZmlnKHZhbHVlOiBDbG91ZGZyb250RnVuY3Rpb25GdW5jdGlvbkNvbmZpZyApIHtcbiAgICB0aGlzLl9mdW5jdGlvbkNvbmZpZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZ1bmN0aW9uQ29uZmlnKCkge1xuICAgIHRoaXMuX2Z1bmN0aW9uQ29uZmlnID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmdW5jdGlvbkNvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mdW5jdGlvbkNvbmZpZ1xuICB9XG5cbiAgLy8gZnVuY3Rpb25fbWV0YWRhdGEgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZnVuY3Rpb25NZXRhZGF0YT86IENsb3VkZnJvbnRGdW5jdGlvbkZ1bmN0aW9uTWV0YWRhdGE7XG4gIHB1YmxpYyBnZXQgZnVuY3Rpb25NZXRhZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdmdW5jdGlvbl9tZXRhZGF0YScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGZ1bmN0aW9uTWV0YWRhdGEodmFsdWU6IENsb3VkZnJvbnRGdW5jdGlvbkZ1bmN0aW9uTWV0YWRhdGEgKSB7XG4gICAgdGhpcy5fZnVuY3Rpb25NZXRhZGF0YSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZ1bmN0aW9uTWV0YWRhdGEoKSB7XG4gICAgdGhpcy5fZnVuY3Rpb25NZXRhZGF0YSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZnVuY3Rpb25NZXRhZGF0YUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mdW5jdGlvbk1ldGFkYXRhXG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZVxuICB9XG5cbiAgLy8gc3RhZ2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YWdlJyk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF1dG9fcHVibGlzaDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2F1dG9QdWJsaXNoKSxcbiAgICAgIGZ1bmN0aW9uX2NvZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Z1bmN0aW9uQ29kZSksXG4gICAgICBmdW5jdGlvbl9jb25maWc6IGNsb3VkZnJvbnRGdW5jdGlvbkZ1bmN0aW9uQ29uZmlnVG9UZXJyYWZvcm0odGhpcy5fZnVuY3Rpb25Db25maWcpLFxuICAgICAgZnVuY3Rpb25fbWV0YWRhdGE6IGNsb3VkZnJvbnRGdW5jdGlvbkZ1bmN0aW9uTWV0YWRhdGFUb1RlcnJhZm9ybSh0aGlzLl9mdW5jdGlvbk1ldGFkYXRhKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==