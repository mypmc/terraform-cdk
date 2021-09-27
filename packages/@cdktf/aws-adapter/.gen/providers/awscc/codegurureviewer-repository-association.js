"use strict";
// https://www.terraform.io/docs/providers/awscc/r/codegurureviewer_repository_association.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodegurureviewerRepositoryAssociation = exports.codegurureviewerRepositoryAssociationTagsToTerraform = void 0;
const cdktf = require("cdktf");
function codegurureviewerRepositoryAssociationTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.codegurureviewerRepositoryAssociationTagsToTerraform = codegurureviewerRepositoryAssociationTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/codegurureviewer_repository_association.html awscc_codegurureviewer_repository_association}
*/
class CodegurureviewerRepositoryAssociation extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/codegurureviewer_repository_association.html awscc_codegurureviewer_repository_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodegurureviewerRepositoryAssociationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_codegurureviewer_repository_association',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._bucketName = config.bucketName;
        this._connectionArn = config.connectionArn;
        this._name = config.name;
        this._owner = config.owner;
        this._tags = config.tags;
        this._type = config.type;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // association_arn - computed: true, optional: false, required: false
    get associationArn() {
        return this.getStringAttribute('association_arn');
    }
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    set bucketName(value) {
        this._bucketName = value;
    }
    resetBucketName() {
        this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bucketNameInput() {
        return this._bucketName;
    }
    get connectionArn() {
        return this.getStringAttribute('connection_arn');
    }
    set connectionArn(value) {
        this._connectionArn = value;
    }
    resetConnectionArn() {
        this._connectionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get connectionArnInput() {
        return this._connectionArn;
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
    get owner() {
        return this.getStringAttribute('owner');
    }
    set owner(value) {
        this._owner = value;
    }
    resetOwner() {
        this._owner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ownerInput() {
        return this._owner;
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
            bucket_name: cdktf.stringToTerraform(this._bucketName),
            connection_arn: cdktf.stringToTerraform(this._connectionArn),
            name: cdktf.stringToTerraform(this._name),
            owner: cdktf.stringToTerraform(this._owner),
            tags: cdktf.listMapper(codegurureviewerRepositoryAssociationTagsToTerraform)(this._tags),
            type: cdktf.stringToTerraform(this._type),
        };
    }
}
exports.CodegurureviewerRepositoryAssociation = CodegurureviewerRepositoryAssociation;
// =================
// STATIC PROPERTIES
// =================
CodegurureviewerRepositoryAssociation.tfResourceType = "awscc_codegurureviewer_repository_association";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZWd1cnVyZXZpZXdlci1yZXBvc2l0b3J5LWFzc29jaWF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29kZWd1cnVyZXZpZXdlci1yZXBvc2l0b3J5LWFzc29jaWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwrRkFBK0Y7QUFDL0YsMkNBQTJDOzs7QUFHM0MsK0JBQStCO0FBeUQvQixTQUFnQixvREFBb0QsQ0FBQyxNQUFrRDtJQUNySCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFORCxvSEFNQztBQUdEOztFQUVFO0FBQ0YsTUFBYSxxQ0FBc0MsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBT2hGLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQW1EO1FBQ2xHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsK0NBQStDO1lBQ3RFLDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsT0FBTzthQUN0QjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDckMsSUFB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QUFDLENBQUM7SUFDekMsQ0FBQztJQUNELElBQVcsSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ25CLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN0RCxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDNUQsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pDLEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMzQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEYsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzFDLENBQUM7SUFDSixDQUFDOztBQTFKSCxzRkEySkM7QUF6SkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyxvREFBYyxHQUFXLCtDQUErQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvY29kZWd1cnVyZXZpZXdlcl9yZXBvc2l0b3J5X2Fzc29jaWF0aW9uLmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBDb2RlZ3VydXJldmlld2VyUmVwb3NpdG9yeUFzc29jaWF0aW9uQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIFRoZSBuYW1lIG9mIHRoZSBTMyBidWNrZXQgYXNzb2NpYXRlZCB3aXRoIGFuIGFzc29jaWF0ZWQgUzMgcmVwb3NpdG9yeS4gSXQgbXVzdCBzdGFydCB3aXRoIGBjb2RlZ3VydS1yZXZpZXdlci1gLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvY29kZWd1cnVyZXZpZXdlcl9yZXBvc2l0b3J5X2Fzc29jaWF0aW9uLmh0bWwjYnVja2V0X25hbWUgQ29kZWd1cnVyZXZpZXdlclJlcG9zaXRvcnlBc3NvY2lhdGlvbiNidWNrZXRfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgYnVja2V0TmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogVGhlIEFtYXpvbiBSZXNvdXJjZSBOYW1lIChBUk4pIG9mIGFuIEFXUyBDb2RlU3RhciBDb25uZWN0aW9ucyBjb25uZWN0aW9uLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvY29kZWd1cnVyZXZpZXdlcl9yZXBvc2l0b3J5X2Fzc29jaWF0aW9uLmh0bWwjY29ubmVjdGlvbl9hcm4gQ29kZWd1cnVyZXZpZXdlclJlcG9zaXRvcnlBc3NvY2lhdGlvbiNjb25uZWN0aW9uX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgY29ubmVjdGlvbkFybj86IHN0cmluZztcbiAgLyoqXG4gICogTmFtZSBvZiB0aGUgcmVwb3NpdG9yeSB0byBiZSBhc3NvY2lhdGVkLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvY29kZWd1cnVyZXZpZXdlcl9yZXBvc2l0b3J5X2Fzc29jaWF0aW9uLmh0bWwjbmFtZSBDb2RlZ3VydXJldmlld2VyUmVwb3NpdG9yeUFzc29jaWF0aW9uI25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogVGhlIG93bmVyIG9mIHRoZSByZXBvc2l0b3J5LiBGb3IgYSBCaXRidWNrZXQgcmVwb3NpdG9yeSwgdGhpcyBpcyB0aGUgdXNlcm5hbWUgZm9yIHRoZSBhY2NvdW50IHRoYXQgb3ducyB0aGUgcmVwb3NpdG9yeS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2NvZGVndXJ1cmV2aWV3ZXJfcmVwb3NpdG9yeV9hc3NvY2lhdGlvbi5odG1sI293bmVyIENvZGVndXJ1cmV2aWV3ZXJSZXBvc2l0b3J5QXNzb2NpYXRpb24jb3duZXJ9XG4gICovXG4gIHJlYWRvbmx5IG93bmVyPzogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgdGFncyBhc3NvY2lhdGVkIHdpdGggYSByZXBvc2l0b3J5IGFzc29jaWF0aW9uLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvY29kZWd1cnVyZXZpZXdlcl9yZXBvc2l0b3J5X2Fzc29jaWF0aW9uLmh0bWwjdGFncyBDb2RlZ3VydXJldmlld2VyUmVwb3NpdG9yeUFzc29jaWF0aW9uI3RhZ3N9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3M/OiBDb2RlZ3VydXJldmlld2VyUmVwb3NpdG9yeUFzc29jaWF0aW9uVGFnc1tdO1xuICAvKipcbiAgKiBUaGUgdHlwZSBvZiByZXBvc2l0b3J5IHRvIGJlIGFzc29jaWF0ZWQuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9jb2RlZ3VydXJldmlld2VyX3JlcG9zaXRvcnlfYXNzb2NpYXRpb24uaHRtbCN0eXBlIENvZGVndXJ1cmV2aWV3ZXJSZXBvc2l0b3J5QXNzb2NpYXRpb24jdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBDb2RlZ3VydXJldmlld2VyUmVwb3NpdG9yeUFzc29jaWF0aW9uVGFncyB7XG4gIC8qKlxuICAqIFRoZSBrZXkgbmFtZSBvZiB0aGUgdGFnLiBZb3UgY2FuIHNwZWNpZnkgYSB2YWx1ZSB0aGF0IGlzIDEgdG8gMTI4IFVuaWNvZGUgY2hhcmFjdGVycyBpbiBsZW5ndGggYW5kIGNhbm5vdCBiZSBwcmVmaXhlZCB3aXRoIGF3czouIFRoZSBhbGxvd2VkIGNoYXJhY3RlcnMgYWNyb3NzIHNlcnZpY2VzIGFyZTogbGV0dGVycywgbnVtYmVycywgYW5kIHNwYWNlcyByZXByZXNlbnRhYmxlIGluIFVURi04LCBhbmQgdGhlIGZvbGxvd2luZyBjaGFyYWN0ZXJzOiArIC0gPSAuIF8gOiAvIEAuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9jb2RlZ3VydXJldmlld2VyX3JlcG9zaXRvcnlfYXNzb2NpYXRpb24uaHRtbCNrZXkgQ29kZWd1cnVyZXZpZXdlclJlcG9zaXRvcnlBc3NvY2lhdGlvbiNrZXl9XG4gICovXG4gIHJlYWRvbmx5IGtleTogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgdmFsdWUgZm9yIHRoZSB0YWcuIFlvdSBjYW4gc3BlY2lmeSBhIHZhbHVlIHRoYXQgaXMgMCB0byAyNTYgVW5pY29kZSBjaGFyYWN0ZXJzIGluIGxlbmd0aC4gVGhlIGFsbG93ZWQgY2hhcmFjdGVycyBhY3Jvc3Mgc2VydmljZXMgYXJlOiBsZXR0ZXJzLCBudW1iZXJzLCBhbmQgc3BhY2VzIHJlcHJlc2VudGFibGUgaW4gVVRGLTgsIGFuZCB0aGUgZm9sbG93aW5nIGNoYXJhY3RlcnM6ICsgLSA9IC4gXyA6IC8gQC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2NvZGVndXJ1cmV2aWV3ZXJfcmVwb3NpdG9yeV9hc3NvY2lhdGlvbi5odG1sI3ZhbHVlIENvZGVndXJ1cmV2aWV3ZXJSZXBvc2l0b3J5QXNzb2NpYXRpb24jdmFsdWV9XG4gICovXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2RlZ3VydXJldmlld2VyUmVwb3NpdG9yeUFzc29jaWF0aW9uVGFnc1RvVGVycmFmb3JtKHN0cnVjdD86IENvZGVndXJ1cmV2aWV3ZXJSZXBvc2l0b3J5QXNzb2NpYXRpb25UYWdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2NvZGVndXJ1cmV2aWV3ZXJfcmVwb3NpdG9yeV9hc3NvY2lhdGlvbi5odG1sIGF3c2NjX2NvZGVndXJ1cmV2aWV3ZXJfcmVwb3NpdG9yeV9hc3NvY2lhdGlvbn1cbiovXG5leHBvcnQgY2xhc3MgQ29kZWd1cnVyZXZpZXdlclJlcG9zaXRvcnlBc3NvY2lhdGlvbiBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX2NvZGVndXJ1cmV2aWV3ZXJfcmVwb3NpdG9yeV9hc3NvY2lhdGlvblwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9jb2RlZ3VydXJldmlld2VyX3JlcG9zaXRvcnlfYXNzb2NpYXRpb24uaHRtbCBhd3NjY19jb2RlZ3VydXJldmlld2VyX3JlcG9zaXRvcnlfYXNzb2NpYXRpb259IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIENvZGVndXJ1cmV2aWV3ZXJSZXBvc2l0b3J5QXNzb2NpYXRpb25Db25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQ29kZWd1cnVyZXZpZXdlclJlcG9zaXRvcnlBc3NvY2lhdGlvbkNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfY29kZWd1cnVyZXZpZXdlcl9yZXBvc2l0b3J5X2Fzc29jaWF0aW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYnVja2V0TmFtZSA9IGNvbmZpZy5idWNrZXROYW1lO1xuICAgIHRoaXMuX2Nvbm5lY3Rpb25Bcm4gPSBjb25maWcuY29ubmVjdGlvbkFybjtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fb3duZXIgPSBjb25maWcub3duZXI7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3R5cGUgPSBjb25maWcudHlwZTtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXNzb2NpYXRpb25fYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXNzb2NpYXRpb25Bcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhc3NvY2lhdGlvbl9hcm4nKTtcbiAgfVxuXG4gIC8vIGJ1Y2tldF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYnVja2V0TmFtZT86IHN0cmluZztcbiAgcHVibGljIGdldCBidWNrZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVja2V0X25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1Y2tldE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2J1Y2tldE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCdWNrZXROYW1lKCkge1xuICAgIHRoaXMuX2J1Y2tldE5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1Y2tldE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVja2V0TmFtZVxuICB9XG5cbiAgLy8gY29ubmVjdGlvbl9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb25uZWN0aW9uQXJuPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGNvbm5lY3Rpb25Bcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb25uZWN0aW9uX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29ubmVjdGlvbkFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29ubmVjdGlvbkFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbm5lY3Rpb25Bcm4oKSB7XG4gICAgdGhpcy5fY29ubmVjdGlvbkFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29ubmVjdGlvbkFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW9uQXJuXG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZVxuICB9XG5cbiAgLy8gb3duZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vd25lcj86IHN0cmluZztcbiAgcHVibGljIGdldCBvd25lcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ293bmVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBvd25lcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb3duZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPd25lcigpIHtcbiAgICB0aGlzLl9vd25lciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3duZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3duZXJcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogQ29kZWd1cnVyZXZpZXdlclJlcG9zaXRvcnlBc3NvY2lhdGlvblRhZ3NbXTtcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiBDb2RlZ3VydXJldmlld2VyUmVwb3NpdG9yeUFzc29jaWF0aW9uVGFnc1tdKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzXG4gIH1cblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3R5cGU6IHN0cmluZztcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0eXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGVcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYnVja2V0X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2J1Y2tldE5hbWUpLFxuICAgICAgY29ubmVjdGlvbl9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Nvbm5lY3Rpb25Bcm4pLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBvd25lcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fb3duZXIpLFxuICAgICAgdGFnczogY2RrdGYubGlzdE1hcHBlcihjb2RlZ3VydXJldmlld2VyUmVwb3NpdG9yeUFzc29jaWF0aW9uVGFnc1RvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3R5cGUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==