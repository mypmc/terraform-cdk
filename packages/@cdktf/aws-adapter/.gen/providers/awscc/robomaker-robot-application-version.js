"use strict";
// https://www.terraform.io/docs/providers/awscc/r/robomaker_robot_application_version.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.RobomakerRobotApplicationVersion = void 0;
const cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_robot_application_version.html awscc_robomaker_robot_application_version}
*/
class RobomakerRobotApplicationVersion extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_robot_application_version.html awscc_robomaker_robot_application_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RobomakerRobotApplicationVersionConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_robomaker_robot_application_version',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._application = config.application;
        this._currentRevisionId = config.currentRevisionId;
    }
    get application() {
        return this.getStringAttribute('application');
    }
    set application(value) {
        this._application = value;
    }
    // Temporarily expose input value. Use with caution.
    get applicationInput() {
        return this._application;
    }
    // application_version - computed: true, optional: false, required: false
    get applicationVersion() {
        return this.getStringAttribute('application_version');
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get currentRevisionId() {
        return this.getStringAttribute('current_revision_id');
    }
    set currentRevisionId(value) {
        this._currentRevisionId = value;
    }
    resetCurrentRevisionId() {
        this._currentRevisionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get currentRevisionIdInput() {
        return this._currentRevisionId;
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
            application: cdktf.stringToTerraform(this._application),
            current_revision_id: cdktf.stringToTerraform(this._currentRevisionId),
        };
    }
}
exports.RobomakerRobotApplicationVersion = RobomakerRobotApplicationVersion;
// =================
// STATIC PROPERTIES
// =================
RobomakerRobotApplicationVersion.tfResourceType = "awscc_robomaker_robot_application_version";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9ib21ha2VyLXJvYm90LWFwcGxpY2F0aW9uLXZlcnNpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb2JvbWFrZXItcm9ib3QtYXBwbGljYXRpb24tdmVyc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMkZBQTJGO0FBQzNGLDJDQUEyQzs7O0FBRzNDLCtCQUErQjtBQWlCL0I7O0VBRUU7QUFDRixNQUFhLGdDQUFpQyxTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPM0UsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBOEM7UUFDN0YsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSwyQ0FBMkM7WUFDbEUsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxPQUFPO2FBQ3RCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDO0lBQ3JELENBQUM7SUFRRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNELElBQVcsV0FBVyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUE7SUFDMUIsQ0FBQztJQUVELHlFQUF5RTtJQUN6RSxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCx5REFBeUQ7SUFDekQsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUlELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNELElBQVcsaUJBQWlCLENBQUMsS0FBYTtRQUN4QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFDTSxzQkFBc0I7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFBO0lBQ2hDLENBQUM7SUFFRCx3REFBd0Q7SUFDeEQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3ZELG1CQUFtQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7U0FDdEUsQ0FBQztJQUNKLENBQUM7O0FBMUZILDRFQTJGQztBQXpGQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLCtDQUFjLEdBQVcsMkNBQTJDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9yb2JvbWFrZXJfcm9ib3RfYXBwbGljYXRpb25fdmVyc2lvbi5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm9ib21ha2VyUm9ib3RBcHBsaWNhdGlvblZlcnNpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9yb2JvbWFrZXJfcm9ib3RfYXBwbGljYXRpb25fdmVyc2lvbi5odG1sI2FwcGxpY2F0aW9uIFJvYm9tYWtlclJvYm90QXBwbGljYXRpb25WZXJzaW9uI2FwcGxpY2F0aW9ufVxuICAqL1xuICByZWFkb25seSBhcHBsaWNhdGlvbjogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgcmV2aXNpb24gSUQgb2Ygcm9ib3QgYXBwbGljYXRpb24uXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9yb2JvbWFrZXJfcm9ib3RfYXBwbGljYXRpb25fdmVyc2lvbi5odG1sI2N1cnJlbnRfcmV2aXNpb25faWQgUm9ib21ha2VyUm9ib3RBcHBsaWNhdGlvblZlcnNpb24jY3VycmVudF9yZXZpc2lvbl9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgY3VycmVudFJldmlzaW9uSWQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3JvYm9tYWtlcl9yb2JvdF9hcHBsaWNhdGlvbl92ZXJzaW9uLmh0bWwgYXdzY2Nfcm9ib21ha2VyX3JvYm90X2FwcGxpY2F0aW9uX3ZlcnNpb259XG4qL1xuZXhwb3J0IGNsYXNzIFJvYm9tYWtlclJvYm90QXBwbGljYXRpb25WZXJzaW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2Nfcm9ib21ha2VyX3JvYm90X2FwcGxpY2F0aW9uX3ZlcnNpb25cIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivcm9ib21ha2VyX3JvYm90X2FwcGxpY2F0aW9uX3ZlcnNpb24uaHRtbCBhd3NjY19yb2JvbWFrZXJfcm9ib3RfYXBwbGljYXRpb25fdmVyc2lvbn0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgUm9ib21ha2VyUm9ib3RBcHBsaWNhdGlvblZlcnNpb25Db25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogUm9ib21ha2VyUm9ib3RBcHBsaWNhdGlvblZlcnNpb25Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c2NjX3JvYm9tYWtlcl9yb2JvdF9hcHBsaWNhdGlvbl92ZXJzaW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYXBwbGljYXRpb24gPSBjb25maWcuYXBwbGljYXRpb247XG4gICAgdGhpcy5fY3VycmVudFJldmlzaW9uSWQgPSBjb25maWcuY3VycmVudFJldmlzaW9uSWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFwcGxpY2F0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2FwcGxpY2F0aW9uOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgYXBwbGljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcHBsaWNhdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXBwbGljYXRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFwcGxpY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGxpY2F0aW9uXG4gIH1cblxuICAvLyBhcHBsaWNhdGlvbl92ZXJzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXBwbGljYXRpb25WZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXBwbGljYXRpb25fdmVyc2lvbicpO1xuICB9XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBjdXJyZW50X3JldmlzaW9uX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VycmVudFJldmlzaW9uSWQ/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgY3VycmVudFJldmlzaW9uSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjdXJyZW50X3JldmlzaW9uX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBjdXJyZW50UmV2aXNpb25JZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3VycmVudFJldmlzaW9uSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXJyZW50UmV2aXNpb25JZCgpIHtcbiAgICB0aGlzLl9jdXJyZW50UmV2aXNpb25JZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3VycmVudFJldmlzaW9uSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFJldmlzaW9uSWRcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhcHBsaWNhdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYXBwbGljYXRpb24pLFxuICAgICAgY3VycmVudF9yZXZpc2lvbl9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY3VycmVudFJldmlzaW9uSWQpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==