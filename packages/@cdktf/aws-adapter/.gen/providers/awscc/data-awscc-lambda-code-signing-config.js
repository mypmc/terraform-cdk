"use strict";
// https://www.terraform.io/docs/providers/awscc/d/lambda_code_signing_config.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccLambdaCodeSigningConfig = exports.dataAwsccLambdaCodeSigningConfigCodeSigningPoliciesToTerraform = exports.DataAwsccLambdaCodeSigningConfigCodeSigningPolicies = exports.dataAwsccLambdaCodeSigningConfigAllowedPublishersToTerraform = exports.DataAwsccLambdaCodeSigningConfigAllowedPublishers = void 0;
const cdktf = require("cdktf");
class DataAwsccLambdaCodeSigningConfigAllowedPublishers extends cdktf.ComplexComputedList {
    // signing_profile_version_arns - computed: true, optional: false, required: false
    get signingProfileVersionArns() {
        return this.getListAttribute('signing_profile_version_arns');
    }
}
exports.DataAwsccLambdaCodeSigningConfigAllowedPublishers = DataAwsccLambdaCodeSigningConfigAllowedPublishers;
function dataAwsccLambdaCodeSigningConfigAllowedPublishersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        signing_profile_version_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.signingProfileVersionArns),
    };
}
exports.dataAwsccLambdaCodeSigningConfigAllowedPublishersToTerraform = dataAwsccLambdaCodeSigningConfigAllowedPublishersToTerraform;
class DataAwsccLambdaCodeSigningConfigCodeSigningPolicies extends cdktf.ComplexComputedList {
    // untrusted_artifact_on_deployment - computed: true, optional: false, required: false
    get untrustedArtifactOnDeployment() {
        return this.getStringAttribute('untrusted_artifact_on_deployment');
    }
}
exports.DataAwsccLambdaCodeSigningConfigCodeSigningPolicies = DataAwsccLambdaCodeSigningConfigCodeSigningPolicies;
function dataAwsccLambdaCodeSigningConfigCodeSigningPoliciesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        untrusted_artifact_on_deployment: cdktf.stringToTerraform(struct.untrustedArtifactOnDeployment),
    };
}
exports.dataAwsccLambdaCodeSigningConfigCodeSigningPoliciesToTerraform = dataAwsccLambdaCodeSigningConfigCodeSigningPoliciesToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/lambda_code_signing_config.html awscc_lambda_code_signing_config}
*/
class DataAwsccLambdaCodeSigningConfig extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/lambda_code_signing_config.html awscc_lambda_code_signing_config} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLambdaCodeSigningConfigConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_lambda_code_signing_config',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = config.id;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // allowed_publishers - computed: true, optional: false, required: false
    get allowedPublishers() {
        return this.interpolationForAttribute('allowed_publishers');
    }
    // code_signing_config_arn - computed: true, optional: false, required: false
    get codeSigningConfigArn() {
        return this.getStringAttribute('code_signing_config_arn');
    }
    // code_signing_config_id - computed: true, optional: false, required: false
    get codeSigningConfigId() {
        return this.getStringAttribute('code_signing_config_id');
    }
    // code_signing_policies - computed: true, optional: false, required: false
    get codeSigningPolicies() {
        return this.interpolationForAttribute('code_signing_policies');
    }
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
        };
    }
}
exports.DataAwsccLambdaCodeSigningConfig = DataAwsccLambdaCodeSigningConfig;
// =================
// STATIC PROPERTIES
// =================
DataAwsccLambdaCodeSigningConfig.tfResourceType = "awscc_lambda_code_signing_config";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1sYW1iZGEtY29kZS1zaWduaW5nLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEtYXdzY2MtbGFtYmRhLWNvZGUtc2lnbmluZy1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGtGQUFrRjtBQUNsRiwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUFZL0IsTUFBYSxpREFBa0QsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTlGLGtGQUFrRjtJQUNsRixJQUFXLHlCQUF5QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Q0FDRjtBQU5ELDhHQU1DO0FBRUQsU0FBZ0IsNERBQTRELENBQUMsTUFBMEQ7SUFDckksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCw0QkFBNEIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyx5QkFBeUIsQ0FBQztLQUMzRyxDQUFBO0FBQ0gsQ0FBQztBQUxELG9JQUtDO0FBRUQsTUFBYSxtREFBb0QsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRWhHLHNGQUFzRjtJQUN0RixJQUFXLDZCQUE2QjtRQUN0QyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Q0FDRjtBQU5ELGtIQU1DO0FBRUQsU0FBZ0IsOERBQThELENBQUMsTUFBNEQ7SUFDekksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLDZCQUE2QixDQUFDO0tBQ2pHLENBQUE7QUFDSCxDQUFDO0FBTEQsd0lBS0M7QUFHRDs7RUFFRTtBQUNGLE1BQWEsZ0NBQWlDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQU83RSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUE4QztRQUM3RixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLGtDQUFrQztZQUN6RCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLE9BQU87YUFDdEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYix3RUFBd0U7SUFDeEUsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsb0JBQW9CLENBQVEsQ0FBQztJQUNyRSxDQUFDO0lBRUQsNkVBQTZFO0lBQzdFLElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELDRFQUE0RTtJQUM1RSxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCwyRUFBMkU7SUFDM0UsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsdUJBQXVCLENBQVEsQ0FBQztJQUN4RSxDQUFDO0lBRUQsaUVBQWlFO0lBQ2pFLElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBSUQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELElBQVcsRUFBRSxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ2pCLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLEVBQUUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUN0QyxDQUFDO0lBQ0osQ0FBQzs7QUFsRkgsNEVBbUZDO0FBakZDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csK0NBQWMsR0FBVyxrQ0FBa0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2xhbWJkYV9jb2RlX3NpZ25pbmdfY29uZmlnLmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzY2NMYW1iZGFDb2RlU2lnbmluZ0NvbmZpZ0NvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBVbmlxdWVseSBpZGVudGlmaWVzIHRoZSByZXNvdXJjZS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2xhbWJkYV9jb2RlX3NpZ25pbmdfY29uZmlnLmh0bWwjaWQgRGF0YUF3c2NjTGFtYmRhQ29kZVNpZ25pbmdDb25maWcjaWR9XG4gICovXG4gIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjTGFtYmRhQ29kZVNpZ25pbmdDb25maWdBbGxvd2VkUHVibGlzaGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHNpZ25pbmdfcHJvZmlsZV92ZXJzaW9uX2FybnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzaWduaW5nUHJvZmlsZVZlcnNpb25Bcm5zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3NpZ25pbmdfcHJvZmlsZV92ZXJzaW9uX2FybnMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjTGFtYmRhQ29kZVNpZ25pbmdDb25maWdBbGxvd2VkUHVibGlzaGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0xhbWJkYUNvZGVTaWduaW5nQ29uZmlnQWxsb3dlZFB1Ymxpc2hlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgc2lnbmluZ19wcm9maWxlX3ZlcnNpb25fYXJuczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zaWduaW5nUHJvZmlsZVZlcnNpb25Bcm5zKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjTGFtYmRhQ29kZVNpZ25pbmdDb25maWdDb2RlU2lnbmluZ1BvbGljaWVzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gdW50cnVzdGVkX2FydGlmYWN0X29uX2RlcGxveW1lbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1bnRydXN0ZWRBcnRpZmFjdE9uRGVwbG95bWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VudHJ1c3RlZF9hcnRpZmFjdF9vbl9kZXBsb3ltZW50Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0xhbWJkYUNvZGVTaWduaW5nQ29uZmlnQ29kZVNpZ25pbmdQb2xpY2llc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0xhbWJkYUNvZGVTaWduaW5nQ29uZmlnQ29kZVNpZ25pbmdQb2xpY2llcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB1bnRydXN0ZWRfYXJ0aWZhY3Rfb25fZGVwbG95bWVudDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51bnRydXN0ZWRBcnRpZmFjdE9uRGVwbG95bWVudCksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9sYW1iZGFfY29kZV9zaWduaW5nX2NvbmZpZy5odG1sIGF3c2NjX2xhbWJkYV9jb2RlX3NpZ25pbmdfY29uZmlnfVxuKi9cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NMYW1iZGFDb2RlU2lnbmluZ0NvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybURhdGFTb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2NfbGFtYmRhX2NvZGVfc2lnbmluZ19jb25maWdcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvbGFtYmRhX2NvZGVfc2lnbmluZ19jb25maWcuaHRtbCBhd3NjY19sYW1iZGFfY29kZV9zaWduaW5nX2NvbmZpZ30gRGF0YSBTb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgRGF0YUF3c2NjTGFtYmRhQ29kZVNpZ25pbmdDb25maWdDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGF0YUF3c2NjTGFtYmRhQ29kZVNpZ25pbmdDb25maWdDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c2NjX2xhbWJkYV9jb2RlX3NpZ25pbmdfY29uZmlnJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFsbG93ZWRfcHVibGlzaGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFsbG93ZWRQdWJsaXNoZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2FsbG93ZWRfcHVibGlzaGVycycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGNvZGVfc2lnbmluZ19jb25maWdfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29kZVNpZ25pbmdDb25maWdBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb2RlX3NpZ25pbmdfY29uZmlnX2FybicpO1xuICB9XG5cbiAgLy8gY29kZV9zaWduaW5nX2NvbmZpZ19pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvZGVTaWduaW5nQ29uZmlnSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb2RlX3NpZ25pbmdfY29uZmlnX2lkJyk7XG4gIH1cblxuICAvLyBjb2RlX3NpZ25pbmdfcG9saWNpZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb2RlU2lnbmluZ1BvbGljaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NvZGVfc2lnbmluZ19wb2xpY2llcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGRlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXNjcmlwdGlvbicpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWRcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICB9O1xuICB9XG59XG4iXX0=