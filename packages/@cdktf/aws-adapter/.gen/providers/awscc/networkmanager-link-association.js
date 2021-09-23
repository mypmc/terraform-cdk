"use strict";
// https://www.terraform.io/docs/providers/awscc/r/networkmanager_link_association.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkmanagerLinkAssociation = void 0;
const cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_link_association.html awscc_networkmanager_link_association}
*/
class NetworkmanagerLinkAssociation extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_link_association.html awscc_networkmanager_link_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkmanagerLinkAssociationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_networkmanager_link_association',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._deviceId = config.deviceId;
        this._globalNetworkId = config.globalNetworkId;
        this._linkId = config.linkId;
    }
    get deviceId() {
        return this.getStringAttribute('device_id');
    }
    set deviceId(value) {
        this._deviceId = value;
    }
    // Temporarily expose input value. Use with caution.
    get deviceIdInput() {
        return this._deviceId;
    }
    get globalNetworkId() {
        return this.getStringAttribute('global_network_id');
    }
    set globalNetworkId(value) {
        this._globalNetworkId = value;
    }
    // Temporarily expose input value. Use with caution.
    get globalNetworkIdInput() {
        return this._globalNetworkId;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get linkId() {
        return this.getStringAttribute('link_id');
    }
    set linkId(value) {
        this._linkId = value;
    }
    // Temporarily expose input value. Use with caution.
    get linkIdInput() {
        return this._linkId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            device_id: cdktf.stringToTerraform(this._deviceId),
            global_network_id: cdktf.stringToTerraform(this._globalNetworkId),
            link_id: cdktf.stringToTerraform(this._linkId),
        };
    }
}
exports.NetworkmanagerLinkAssociation = NetworkmanagerLinkAssociation;
// =================
// STATIC PROPERTIES
// =================
NetworkmanagerLinkAssociation.tfResourceType = "awscc_networkmanager_link_association";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya21hbmFnZXItbGluay1hc3NvY2lhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ldHdvcmttYW5hZ2VyLWxpbmstYXNzb2NpYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVGQUF1RjtBQUN2RiwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUF5Qi9COztFQUVFO0FBQ0YsTUFBYSw2QkFBOEIsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBT3hFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQTJDO1FBQzFGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsdUNBQXVDO1lBQzlELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsT0FBTzthQUN0QjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFRRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNELElBQVcsUUFBUSxDQUFDLEtBQWE7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO0lBQ3ZCLENBQUM7SUFJRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsSUFBVyxlQUFlLENBQUMsS0FBYTtRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxvQkFBb0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUE7SUFDOUIsQ0FBQztJQUVELHdEQUF3RDtJQUN4RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBSUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELElBQVcsTUFBTSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3JCLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNsRCxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ2pFLE9BQU8sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUMvQyxDQUFDO0lBQ0osQ0FBQzs7QUE1Rkgsc0VBNkZDO0FBM0ZDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csNENBQWMsR0FBVyx1Q0FBdUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL25ldHdvcmttYW5hZ2VyX2xpbmtfYXNzb2NpYXRpb24uaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmttYW5hZ2VyTGlua0Fzc29jaWF0aW9uQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIFRoZSBJRCBvZiB0aGUgZGV2aWNlXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9uZXR3b3JrbWFuYWdlcl9saW5rX2Fzc29jaWF0aW9uLmh0bWwjZGV2aWNlX2lkIE5ldHdvcmttYW5hZ2VyTGlua0Fzc29jaWF0aW9uI2RldmljZV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgZGV2aWNlSWQ6IHN0cmluZztcbiAgLyoqXG4gICogVGhlIElEIG9mIHRoZSBnbG9iYWwgbmV0d29yay5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL25ldHdvcmttYW5hZ2VyX2xpbmtfYXNzb2NpYXRpb24uaHRtbCNnbG9iYWxfbmV0d29ya19pZCBOZXR3b3JrbWFuYWdlckxpbmtBc3NvY2lhdGlvbiNnbG9iYWxfbmV0d29ya19pZH1cbiAgKi9cbiAgcmVhZG9ubHkgZ2xvYmFsTmV0d29ya0lkOiBzdHJpbmc7XG4gIC8qKlxuICAqIFRoZSBJRCBvZiB0aGUgbGlua1xuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbmV0d29ya21hbmFnZXJfbGlua19hc3NvY2lhdGlvbi5odG1sI2xpbmtfaWQgTmV0d29ya21hbmFnZXJMaW5rQXNzb2NpYXRpb24jbGlua19pZH1cbiAgKi9cbiAgcmVhZG9ubHkgbGlua0lkOiBzdHJpbmc7XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL25ldHdvcmttYW5hZ2VyX2xpbmtfYXNzb2NpYXRpb24uaHRtbCBhd3NjY19uZXR3b3JrbWFuYWdlcl9saW5rX2Fzc29jaWF0aW9ufVxuKi9cbmV4cG9ydCBjbGFzcyBOZXR3b3JrbWFuYWdlckxpbmtBc3NvY2lhdGlvbiBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX25ldHdvcmttYW5hZ2VyX2xpbmtfYXNzb2NpYXRpb25cIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbmV0d29ya21hbmFnZXJfbGlua19hc3NvY2lhdGlvbi5odG1sIGF3c2NjX25ldHdvcmttYW5hZ2VyX2xpbmtfYXNzb2NpYXRpb259IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIE5ldHdvcmttYW5hZ2VyTGlua0Fzc29jaWF0aW9uQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IE5ldHdvcmttYW5hZ2VyTGlua0Fzc29jaWF0aW9uQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NjY19uZXR3b3JrbWFuYWdlcl9saW5rX2Fzc29jaWF0aW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fZGV2aWNlSWQgPSBjb25maWcuZGV2aWNlSWQ7XG4gICAgdGhpcy5fZ2xvYmFsTmV0d29ya0lkID0gY29uZmlnLmdsb2JhbE5ldHdvcmtJZDtcbiAgICB0aGlzLl9saW5rSWQgPSBjb25maWcubGlua0lkO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBkZXZpY2VfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGV2aWNlSWQ6IHN0cmluZztcbiAgcHVibGljIGdldCBkZXZpY2VJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RldmljZV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGV2aWNlSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RldmljZUlkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRldmljZUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmljZUlkXG4gIH1cblxuICAvLyBnbG9iYWxfbmV0d29ya19pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9nbG9iYWxOZXR3b3JrSWQ6IHN0cmluZztcbiAgcHVibGljIGdldCBnbG9iYWxOZXR3b3JrSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdnbG9iYWxfbmV0d29ya19pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZ2xvYmFsTmV0d29ya0lkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9nbG9iYWxOZXR3b3JrSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ2xvYmFsTmV0d29ya0lkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dsb2JhbE5ldHdvcmtJZFxuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBsaW5rX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2xpbmtJZDogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGxpbmtJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xpbmtfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxpbmtJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGlua0lkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxpbmtJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9saW5rSWRcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGV2aWNlX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZXZpY2VJZCksXG4gICAgICBnbG9iYWxfbmV0d29ya19pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZ2xvYmFsTmV0d29ya0lkKSxcbiAgICAgIGxpbmtfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2xpbmtJZCksXG4gICAgfTtcbiAgfVxufVxuIl19