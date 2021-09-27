"use strict";
// https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_alert.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.LookoutmetricsAlert = exports.lookoutmetricsAlertActionToTerraform = exports.lookoutmetricsAlertActionSnsConfigurationToTerraform = exports.lookoutmetricsAlertActionLambdaConfigurationToTerraform = void 0;
const cdktf = require("cdktf");
function lookoutmetricsAlertActionLambdaConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        lambda_arn: cdktf.stringToTerraform(struct.lambdaArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.lookoutmetricsAlertActionLambdaConfigurationToTerraform = lookoutmetricsAlertActionLambdaConfigurationToTerraform;
function lookoutmetricsAlertActionSnsConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        sns_topic_arn: cdktf.stringToTerraform(struct.snsTopicArn),
    };
}
exports.lookoutmetricsAlertActionSnsConfigurationToTerraform = lookoutmetricsAlertActionSnsConfigurationToTerraform;
function lookoutmetricsAlertActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        lambda_configuration: lookoutmetricsAlertActionLambdaConfigurationToTerraform(struct.lambdaConfiguration),
        sns_configuration: lookoutmetricsAlertActionSnsConfigurationToTerraform(struct.snsConfiguration),
    };
}
exports.lookoutmetricsAlertActionToTerraform = lookoutmetricsAlertActionToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_alert.html awscc_lookoutmetrics_alert}
*/
class LookoutmetricsAlert extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_alert.html awscc_lookoutmetrics_alert} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LookoutmetricsAlertConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_lookoutmetrics_alert',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._action = config.action;
        this._alertDescription = config.alertDescription;
        this._alertName = config.alertName;
        this._alertSensitivityThreshold = config.alertSensitivityThreshold;
        this._anomalyDetectorArn = config.anomalyDetectorArn;
    }
    get action() {
        return this.interpolationForAttribute('action');
    }
    set action(value) {
        this._action = value;
    }
    // Temporarily expose input value. Use with caution.
    get actionInput() {
        return this._action;
    }
    get alertDescription() {
        return this.getStringAttribute('alert_description');
    }
    set alertDescription(value) {
        this._alertDescription = value;
    }
    resetAlertDescription() {
        this._alertDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get alertDescriptionInput() {
        return this._alertDescription;
    }
    get alertName() {
        return this.getStringAttribute('alert_name');
    }
    set alertName(value) {
        this._alertName = value;
    }
    resetAlertName() {
        this._alertName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get alertNameInput() {
        return this._alertName;
    }
    get alertSensitivityThreshold() {
        return this.getNumberAttribute('alert_sensitivity_threshold');
    }
    set alertSensitivityThreshold(value) {
        this._alertSensitivityThreshold = value;
    }
    // Temporarily expose input value. Use with caution.
    get alertSensitivityThresholdInput() {
        return this._alertSensitivityThreshold;
    }
    get anomalyDetectorArn() {
        return this.getStringAttribute('anomaly_detector_arn');
    }
    set anomalyDetectorArn(value) {
        this._anomalyDetectorArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get anomalyDetectorArnInput() {
        return this._anomalyDetectorArn;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            action: lookoutmetricsAlertActionToTerraform(this._action),
            alert_description: cdktf.stringToTerraform(this._alertDescription),
            alert_name: cdktf.stringToTerraform(this._alertName),
            alert_sensitivity_threshold: cdktf.numberToTerraform(this._alertSensitivityThreshold),
            anomaly_detector_arn: cdktf.stringToTerraform(this._anomalyDetectorArn),
        };
    }
}
exports.LookoutmetricsAlert = LookoutmetricsAlert;
// =================
// STATIC PROPERTIES
// =================
LookoutmetricsAlert.tfResourceType = "awscc_lookoutmetrics_alert";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9va291dG1ldHJpY3MtYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb29rb3V0bWV0cmljcy1hbGVydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEVBQTRFO0FBQzVFLDJDQUEyQzs7O0FBRzNDLCtCQUErQjtBQTZDL0IsU0FBZ0IsdURBQXVELENBQUMsTUFBcUQ7SUFDM0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7UUFDdEQsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO0tBQ25ELENBQUE7QUFDSCxDQUFDO0FBTkQsMEhBTUM7QUFhRCxTQUFnQixvREFBb0QsQ0FBQyxNQUFrRDtJQUNySCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNsRCxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7S0FDNUQsQ0FBQTtBQUNILENBQUM7QUFORCxvSEFNQztBQWlCRCxTQUFnQixvQ0FBb0MsQ0FBQyxNQUFrQztJQUNyRixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLG9CQUFvQixFQUFFLHVEQUF1RCxDQUFDLE1BQU8sQ0FBQyxtQkFBbUIsQ0FBQztRQUMxRyxpQkFBaUIsRUFBRSxvREFBb0QsQ0FBQyxNQUFPLENBQUMs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QyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHVCQUF1QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQTtJQUNqQyxDQUFDO0lBRUQseURBQXlEO0lBQ3pELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCx3REFBd0Q7SUFDeEQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsTUFBTSxFQUFFLG9DQUFvQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDMUQsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNsRSxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDcEQsMkJBQTJCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQztZQUNyRixvQkFBb0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1NBQ3hFLENBQUM7SUFDSixDQUFDOztBQXJJSCxrREFzSUM7QUFwSUMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyxrQ0FBYyxHQUFXLDRCQUE0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbG9va291dG1ldHJpY3NfYWxlcnQuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIExvb2tvdXRtZXRyaWNzQWxlcnRDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9sb29rb3V0bWV0cmljc19hbGVydC5odG1sI2FjdGlvbiBMb29rb3V0bWV0cmljc0FsZXJ0I2FjdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgYWN0aW9uOiBMb29rb3V0bWV0cmljc0FsZXJ0QWN0aW9uO1xuICAvKipcbiAgKiBBIGRlc2NyaXB0aW9uIGZvciB0aGUgYWxlcnQuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9sb29rb3V0bWV0cmljc19hbGVydC5odG1sI2FsZXJ0X2Rlc2NyaXB0aW9uIExvb2tvdXRtZXRyaWNzQWxlcnQjYWxlcnRfZGVzY3JpcHRpb259XG4gICovXG4gIHJlYWRvbmx5IGFsZXJ0RGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFRoZSBuYW1lIG9mIHRoZSBhbGVydC4gSWYgbm90IHByb3ZpZGVkLCBhIG5hbWUgaXMgZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9sb29rb3V0bWV0cmljc19hbGVydC5odG1sI2FsZXJ0X25hbWUgTG9va291dG1ldHJpY3NBbGVydCNhbGVydF9uYW1lfVxuICAqL1xuICByZWFkb25seSBhbGVydE5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIEEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMTAwIChpbmNsdXNpdmUpIHRoYXQgdHVuZXMgdGhlIHNlbnNpdGl2aXR5IG9mIHRoZSBhbGVydC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xvb2tvdXRtZXRyaWNzX2FsZXJ0Lmh0bWwjYWxlcnRfc2Vuc2l0aXZpdHlfdGhyZXNob2xkIExvb2tvdXRtZXRyaWNzQWxlcnQjYWxlcnRfc2Vuc2l0aXZpdHlfdGhyZXNob2xkfVxuICAqL1xuICByZWFkb25seSBhbGVydFNlbnNpdGl2aXR5VGhyZXNob2xkOiBudW1iZXI7XG4gIC8qKlxuICAqIFRoZSBBbWF6b24gcmVzb3VyY2UgbmFtZSAoQVJOKSBvZiB0aGUgQW5vbWFseSBEZXRlY3RvciB0byBhbGVydC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xvb2tvdXRtZXRyaWNzX2FsZXJ0Lmh0bWwjYW5vbWFseV9kZXRlY3Rvcl9hcm4gTG9va291dG1ldHJpY3NBbGVydCNhbm9tYWx5X2RldGVjdG9yX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgYW5vbWFseURldGVjdG9yQXJuOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIExvb2tvdXRtZXRyaWNzQWxlcnRBY3Rpb25MYW1iZGFDb25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9sb29rb3V0bWV0cmljc19hbGVydC5odG1sI2xhbWJkYV9hcm4gTG9va291dG1ldHJpY3NBbGVydCNsYW1iZGFfYXJufVxuICAqL1xuICByZWFkb25seSBsYW1iZGFBcm46IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9sb29rb3V0bWV0cmljc19hbGVydC5odG1sI3JvbGVfYXJuIExvb2tvdXRtZXRyaWNzQWxlcnQjcm9sZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IHJvbGVBcm46IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvb2tvdXRtZXRyaWNzQWxlcnRBY3Rpb25MYW1iZGFDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogTG9va291dG1ldHJpY3NBbGVydEFjdGlvbkxhbWJkYUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbGFtYmRhX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sYW1iZGFBcm4pLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9va291dG1ldHJpY3NBbGVydEFjdGlvblNuc0NvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xvb2tvdXRtZXRyaWNzX2FsZXJ0Lmh0bWwjcm9sZV9hcm4gTG9va291dG1ldHJpY3NBbGVydCNyb2xlX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgcm9sZUFybjogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xvb2tvdXRtZXRyaWNzX2FsZXJ0Lmh0bWwjc25zX3RvcGljX2FybiBMb29rb3V0bWV0cmljc0FsZXJ0I3Nuc190b3BpY19hcm59XG4gICovXG4gIHJlYWRvbmx5IHNuc1RvcGljQXJuOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb29rb3V0bWV0cmljc0FsZXJ0QWN0aW9uU25zQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IExvb2tvdXRtZXRyaWNzQWxlcnRBY3Rpb25TbnNDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICAgIHNuc190b3BpY19hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc25zVG9waWNBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9va291dG1ldHJpY3NBbGVydEFjdGlvbiB7XG4gIC8qKlxuICAqIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgYSBMYW1iZGEgYWxlcnQgYWN0aW9uLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbG9va291dG1ldHJpY3NfYWxlcnQuaHRtbCNsYW1iZGFfY29uZmlndXJhdGlvbiBMb29rb3V0bWV0cmljc0FsZXJ0I2xhbWJkYV9jb25maWd1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSBsYW1iZGFDb25maWd1cmF0aW9uPzogTG9va291dG1ldHJpY3NBbGVydEFjdGlvbkxhbWJkYUNvbmZpZ3VyYXRpb247XG4gIC8qKlxuICAqIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgYW4gU05TIGFsZXJ0IGFjdGlvbi5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xvb2tvdXRtZXRyaWNzX2FsZXJ0Lmh0bWwjc25zX2NvbmZpZ3VyYXRpb24gTG9va291dG1ldHJpY3NBbGVydCNzbnNfY29uZmlndXJhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgc25zQ29uZmlndXJhdGlvbj86IExvb2tvdXRtZXRyaWNzQWxlcnRBY3Rpb25TbnNDb25maWd1cmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9va291dG1ldHJpY3NBbGVydEFjdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IExvb2tvdXRtZXRyaWNzQWxlcnRBY3Rpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbGFtYmRhX2NvbmZpZ3VyYXRpb246IGxvb2tvdXRtZXRyaWNzQWxlcnRBY3Rpb25MYW1iZGFDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5sYW1iZGFDb25maWd1cmF0aW9uKSxcbiAgICBzbnNfY29uZmlndXJhdGlvbjogbG9va291dG1ldHJpY3NBbGVydEFjdGlvblNuc0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnNuc0NvbmZpZ3VyYXRpb24pLFxuICB9XG59XG5cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbG9va291dG1ldHJpY3NfYWxlcnQuaHRtbCBhd3NjY19sb29rb3V0bWV0cmljc19hbGVydH1cbiovXG5leHBvcnQgY2xhc3MgTG9va291dG1ldHJpY3NBbGVydCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX2xvb2tvdXRtZXRyaWNzX2FsZXJ0XCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xvb2tvdXRtZXRyaWNzX2FsZXJ0Lmh0bWwgYXdzY2NfbG9va291dG1ldHJpY3NfYWxlcnR9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIExvb2tvdXRtZXRyaWNzQWxlcnRDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogTG9va291dG1ldHJpY3NBbGVydENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfbG9va291dG1ldHJpY3NfYWxlcnQnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hY3Rpb24gPSBjb25maWcuYWN0aW9uO1xuICAgIHRoaXMuX2FsZXJ0RGVzY3JpcHRpb24gPSBjb25maWcuYWxlcnREZXNjcmlwdGlvbjtcbiAgICB0aGlzLl9hbGVydE5hbWUgPSBjb25maWcuYWxlcnROYW1lO1xuICAgIHRoaXMuX2FsZXJ0U2Vuc2l0aXZpdHlUaHJlc2hvbGQgPSBjb25maWcuYWxlcnRTZW5zaXRpdml0eVRocmVzaG9sZDtcbiAgICB0aGlzLl9hbm9tYWx5RGV0ZWN0b3JBcm4gPSBjb25maWcuYW5vbWFseURldGVjdG9yQXJuO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhY3Rpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYWN0aW9uOiBMb29rb3V0bWV0cmljc0FsZXJ0QWN0aW9uO1xuICBwdWJsaWMgZ2V0IGFjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhY3Rpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBhY3Rpb24odmFsdWU6IExvb2tvdXRtZXRyaWNzQWxlcnRBY3Rpb24pIHtcbiAgICB0aGlzLl9hY3Rpb24gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGlvblxuICB9XG5cbiAgLy8gYWxlcnRfZGVzY3JpcHRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGVydERlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGFsZXJ0RGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhbGVydF9kZXNjcmlwdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWxlcnREZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWxlcnREZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsZXJ0RGVzY3JpcHRpb24oKSB7XG4gICAgdGhpcy5fYWxlcnREZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxlcnREZXNjcmlwdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGVydERlc2NyaXB0aW9uXG4gIH1cblxuICAvLyBhbGVydF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxlcnROYW1lPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGFsZXJ0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FsZXJ0X25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFsZXJ0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWxlcnROYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWxlcnROYW1lKCkge1xuICAgIHRoaXMuX2FsZXJ0TmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxlcnROYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsZXJ0TmFtZVxuICB9XG5cbiAgLy8gYWxlcnRfc2Vuc2l0aXZpdHlfdGhyZXNob2xkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2FsZXJ0U2Vuc2l0aXZpdHlUaHJlc2hvbGQ6IG51bWJlcjtcbiAgcHVibGljIGdldCBhbGVydFNlbnNpdGl2aXR5VGhyZXNob2xkKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYWxlcnRfc2Vuc2l0aXZpdHlfdGhyZXNob2xkJyk7XG4gIH1cbiAgcHVibGljIHNldCBhbGVydFNlbnNpdGl2aXR5VGhyZXNob2xkKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9hbGVydFNlbnNpdGl2aXR5VGhyZXNob2xkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsZXJ0U2Vuc2l0aXZpdHlUaHJlc2hvbGRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxlcnRTZW5zaXRpdml0eVRocmVzaG9sZFxuICB9XG5cbiAgLy8gYW5vbWFseV9kZXRlY3Rvcl9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYW5vbWFseURldGVjdG9yQXJuOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgYW5vbWFseURldGVjdG9yQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYW5vbWFseV9kZXRlY3Rvcl9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFub21hbHlEZXRlY3RvckFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYW5vbWFseURldGVjdG9yQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFub21hbHlEZXRlY3RvckFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbm9tYWx5RGV0ZWN0b3JBcm5cbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGlvbjogbG9va291dG1ldHJpY3NBbGVydEFjdGlvblRvVGVycmFmb3JtKHRoaXMuX2FjdGlvbiksXG4gICAgICBhbGVydF9kZXNjcmlwdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYWxlcnREZXNjcmlwdGlvbiksXG4gICAgICBhbGVydF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hbGVydE5hbWUpLFxuICAgICAgYWxlcnRfc2Vuc2l0aXZpdHlfdGhyZXNob2xkOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9hbGVydFNlbnNpdGl2aXR5VGhyZXNob2xkKSxcbiAgICAgIGFub21hbHlfZGV0ZWN0b3JfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hbm9tYWx5RGV0ZWN0b3JBcm4pLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==