"use strict";
// https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.SsmcontactsContact = exports.ssmcontactsContactPlanToTerraform = exports.ssmcontactsContactPlanTargetsToTerraform = exports.ssmcontactsContactPlanTargetsContactTargetInfoToTerraform = exports.ssmcontactsContactPlanTargetsChannelTargetInfoToTerraform = void 0;
const cdktf = require("cdktf");
function ssmcontactsContactPlanTargetsChannelTargetInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        channel_id: cdktf.stringToTerraform(struct.channelId),
        retry_interval_in_minutes: cdktf.numberToTerraform(struct.retryIntervalInMinutes),
    };
}
exports.ssmcontactsContactPlanTargetsChannelTargetInfoToTerraform = ssmcontactsContactPlanTargetsChannelTargetInfoToTerraform;
function ssmcontactsContactPlanTargetsContactTargetInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        contact_id: cdktf.stringToTerraform(struct.contactId),
        is_essential: cdktf.booleanToTerraform(struct.isEssential),
    };
}
exports.ssmcontactsContactPlanTargetsContactTargetInfoToTerraform = ssmcontactsContactPlanTargetsContactTargetInfoToTerraform;
function ssmcontactsContactPlanTargetsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        channel_target_info: ssmcontactsContactPlanTargetsChannelTargetInfoToTerraform(struct.channelTargetInfo),
        contact_target_info: ssmcontactsContactPlanTargetsContactTargetInfoToTerraform(struct.contactTargetInfo),
    };
}
exports.ssmcontactsContactPlanTargetsToTerraform = ssmcontactsContactPlanTargetsToTerraform;
function ssmcontactsContactPlanToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        duration_in_minutes: cdktf.numberToTerraform(struct.durationInMinutes),
        targets: cdktf.listMapper(ssmcontactsContactPlanTargetsToTerraform)(struct.targets),
    };
}
exports.ssmcontactsContactPlanToTerraform = ssmcontactsContactPlanToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html awscc_ssmcontacts_contact}
*/
class SsmcontactsContact extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html awscc_ssmcontacts_contact} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmcontactsContactConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_ssmcontacts_contact',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._alias = config.alias;
        this._displayName = config.displayName;
        this._plan = config.plan;
        this._type = config.type;
    }
    get alias() {
        return this.getStringAttribute('alias');
    }
    set alias(value) {
        this._alias = value;
    }
    // Temporarily expose input value. Use with caution.
    get aliasInput() {
        return this._alias;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get displayName() {
        return this.getStringAttribute('display_name');
    }
    set displayName(value) {
        this._displayName = value;
    }
    // Temporarily expose input value. Use with caution.
    get displayNameInput() {
        return this._displayName;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get plan() {
        return this.interpolationForAttribute('plan');
    }
    set plan(value) {
        this._plan = value;
    }
    // Temporarily expose input value. Use with caution.
    get planInput() {
        return this._plan;
    }
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            alias: cdktf.stringToTerraform(this._alias),
            display_name: cdktf.stringToTerraform(this._displayName),
            plan: cdktf.listMapper(ssmcontactsContactPlanToTerraform)(this._plan),
            type: cdktf.stringToTerraform(this._type),
        };
    }
}
exports.SsmcontactsContact = SsmcontactsContact;
// =================
// STATIC PROPERTIES
// =================
SsmcontactsContact.tfResourceType = "awscc_ssmcontacts_contact";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3NtY29udGFjdHMtY29udGFjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNzbWNvbnRhY3RzLWNvbnRhY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJFQUEyRTtBQUMzRSwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUE2Qy9CLFNBQWdCLHlEQUF5RCxDQUFDLE1BQXVEO0lBQy9ILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3RELHlCQUF5QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsc0JBQXNCLENBQUM7S0FDbkYsQ0FBQTtBQUNILENBQUM7QUFORCw4SEFNQztBQWlCRCxTQUFnQix5REFBeUQsQ0FBQyxNQUF1RDtJQUMvSCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztRQUN0RCxZQUFZLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7S0FDNUQsQ0FBQTtBQUNILENBQUM7QUFORCw4SEFNQztBQWlCRCxTQUFnQix3Q0FBd0MsQ0FBQyxNQUFzQztJQUM3RixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLG1CQUFtQixFQUFFLHlEQUF5RCxDQUFDLE1BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN6RyxtQkFBbUIsRUFBRSx5REFBeUQsQ0FBQyxNQUFPLENB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RCxJQUFXLElBQUksQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUNuQixDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDM0MsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3hELElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNyRSxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDMUMsQ0FBQztJQUNKLENBQUM7O0FBaEhILGdEQWlIQztBQS9HQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLGlDQUFjLEdBQVcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9zc21jb250YWN0c19jb250YWN0Lmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBTc21jb250YWN0c0NvbnRhY3RDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogQWxpYXMgb2YgdGhlIGNvbnRhY3QuIFN0cmluZyB2YWx1ZSB3aXRoIDIwIHRvIDI1NiBjaGFyYWN0ZXJzLiBPbmx5IGFscGhhYmV0aWNhbCwgbnVtZXJpYyBjaGFyYWN0ZXJzLCBkYXNoLCBvciB1bmRlcnNjb3JlIGFsbG93ZWQuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9zc21jb250YWN0c19jb250YWN0Lmh0bWwjYWxpYXMgU3NtY29udGFjdHNDb250YWN0I2FsaWFzfVxuICAqL1xuICByZWFkb25seSBhbGlhczogc3RyaW5nO1xuICAvKipcbiAgKiBOYW1lIG9mIHRoZSBjb250YWN0LiBTdHJpbmcgdmFsdWUgd2l0aCAzIHRvIDI1NiBjaGFyYWN0ZXJzLiBPbmx5IGFscGhhYmV0aWNhbCwgc3BhY2UsIG51bWVyaWMgY2hhcmFjdGVycywgZGFzaCwgb3IgdW5kZXJzY29yZSBhbGxvd2VkLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivc3NtY29udGFjdHNfY29udGFjdC5odG1sI2Rpc3BsYXlfbmFtZSBTc21jb250YWN0c0NvbnRhY3QjZGlzcGxheV9uYW1lfVxuICAqL1xuICByZWFkb25seSBkaXNwbGF5TmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgc3RhZ2VzIHRoYXQgYW4gZXNjYWxhdGlvbiBwbGFuIG9yIGVuZ2FnZW1lbnQgcGxhbiBlbmdhZ2VzIGNvbnRhY3RzIGFuZCBjb250YWN0IG1ldGhvZHMgaW4uXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9zc21jb250YWN0c19jb250YWN0Lmh0bWwjcGxhbiBTc21jb250YWN0c0NvbnRhY3QjcGxhbn1cbiAgKi9cbiAgcmVhZG9ubHkgcGxhbjogU3NtY29udGFjdHNDb250YWN0UGxhbltdO1xuICAvKipcbiAgKiBDb250YWN0IHR5cGUsIHdoaWNoIHNwZWNpZnkgdHlwZSBvZiBjb250YWN0LiBDdXJyZW50bHkgc3VwcG9ydGVkIHZhbHVlczogP1BFUlNPTkFMPywgP1NIQVJFRD8sID9PVEhFUj8uXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9zc21jb250YWN0c19jb250YWN0Lmh0bWwjdHlwZSBTc21jb250YWN0c0NvbnRhY3QjdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBTc21jb250YWN0c0NvbnRhY3RQbGFuVGFyZ2V0c0NoYW5uZWxUYXJnZXRJbmZvIHtcbiAgLyoqXG4gICogVGhlIEFtYXpvbiBSZXNvdXJjZSBOYW1lIChBUk4pIG9mIHRoZSBjb250YWN0IGNoYW5uZWwuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9zc21jb250YWN0c19jb250YWN0Lmh0bWwjY2hhbm5lbF9pZCBTc21jb250YWN0c0NvbnRhY3QjY2hhbm5lbF9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgY2hhbm5lbElkOiBzdHJpbmc7XG4gIC8qKlxuICAqIFRoZSBudW1iZXIgb2YgbWludXRlcyB0byB3YWl0IHRvIHJldHJ5IHNlbmRpbmcgZW5nYWdlbWVudCBpbiB0aGUgY2FzZSB0aGUgZW5nYWdlbWVudCBpbml0aWFsbHkgZmFpbHMuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9zc21jb250YWN0c19jb250YWN0Lmh0bWwjcmV0cnlfaW50ZXJ2YWxfaW5fbWludXRlcyBTc21jb250YWN0c0NvbnRhY3QjcmV0cnlfaW50ZXJ2YWxfaW5fbWludXRlc31cbiAgKi9cbiAgcmVhZG9ubHkgcmV0cnlJbnRlcnZhbEluTWludXRlczogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3NtY29udGFjdHNDb250YWN0UGxhblRhcmdldHNDaGFubmVsVGFyZ2V0SW5mb1RvVGVycmFmb3JtKHN0cnVjdD86IFNzbWNvbnRhY3RzQ29udGFjdFBsYW5UYXJnZXRzQ2hhbm5lbFRhcmdldEluZm8pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2hhbm5lbF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jaGFubmVsSWQpLFxuICAgIHJldHJ5X2ludGVydmFsX2luX21pbnV0ZXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucmV0cnlJbnRlcnZhbEluTWludXRlcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTc21jb250YWN0c0NvbnRhY3RQbGFuVGFyZ2V0c0NvbnRhY3RUYXJnZXRJbmZvIHtcbiAgLyoqXG4gICogVGhlIEFtYXpvbiBSZXNvdXJjZSBOYW1lIChBUk4pIG9mIHRoZSBjb250YWN0LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivc3NtY29udGFjdHNfY29udGFjdC5odG1sI2NvbnRhY3RfaWQgU3NtY29udGFjdHNDb250YWN0I2NvbnRhY3RfaWR9XG4gICovXG4gIHJlYWRvbmx5IGNvbnRhY3RJZDogc3RyaW5nO1xuICAvKipcbiAgKiBBIEJvb2xlYW4gdmFsdWUgZGV0ZXJtaW5pbmcgaWYgdGhlIGNvbnRhY3QncyBhY2tub3dsZWRnZW1lbnQgc3RvcHMgdGhlIHByb2dyZXNzIG9mIHN0YWdlcyBpbiB0aGUgcGxhbi5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3NzbWNvbnRhY3RzX2NvbnRhY3QuaHRtbCNpc19lc3NlbnRpYWwgU3NtY29udGFjdHNDb250YWN0I2lzX2Vzc2VudGlhbH1cbiAgKi9cbiAgcmVhZG9ubHkgaXNFc3NlbnRpYWw6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNzbWNvbnRhY3RzQ29udGFjdFBsYW5UYXJnZXRzQ29udGFjdFRhcmdldEluZm9Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBTc21jb250YWN0c0NvbnRhY3RQbGFuVGFyZ2V0c0NvbnRhY3RUYXJnZXRJbmZvKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbnRhY3RfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29udGFjdElkKSxcbiAgICBpc19lc3NlbnRpYWw6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmlzRXNzZW50aWFsKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNzbWNvbnRhY3RzQ29udGFjdFBsYW5UYXJnZXRzIHtcbiAgLyoqXG4gICogSW5mb3JtYXRpb24gYWJvdXQgdGhlIGNvbnRhY3QgY2hhbm5lbCB0aGF0IFNTTSBJbmNpZGVudCBNYW5hZ2VyIHVzZXMgdG8gZW5nYWdlIHRoZSBjb250YWN0LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivc3NtY29udGFjdHNfY29udGFjdC5odG1sI2NoYW5uZWxfdGFyZ2V0X2luZm8gU3NtY29udGFjdHNDb250YWN0I2NoYW5uZWxfdGFyZ2V0X2luZm99XG4gICovXG4gIHJlYWRvbmx5IGNoYW5uZWxUYXJnZXRJbmZvPzogU3NtY29udGFjdHNDb250YWN0UGxhblRhcmdldHNDaGFubmVsVGFyZ2V0SW5mbztcbiAgLyoqXG4gICogVGhlIGNvbnRhY3QgdGhhdCBTU00gSW5jaWRlbnQgTWFuYWdlciBpcyBlbmdhZ2luZyBkdXJpbmcgYW4gaW5jaWRlbnQuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9zc21jb250YWN0c19jb250YWN0Lmh0bWwjY29udGFjdF90YXJnZXRfaW5mbyBTc21jb250YWN0c0NvbnRhY3QjY29udGFjdF90YXJnZXRfaW5mb31cbiAgKi9cbiAgcmVhZG9ubHkgY29udGFjdFRhcmdldEluZm8/OiBTc21jb250YWN0c0NvbnRhY3RQbGFuVGFyZ2V0c0NvbnRhY3RUYXJnZXRJbmZvO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3NtY29udGFjdHNDb250YWN0UGxhblRhcmdldHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTc21jb250YWN0c0NvbnRhY3RQbGFuVGFyZ2V0cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjaGFubmVsX3RhcmdldF9pbmZvOiBzc21jb250YWN0c0NvbnRhY3RQbGFuVGFyZ2V0c0NoYW5uZWxUYXJnZXRJbmZvVG9UZXJyYWZvcm0oc3RydWN0IS5jaGFubmVsVGFyZ2V0SW5mbyksXG4gICAgY29udGFjdF90YXJnZXRfaW5mbzogc3NtY29udGFjdHNDb250YWN0UGxhblRhcmdldHNDb250YWN0VGFyZ2V0SW5mb1RvVGVycmFmb3JtKHN0cnVjdCEuY29udGFjdFRhcmdldEluZm8pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3NtY29udGFjdHNDb250YWN0UGxhbiB7XG4gIC8qKlxuICAqIFRoZSB0aW1lIHRvIHdhaXQgdW50aWwgYmVnaW5uaW5nIHRoZSBuZXh0IHN0YWdlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Ivc3NtY29udGFjdHNfY29udGFjdC5odG1sI2R1cmF0aW9uX2luX21pbnV0ZXMgU3NtY29udGFjdHNDb250YWN0I2R1cmF0aW9uX2luX21pbnV0ZXN9XG4gICovXG4gIHJlYWRvbmx5IGR1cmF0aW9uSW5NaW51dGVzOiBudW1iZXI7XG4gIC8qKlxuICAqIFRoZSBjb250YWN0cyBvciBjb250YWN0IG1ldGhvZHMgdGhhdCB0aGUgZXNjYWxhdGlvbiBwbGFuIG9yIGVuZ2FnZW1lbnQgcGxhbiBpcyBlbmdhZ2luZy5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3NzbWNvbnRhY3RzX2NvbnRhY3QuaHRtbCN0YXJnZXRzIFNzbWNvbnRhY3RzQ29udGFjdCN0YXJnZXRzfVxuICAqL1xuICByZWFkb25seSB0YXJnZXRzPzogU3NtY29udGFjdHNDb250YWN0UGxhblRhcmdldHNbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNzbWNvbnRhY3RzQ29udGFjdFBsYW5Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBTc21jb250YWN0c0NvbnRhY3RQbGFuKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGR1cmF0aW9uX2luX21pbnV0ZXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZHVyYXRpb25Jbk1pbnV0ZXMpLFxuICAgIHRhcmdldHM6IGNka3RmLmxpc3RNYXBwZXIoc3NtY29udGFjdHNDb250YWN0UGxhblRhcmdldHNUb1RlcnJhZm9ybSkoc3RydWN0IS50YXJnZXRzKSxcbiAgfVxufVxuXG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3NzbWNvbnRhY3RzX2NvbnRhY3QuaHRtbCBhd3NjY19zc21jb250YWN0c19jb250YWN0fVxuKi9cbmV4cG9ydCBjbGFzcyBTc21jb250YWN0c0NvbnRhY3QgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NjY19zc21jb250YWN0c19jb250YWN0XCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3NzbWNvbnRhY3RzX2NvbnRhY3QuaHRtbCBhd3NjY19zc21jb250YWN0c19jb250YWN0fSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBTc21jb250YWN0c0NvbnRhY3RDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogU3NtY29udGFjdHNDb250YWN0Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NjY19zc21jb250YWN0c19jb250YWN0JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYWxpYXMgPSBjb25maWcuYWxpYXM7XG4gICAgdGhpcy5fZGlzcGxheU5hbWUgPSBjb25maWcuZGlzcGxheU5hbWU7XG4gICAgdGhpcy5fcGxhbiA9IGNvbmZpZy5wbGFuO1xuICAgIHRoaXMuX3R5cGUgPSBjb25maWcudHlwZTtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWxpYXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYWxpYXM6IHN0cmluZztcbiAgcHVibGljIGdldCBhbGlhcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FsaWFzJyk7XG4gIH1cbiAgcHVibGljIHNldCBhbGlhcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWxpYXMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxpYXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxpYXNcbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gZGlzcGxheV9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2Rpc3BsYXlOYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZGlzcGxheU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkaXNwbGF5X25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRpc3BsYXlOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kaXNwbGF5TmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkaXNwbGF5TmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5TmFtZVxuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBwbGFuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3BsYW46IFNzbWNvbnRhY3RzQ29udGFjdFBsYW5bXTtcbiAgcHVibGljIGdldCBwbGFuKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3BsYW4nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBwbGFuKHZhbHVlOiBTc21jb250YWN0c0NvbnRhY3RQbGFuW10pIHtcbiAgICB0aGlzLl9wbGFuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBsYW5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhblxuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90eXBlOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlXG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFsaWFzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hbGlhcyksXG4gICAgICBkaXNwbGF5X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Rpc3BsYXlOYW1lKSxcbiAgICAgIHBsYW46IGNka3RmLmxpc3RNYXBwZXIoc3NtY29udGFjdHNDb250YWN0UGxhblRvVGVycmFmb3JtKSh0aGlzLl9wbGFuKSxcbiAgICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3R5cGUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==