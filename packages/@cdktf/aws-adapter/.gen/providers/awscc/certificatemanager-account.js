"use strict";
// https://www.terraform.io/docs/providers/awscc/r/certificatemanager_account.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificatemanagerAccount = exports.certificatemanagerAccountExpiryEventsConfigurationToTerraform = void 0;
const cdktf = require("cdktf");
function certificatemanagerAccountExpiryEventsConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        days_before_expiry: cdktf.numberToTerraform(struct.daysBeforeExpiry),
    };
}
exports.certificatemanagerAccountExpiryEventsConfigurationToTerraform = certificatemanagerAccountExpiryEventsConfigurationToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/certificatemanager_account.html awscc_certificatemanager_account}
*/
class CertificatemanagerAccount extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/certificatemanager_account.html awscc_certificatemanager_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CertificatemanagerAccountConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_certificatemanager_account',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._expiryEventsConfiguration = config.expiryEventsConfiguration;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: true, optional: false, required: false
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    get expiryEventsConfiguration() {
        return this.interpolationForAttribute('expiry_events_configuration');
    }
    set expiryEventsConfiguration(value) {
        this._expiryEventsConfiguration = value;
    }
    // Temporarily expose input value. Use with caution.
    get expiryEventsConfigurationInput() {
        return this._expiryEventsConfiguration;
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
            expiry_events_configuration: certificatemanagerAccountExpiryEventsConfigurationToTerraform(this._expiryEventsConfiguration),
        };
    }
}
exports.CertificatemanagerAccount = CertificatemanagerAccount;
// =================
// STATIC PROPERTIES
// =================
CertificatemanagerAccount.tfResourceType = "awscc_certificatemanager_account";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VydGlmaWNhdGVtYW5hZ2VyLWFjY291bnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZXJ0aWZpY2F0ZW1hbmFnZXItYWNjb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsa0ZBQWtGO0FBQ2xGLDJDQUEyQzs7O0FBRzNDLCtCQUErQjtBQWlCL0IsU0FBZ0IsNkRBQTZELENBQUMsTUFBMkQ7SUFDdkksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxrQkFBa0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO0tBQ3RFLENBQUE7QUFDSCxDQUFDO0FBTEQsc0lBS0M7QUFHRDs7RUFFRTtBQUNGLE1BQWEseUJBQTBCLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQU9wRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUF1QztRQUN0RixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLGtDQUFrQztZQUN6RCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLE9BQU87YUFDdEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLDBCQUEwQixHQUFHLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQztJQUNyRSxDQUFDO0lBRUQsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBRWIsZ0VBQWdFO0lBQ2hFLElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBSUQsSUFBVyx5QkFBeUI7UUFDbEMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsNkJBQTZCLENBQVEsQ0FBQztJQUM5RSxDQUFDO0lBQ0QsSUFBVyx5QkFBeUIsQ0FBQyxLQUF5RDtRQUM1RixJQUFJLENBQUMsMEJBQTBCLEdBQUcsS0FBSyxDQUFDO0lBQzFDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyw4QkFBOEI7UUFDdkMsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUE7SUFDeEMsQ0FBQztJQUVELHdEQUF3RDtJQUN4RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCwyQkFBMkIsRUFBRSw2REFBNkQsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUM7U0FDNUgsQ0FBQztJQUNKLENBQUM7O0FBbkVILDhEQW9FQztBQWxFQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLHdDQUFjLEdBQVcsa0NBQWtDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9jZXJ0aWZpY2F0ZW1hbmFnZXJfYWNjb3VudC5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2VydGlmaWNhdGVtYW5hZ2VyQWNjb3VudENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2NlcnRpZmljYXRlbWFuYWdlcl9hY2NvdW50Lmh0bWwjZXhwaXJ5X2V2ZW50c19jb25maWd1cmF0aW9uIENlcnRpZmljYXRlbWFuYWdlckFjY291bnQjZXhwaXJ5X2V2ZW50c19jb25maWd1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSBleHBpcnlFdmVudHNDb25maWd1cmF0aW9uOiBDZXJ0aWZpY2F0ZW1hbmFnZXJBY2NvdW50RXhwaXJ5RXZlbnRzQ29uZmlndXJhdGlvbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2VydGlmaWNhdGVtYW5hZ2VyQWNjb3VudEV4cGlyeUV2ZW50c0NvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2NlcnRpZmljYXRlbWFuYWdlcl9hY2NvdW50Lmh0bWwjZGF5c19iZWZvcmVfZXhwaXJ5IENlcnRpZmljYXRlbWFuYWdlckFjY291bnQjZGF5c19iZWZvcmVfZXhwaXJ5fVxuICAqL1xuICByZWFkb25seSBkYXlzQmVmb3JlRXhwaXJ5PzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2VydGlmaWNhdGVtYW5hZ2VyQWNjb3VudEV4cGlyeUV2ZW50c0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBDZXJ0aWZpY2F0ZW1hbmFnZXJBY2NvdW50RXhwaXJ5RXZlbnRzQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXlzX2JlZm9yZV9leHBpcnk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZGF5c0JlZm9yZUV4cGlyeSksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9jZXJ0aWZpY2F0ZW1hbmFnZXJfYWNjb3VudC5odG1sIGF3c2NjX2NlcnRpZmljYXRlbWFuYWdlcl9hY2NvdW50fVxuKi9cbmV4cG9ydCBjbGFzcyBDZXJ0aWZpY2F0ZW1hbmFnZXJBY2NvdW50IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2NfY2VydGlmaWNhdGVtYW5hZ2VyX2FjY291bnRcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvY2VydGlmaWNhdGVtYW5hZ2VyX2FjY291bnQuaHRtbCBhd3NjY19jZXJ0aWZpY2F0ZW1hbmFnZXJfYWNjb3VudH0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgQ2VydGlmaWNhdGVtYW5hZ2VyQWNjb3VudENvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBDZXJ0aWZpY2F0ZW1hbmFnZXJBY2NvdW50Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NjY19jZXJ0aWZpY2F0ZW1hbmFnZXJfYWNjb3VudCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3NjYydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2V4cGlyeUV2ZW50c0NvbmZpZ3VyYXRpb24gPSBjb25maWcuZXhwaXJ5RXZlbnRzQ29uZmlndXJhdGlvbjtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWNjb3VudF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFjY291bnRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FjY291bnRfaWQnKTtcbiAgfVxuXG4gIC8vIGV4cGlyeV9ldmVudHNfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9leHBpcnlFdmVudHNDb25maWd1cmF0aW9uOiBDZXJ0aWZpY2F0ZW1hbmFnZXJBY2NvdW50RXhwaXJ5RXZlbnRzQ29uZmlndXJhdGlvbjtcbiAgcHVibGljIGdldCBleHBpcnlFdmVudHNDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2V4cGlyeV9ldmVudHNfY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGV4cGlyeUV2ZW50c0NvbmZpZ3VyYXRpb24odmFsdWU6IENlcnRpZmljYXRlbWFuYWdlckFjY291bnRFeHBpcnlFdmVudHNDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fZXhwaXJ5RXZlbnRzQ29uZmlndXJhdGlvbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBleHBpcnlFdmVudHNDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4cGlyeUV2ZW50c0NvbmZpZ3VyYXRpb25cbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBleHBpcnlfZXZlbnRzX2NvbmZpZ3VyYXRpb246IGNlcnRpZmljYXRlbWFuYWdlckFjY291bnRFeHBpcnlFdmVudHNDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0odGhpcy5fZXhwaXJ5RXZlbnRzQ29uZmlndXJhdGlvbiksXG4gICAgfTtcbiAgfVxufVxuIl19