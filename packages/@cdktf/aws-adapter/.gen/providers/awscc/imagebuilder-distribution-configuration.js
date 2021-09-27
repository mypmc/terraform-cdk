"use strict";
// https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagebuilderDistributionConfiguration = exports.imagebuilderDistributionConfigurationDistributionsToTerraform = exports.imagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsToTerraform = exports.imagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationToTerraform = exports.imagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryToTerraform = exports.imagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationToTerraform = exports.imagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationToTerraform = void 0;
const cdktf = require("cdktf");
function imagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        user_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.userGroups),
        user_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.userIds),
    };
}
exports.imagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationToTerraform = imagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationToTerraform;
function imagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ami_tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.amiTags),
        description: cdktf.stringToTerraform(struct.description),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        launch_permission_configuration: imagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationToTerraform(struct.launchPermissionConfiguration),
        name: cdktf.stringToTerraform(struct.name),
        target_account_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.targetAccountIds),
    };
}
exports.imagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationToTerraform = imagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationToTerraform;
function imagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        repository_name: cdktf.stringToTerraform(struct.repositoryName),
        service: cdktf.stringToTerraform(struct.service),
    };
}
exports.imagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryToTerraform = imagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryToTerraform;
function imagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        container_tags: cdktf.listMapper(cdktf.stringToTerraform)(struct.containerTags),
        description: cdktf.stringToTerraform(struct.description),
        target_repository: imagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryToTerraform(struct.targetRepository),
    };
}
exports.imagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationToTerraform = imagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationToTerraform;
function imagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        account_id: cdktf.stringToTerraform(struct.accountId),
        launch_template_id: cdktf.stringToTerraform(struct.launchTemplateId),
        set_default_version: cdktf.booleanToTerraform(struct.setDefaultVersion),
    };
}
exports.imagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsToTerraform = imagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsToTerraform;
function imagebuilderDistributionConfigurationDistributionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ami_distribution_configuration: imagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationToTerraform(struct.amiDistributionConfiguration),
        container_distribution_configuration: imagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationToTerraform(struct.containerDistributionConfiguration),
        launch_template_configurations: cdktf.listMapper(imagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsToTerraform)(struct.launchTemplateConfigurations),
        license_configuration_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.licenseConfigurationArns),
        region: cdktf.stringToTerraform(struct.region),
    };
}
exports.imagebuilderDistributionConfigurationDistributionsToTerraform = imagebuilderDistributionConfigurationDistributionsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html awscc_imagebuilder_distribution_configuration}
*/
class ImagebuilderDistributionConfiguration extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html awscc_imagebuilder_distribution_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderDistributionConfigurationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_imagebuilder_distribution_configuration',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._description = config.description;
        this._distributions = config.distributions;
        this._name = config.name;
        this._tags = config.tags;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    get distributions() {
        return this.interpolationForAttribute('distributions');
    }
    set distributions(value) {
        this._distributions = value;
    }
    // Temporarily expose input value. Use with caution.
    get distributionsInput() {
        return this._distributions;
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            description: cdktf.stringToTerraform(this._description),
            distributions: cdktf.listMapper(imagebuilderDistributionConfigurationDistributionsToTerraform)(this._distributions),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        };
    }
}
exports.ImagebuilderDistributionConfiguration = ImagebuilderDistributionConfiguration;
// =================
// STATIC PROPERTIES
// =================
ImagebuilderDistributionConfiguration.tfResourceType = "awscc_imagebuilder_distribution_configuration";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VidWlsZGVyLWRpc3RyaWJ1dGlvbi1jb25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW1hZ2VidWlsZGVyLWRpc3RyaWJ1dGlvbi1jb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwrRkFBK0Y7QUFDL0YsMkNBQTJDOzs7QUFHM0MsK0JBQStCO0FBNkMvQixTQUFnQixzSEFBc0gsQ0FBQyxNQUFvSDtJQUN6UCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDMUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztLQUNyRSxDQUFBO0FBQ0gsQ0FBQztBQU5ELHdQQU1DO0FBeUNELFNBQWdCLHlGQUF5RixDQUFDLE1BQXVGO0lBQy9MLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsUUFBUSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDakUsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQ3pELFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztRQUNyRCwrQkFBK0IsRUFBRSxzSEFBc0gsQ0FBQyxNQUFPLENBQUMsNkJBQTZCLENBQUM7UUFDOUwsSUFBSSxFQUFFLEtB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QUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDekQsQ0FBQztJQUNKLENBQUM7O0FBdEhILHNGQXVIQztBQXJIQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLG9EQUFjLEdBQVcsK0NBQStDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9pbWFnZWJ1aWxkZXJfZGlzdHJpYnV0aW9uX2NvbmZpZ3VyYXRpb24uaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlYnVpbGRlckRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBkaXN0cmlidXRpb24gY29uZmlndXJhdGlvbi5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2ltYWdlYnVpbGRlcl9kaXN0cmlidXRpb25fY29uZmlndXJhdGlvbi5odG1sI2Rlc2NyaXB0aW9uIEltYWdlYnVpbGRlckRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb24jZGVzY3JpcHRpb259XG4gICovXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgZGlzdHJpYnV0aW9ucyBvZiB0aGUgZGlzdHJpYnV0aW9uIGNvbmZpZ3VyYXRpb24uXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9pbWFnZWJ1aWxkZXJfZGlzdHJpYnV0aW9uX2NvbmZpZ3VyYXRpb24uaHRtbCNkaXN0cmlidXRpb25zIEltYWdlYnVpbGRlckRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb24jZGlzdHJpYnV0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgZGlzdHJpYnV0aW9uczogSW1hZ2VidWlsZGVyRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbkRpc3RyaWJ1dGlvbnNbXTtcbiAgLyoqXG4gICogVGhlIG5hbWUgb2YgdGhlIGRpc3RyaWJ1dGlvbiBjb25maWd1cmF0aW9uLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvaW1hZ2VidWlsZGVyX2Rpc3RyaWJ1dGlvbl9jb25maWd1cmF0aW9uLmh0bWwjbmFtZSBJbWFnZWJ1aWxkZXJEaXN0cmlidXRpb25Db25maWd1cmF0aW9uI25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogVGhlIHRhZ3MgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb21wb25lbnQuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9pbWFnZWJ1aWxkZXJfZGlzdHJpYnV0aW9uX2NvbmZpZ3VyYXRpb24uaHRtbCN0YWdzIEltYWdlYnVpbGRlckRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb24jdGFnc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VidWlsZGVyRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbkRpc3RyaWJ1dGlvbnNBbWlEaXN0cmlidXRpb25Db25maWd1cmF0aW9uTGF1bmNoUGVybWlzc2lvbkNvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgKiBUaGUgbmFtZSBvZiB0aGUgZ3JvdXAuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9pbWFnZWJ1aWxkZXJfZGlzdHJpYnV0aW9uX2NvbmZpZ3VyYXRpb24uaHRtbCN1c2VyX2dyb3VwcyBJbWFnZWJ1aWxkZXJEaXN0cmlidXRpb25Db25maWd1cmF0aW9uI3VzZXJfZ3JvdXBzfVxuICAqL1xuICByZWFkb25seSB1c2VyR3JvdXBzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIFRoZSBBV1MgYWNjb3VudCBJRC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2ltYWdlYnVpbGRlcl9kaXN0cmlidXRpb25fY29uZmlndXJhdGlvbi5odG1sI3VzZXJfaWRzIEltYWdlYnVpbGRlckRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb24jdXNlcl9pZHN9XG4gICovXG4gIHJlYWRvbmx5IHVzZXJJZHM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGltYWdlYnVpbGRlckRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25EaXN0cmlidXRpb25zQW1pRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbkxhdW5jaFBlcm1pc3Npb25Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogSW1hZ2VidWlsZGVyRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbkRpc3RyaWJ1dGlvbnNBbWlEaXN0cmlidXRpb25Db25maWd1cmF0aW9uTGF1bmNoUGVybWlzc2lvbkNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdXNlcl9ncm91cHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEudXNlckdyb3VwcyksXG4gICAgdXNlcl9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEudXNlcklkcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbWFnZWJ1aWxkZXJEaXN0cmlidXRpb25Db25maWd1cmF0aW9uRGlzdHJpYnV0aW9uc0FtaURpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgKiBUaGUgdGFncyB0byBhcHBseSB0byBBTUlzIGRpc3RyaWJ1dGVkIHRvIHRoaXMgUmVnaW9uLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvaW1hZ2VidWlsZGVyX2Rpc3RyaWJ1dGlvbl9jb25maWd1cmF0aW9uLmh0bWwjYW1pX3RhZ3MgSW1hZ2VidWlsZGVyRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbiNhbWlfdGFnc31cbiAgKi9cbiAgcmVhZG9ubHkgYW1pVGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBBTUkgZGlzdHJpYnV0aW9uIGNvbmZpZ3VyYXRpb24uXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9pbWFnZWJ1aWxkZXJfZGlzdHJpYnV0aW9uX2NvbmZpZ3VyYXRpb24uaHRtbCNkZXNjcmlwdGlvbiBJbWFnZWJ1aWxkZXJEaXN0cmlidXRpb25Db25maWd1cmF0aW9uI2Rlc2NyaXB0aW9ufVxuICAqL1xuICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICogVGhlIEtNUyBrZXkgaWRlbnRpZmllciB1c2VkIHRvIGVuY3J5cHQgdGhlIGRpc3RyaWJ1dGVkIGltYWdlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvaW1hZ2VidWlsZGVyX2Rpc3RyaWJ1dGlvbl9jb25maWd1cmF0aW9uLmh0bWwja21zX2tleV9pZCBJbWFnZWJ1aWxkZXJEaXN0cmlidXRpb25Db25maWd1cmF0aW9uI2ttc19rZXlfaWR9XG4gICovXG4gIHJlYWRvbmx5IGttc0tleUlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBMYXVuY2ggcGVybWlzc2lvbnMgY2FuIGJlIHVzZWQgdG8gY29uZmlndXJlIHdoaWNoIEFXUyBhY2NvdW50cyBjYW4gdXNlIHRoZSBBTUkgdG8gbGF1bmNoIGluc3RhbmNlcy5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2ltYWdlYnVpbGRlcl9kaXN0cmlidXRpb25fY29uZmlndXJhdGlvbi5odG1sI2xhdW5jaF9wZXJtaXNzaW9uX2NvbmZpZ3VyYXRpb24gSW1hZ2VidWlsZGVyRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbiNsYXVuY2hfcGVybWlzc2lvbl9jb25maWd1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSBsYXVuY2hQZXJtaXNzaW9uQ29uZmlndXJhdGlvbj86IEltYWdlYnVpbGRlckRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25EaXN0cmlidXRpb25zQW1pRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbkxhdW5jaFBlcm1pc3Npb25Db25maWd1cmF0aW9uO1xuICAvKipcbiAgKiBUaGUgbmFtZSBvZiB0aGUgQU1JIGRpc3RyaWJ1dGlvbiBjb25maWd1cmF0aW9uLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvaW1hZ2VidWlsZGVyX2Rpc3RyaWJ1dGlvbl9jb25maWd1cmF0aW9uLmh0bWwjbmFtZSBJbWFnZWJ1aWxkZXJEaXN0cmlidXRpb25Db25maWd1cmF0aW9uI25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFRoZSBJRCBvZiBhY2NvdW50cyB0byB3aGljaCB5b3Ugd2FudCB0byBkaXN0cmlidXRlIGFuIGltYWdlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvaW1hZ2VidWlsZGVyX2Rpc3RyaWJ1dGlvbl9jb25maWd1cmF0aW9uLmh0bWwjdGFyZ2V0X2FjY291bnRfaWRzIEltYWdlYnVpbGRlckRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb24jdGFyZ2V0X2FjY291bnRfaWRzfVxuICAqL1xuICByZWFkb25seSB0YXJnZXRBY2NvdW50SWRzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbWFnZWJ1aWxkZXJEaXN0cmlidXRpb25Db25maWd1cmF0aW9uRGlzdHJpYnV0aW9uc0FtaURpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBJbWFnZWJ1aWxkZXJEaXN0cmlidXRpb25Db25maWd1cmF0aW9uRGlzdHJpYnV0aW9uc0FtaURpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYW1pX3RhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHN0cnVjdCEuYW1pVGFncyksXG4gICAgZGVzY3JpcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVzY3JpcHRpb24pLFxuICAgIGttc19rZXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua21zS2V5SWQpLFxuICAgIGxhdW5jaF9wZXJtaXNzaW9uX2NvbmZpZ3VyYXRpb246IGltYWdlYnVpbGRlckRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25EaXN0cmlidXRpb25zQW1pRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbkxhdW5jaFBlcm1pc3Npb25Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5sYXVuY2hQZXJtaXNzaW9uQ29uZmlndXJhdGlvbiksXG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICB0YXJnZXRfYWNjb3VudF9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEudGFyZ2V0QWNjb3VudElkcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbWFnZWJ1aWxkZXJEaXN0cmlidXRpb25Db25maWd1cmF0aW9uRGlzdHJpYnV0aW9uc0NvbnRhaW5lckRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25UYXJnZXRSZXBvc2l0b3J5IHtcbiAgLyoqXG4gICogVGhlIHJlcG9zaXRvcnkgbmFtZSBvZiB0YXJnZXQgY29udGFpbmVyIHJlcG9zaXRvcnkuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9pbWFnZWJ1aWxkZXJfZGlzdHJpYnV0aW9uX2NvbmZpZ3VyYXRpb24uaHRtbCNyZXBvc2l0b3J5X25hbWUgSW1hZ2VidWlsZGVyRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbiNyZXBvc2l0b3J5X25hbWV9XG4gICovXG4gIHJlYWRvbmx5IHJlcG9zaXRvcnlOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgc2VydmljZSBvZiB0YXJnZXQgY29udGFpbmVyIHJlcG9zaXRvcnkuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9pbWFnZWJ1aWxkZXJfZGlzdHJpYnV0aW9uX2NvbmZpZ3VyYXRpb24uaHRtbCNzZXJ2aWNlIEltYWdlYnVpbGRlckRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb24jc2VydmljZX1cbiAgKi9cbiAgcmVhZG9ubHkgc2VydmljZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGltYWdlYnVpbGRlckRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25EaXN0cmlidXRpb25zQ29udGFpbmVyRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvblRhcmdldFJlcG9zaXRvcnlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBJbWFnZWJ1aWxkZXJEaXN0cmlidXRpb25Db25maWd1cmF0aW9uRGlzdHJpYnV0aW9uc0NvbnRhaW5lckRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25UYXJnZXRSZXBvc2l0b3J5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHJlcG9zaXRvcnlfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXBvc2l0b3J5TmFtZSksXG4gICAgc2VydmljZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZXJ2aWNlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlYnVpbGRlckRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25EaXN0cmlidXRpb25zQ29udGFpbmVyRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbiB7XG4gIC8qKlxuICAqIFRhZ3MgdGhhdCBhcmUgYXR0YWNoZWQgdG8gdGhlIGNvbnRhaW5lciBkaXN0cmlidXRpb24gY29uZmlndXJhdGlvbi5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2ltYWdlYnVpbGRlcl9kaXN0cmlidXRpb25fY29uZmlndXJhdGlvbi5odG1sI2NvbnRhaW5lcl90YWdzIEltYWdlYnVpbGRlckRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb24jY29udGFpbmVyX3RhZ3N9XG4gICovXG4gIHJlYWRvbmx5IGNvbnRhaW5lclRhZ3M/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBjb250YWluZXIgZGlzdHJpYnV0aW9uIGNvbmZpZ3VyYXRpb24uXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9pbWFnZWJ1aWxkZXJfZGlzdHJpYnV0aW9uX2NvbmZpZ3VyYXRpb24uaHRtbCNkZXNjcmlwdGlvbiBJbWFnZWJ1aWxkZXJEaXN0cmlidXRpb25Db25maWd1cmF0aW9uI2Rlc2NyaXB0aW9ufVxuICAqL1xuICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICogVGhlIGRlc3RpbmF0aW9uIHJlcG9zaXRvcnkgZm9yIHRoZSBjb250YWluZXIgaW1hZ2UuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9pbWFnZWJ1aWxkZXJfZGlzdHJpYnV0aW9uX2NvbmZpZ3VyYXRpb24uaHRtbCN0YXJnZXRfcmVwb3NpdG9yeSBJbWFnZWJ1aWxkZXJEaXN0cmlidXRpb25Db25maWd1cmF0aW9uI3RhcmdldF9yZXBvc2l0b3J5fVxuICAqL1xuICByZWFkb25seSB0YXJnZXRSZXBvc2l0b3J5PzogSW1hZ2VidWlsZGVyRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbkRpc3RyaWJ1dGlvbnNDb250YWluZXJEaXN0cmlidXRpb25Db25maWd1cmF0aW9uVGFyZ2V0UmVwb3NpdG9yeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGltYWdlYnVpbGRlckRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25EaXN0cmlidXRpb25zQ29udGFpbmVyRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEltYWdlYnVpbGRlckRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25EaXN0cmlidXRpb25zQ29udGFpbmVyRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXJfdGFnczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5jb250YWluZXJUYWdzKSxcbiAgICBkZXNjcmlwdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXNjcmlwdGlvbiksXG4gICAgdGFyZ2V0X3JlcG9zaXRvcnk6IGltYWdlYnVpbGRlckRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25EaXN0cmlidXRpb25zQ29udGFpbmVyRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvblRhcmdldFJlcG9zaXRvcnlUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhcmdldFJlcG9zaXRvcnkpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VidWlsZGVyRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbkRpc3RyaWJ1dGlvbnNMYXVuY2hUZW1wbGF0ZUNvbmZpZ3VyYXRpb25zIHtcbiAgLyoqXG4gICogVGhlIGFjY291bnQgSUQgdGhhdCB0aGlzIGNvbmZpZ3VyYXRpb24gYXBwbGllcyB0by5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2ltYWdlYnVpbGRlcl9kaXN0cmlidXRpb25fY29uZmlndXJhdGlvbi5odG1sI2FjY291bnRfaWQgSW1hZ2VidWlsZGVyRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbiNhY2NvdW50X2lkfVxuICAqL1xuICByZWFkb25seSBhY2NvdW50SWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIElkZW50aWZpZXMgdGhlIEVDMiBsYXVuY2ggdGVtcGxhdGUgdG8gdXNlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvaW1hZ2VidWlsZGVyX2Rpc3RyaWJ1dGlvbl9jb25maWd1cmF0aW9uLmh0bWwjbGF1bmNoX3RlbXBsYXRlX2lkIEltYWdlYnVpbGRlckRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb24jbGF1bmNoX3RlbXBsYXRlX2lkfVxuICAqL1xuICByZWFkb25seSBsYXVuY2hUZW1wbGF0ZUlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBTZXQgdGhlIHNwZWNpZmllZCBFQzIgbGF1bmNoIHRlbXBsYXRlIGFzIHRoZSBkZWZhdWx0IGxhdW5jaCB0ZW1wbGF0ZSBmb3IgdGhlIHNwZWNpZmllZCBhY2NvdW50LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvaW1hZ2VidWlsZGVyX2Rpc3RyaWJ1dGlvbl9jb25maWd1cmF0aW9uLmh0bWwjc2V0X2RlZmF1bHRfdmVyc2lvbiBJbWFnZWJ1aWxkZXJEaXN0cmlidXRpb25Db25maWd1cmF0aW9uI3NldF9kZWZhdWx0X3ZlcnNpb259XG4gICovXG4gIHJlYWRvbmx5IHNldERlZmF1bHRWZXJzaW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW1hZ2VidWlsZGVyRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbkRpc3RyaWJ1dGlvbnNMYXVuY2hUZW1wbGF0ZUNvbmZpZ3VyYXRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogSW1hZ2VidWlsZGVyRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbkRpc3RyaWJ1dGlvbnNMYXVuY2hUZW1wbGF0ZUNvbmZpZ3VyYXRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFjY291bnRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWNjb3VudElkKSxcbiAgICBsYXVuY2hfdGVtcGxhdGVfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubGF1bmNoVGVtcGxhdGVJZCksXG4gICAgc2V0X2RlZmF1bHRfdmVyc2lvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuc2V0RGVmYXVsdFZlcnNpb24pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VidWlsZGVyRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbkRpc3RyaWJ1dGlvbnMge1xuICAvKipcbiAgKiBUaGUgc3BlY2lmaWMgQU1JIHNldHRpbmdzIChmb3IgZXhhbXBsZSwgbGF1bmNoIHBlcm1pc3Npb25zLCBBTUkgdGFncykuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9pbWFnZWJ1aWxkZXJfZGlzdHJpYnV0aW9uX2NvbmZpZ3VyYXRpb24uaHRtbCNhbWlfZGlzdHJpYnV0aW9uX2NvbmZpZ3VyYXRpb24gSW1hZ2VidWlsZGVyRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbiNhbWlfZGlzdHJpYnV0aW9uX2NvbmZpZ3VyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGFtaURpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb24/OiBJbWFnZWJ1aWxkZXJEaXN0cmlidXRpb25Db25maWd1cmF0aW9uRGlzdHJpYnV0aW9uc0FtaURpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb247XG4gIC8qKlxuICAqIENvbnRhaW5lciBkaXN0cmlidXRpb24gc2V0dGluZ3MgZm9yIGVuY3J5cHRpb24sIGxpY2Vuc2luZywgYW5kIHNoYXJpbmcgaW4gYSBzcGVjaWZpYyBSZWdpb24uXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9pbWFnZWJ1aWxkZXJfZGlzdHJpYnV0aW9uX2NvbmZpZ3VyYXRpb24uaHRtbCNjb250YWluZXJfZGlzdHJpYnV0aW9uX2NvbmZpZ3VyYXRpb24gSW1hZ2VidWlsZGVyRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbiNjb250YWluZXJfZGlzdHJpYnV0aW9uX2NvbmZpZ3VyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGNvbnRhaW5lckRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb24/OiBJbWFnZWJ1aWxkZXJEaXN0cmlidXRpb25Db25maWd1cmF0aW9uRGlzdHJpYnV0aW9uc0NvbnRhaW5lckRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb247XG4gIC8qKlxuICAqIEEgZ3JvdXAgb2YgbGF1bmNoVGVtcGxhdGVDb25maWd1cmF0aW9uIHNldHRpbmdzIHRoYXQgYXBwbHkgdG8gaW1hZ2UgZGlzdHJpYnV0aW9uLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvaW1hZ2VidWlsZGVyX2Rpc3RyaWJ1dGlvbl9jb25maWd1cmF0aW9uLmh0bWwjbGF1bmNoX3RlbXBsYXRlX2NvbmZpZ3VyYXRpb25zIEltYWdlYnVpbGRlckRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb24jbGF1bmNoX3RlbXBsYXRlX2NvbmZpZ3VyYXRpb25zfVxuICAqL1xuICByZWFkb25seSBsYXVuY2hUZW1wbGF0ZUNvbmZpZ3VyYXRpb25zPzogSW1hZ2VidWlsZGVyRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbkRpc3RyaWJ1dGlvbnNMYXVuY2hUZW1wbGF0ZUNvbmZpZ3VyYXRpb25zW107XG4gIC8qKlxuICAqIFRoZSBMaWNlbnNlIE1hbmFnZXIgQ29uZmlndXJhdGlvbiB0byBhc3NvY2lhdGUgd2l0aCB0aGUgQU1JIGluIHRoZSBzcGVjaWZpZWQgUmVnaW9uLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvaW1hZ2VidWlsZGVyX2Rpc3RyaWJ1dGlvbl9jb25maWd1cmF0aW9uLmh0bWwjbGljZW5zZV9jb25maWd1cmF0aW9uX2FybnMgSW1hZ2VidWlsZGVyRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbiNsaWNlbnNlX2NvbmZpZ3VyYXRpb25fYXJuc31cbiAgKi9cbiAgcmVhZG9ubHkgbGljZW5zZUNvbmZpZ3VyYXRpb25Bcm5zPzogc3RyaW5nW107XG4gIC8qKlxuICAqIHJlZ2lvblxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvaW1hZ2VidWlsZGVyX2Rpc3RyaWJ1dGlvbl9jb25maWd1cmF0aW9uLmh0bWwjcmVnaW9uIEltYWdlYnVpbGRlckRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb24jcmVnaW9ufVxuICAqL1xuICByZWFkb25seSByZWdpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGltYWdlYnVpbGRlckRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25EaXN0cmlidXRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogSW1hZ2VidWlsZGVyRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbkRpc3RyaWJ1dGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYW1pX2Rpc3RyaWJ1dGlvbl9jb25maWd1cmF0aW9uOiBpbWFnZWJ1aWxkZXJEaXN0cmlidXRpb25Db25maWd1cmF0aW9uRGlzdHJpYnV0aW9uc0FtaURpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmFtaURpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb24pLFxuICAgIGNvbnRhaW5lcl9kaXN0cmlidXRpb25fY29uZmlndXJhdGlvbjogaW1hZ2VidWlsZGVyRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbkRpc3RyaWJ1dGlvbnNDb250YWluZXJEaXN0cmlidXRpb25Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5jb250YWluZXJEaXN0cmlidXRpb25Db25maWd1cmF0aW9uKSxcbiAgICBsYXVuY2hfdGVtcGxhdGVfY29uZmlndXJhdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIoaW1hZ2VidWlsZGVyRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbkRpc3RyaWJ1dGlvbnNMYXVuY2hUZW1wbGF0ZUNvbmZpZ3VyYXRpb25zVG9UZXJyYWZvcm0pKHN0cnVjdCEubGF1bmNoVGVtcGxhdGVDb25maWd1cmF0aW9ucyksXG4gICAgbGljZW5zZV9jb25maWd1cmF0aW9uX2FybnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEubGljZW5zZUNvbmZpZ3VyYXRpb25Bcm5zKSxcbiAgICByZWdpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVnaW9uKSxcbiAgfVxufVxuXG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2ltYWdlYnVpbGRlcl9kaXN0cmlidXRpb25fY29uZmlndXJhdGlvbi5odG1sIGF3c2NjX2ltYWdlYnVpbGRlcl9kaXN0cmlidXRpb25fY29uZmlndXJhdGlvbn1cbiovXG5leHBvcnQgY2xhc3MgSW1hZ2VidWlsZGVyRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX2ltYWdlYnVpbGRlcl9kaXN0cmlidXRpb25fY29uZmlndXJhdGlvblwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9pbWFnZWJ1aWxkZXJfZGlzdHJpYnV0aW9uX2NvbmZpZ3VyYXRpb24uaHRtbCBhd3NjY19pbWFnZWJ1aWxkZXJfZGlzdHJpYnV0aW9uX2NvbmZpZ3VyYXRpb259IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIEltYWdlYnVpbGRlckRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25Db25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogSW1hZ2VidWlsZGVyRGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbkNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfaW1hZ2VidWlsZGVyX2Rpc3RyaWJ1dGlvbl9jb25maWd1cmF0aW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBjb25maWcuZGVzY3JpcHRpb247XG4gICAgdGhpcy5fZGlzdHJpYnV0aW9ucyA9IGNvbmZpZy5kaXN0cmlidXRpb25zO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXNjcmlwdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlc2NyaXB0aW9uKCkge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvblxuICB9XG5cbiAgLy8gZGlzdHJpYnV0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kaXN0cmlidXRpb25zOiBJbWFnZWJ1aWxkZXJEaXN0cmlidXRpb25Db25maWd1cmF0aW9uRGlzdHJpYnV0aW9uc1tdO1xuICBwdWJsaWMgZ2V0IGRpc3RyaWJ1dGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGlzdHJpYnV0aW9ucycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGRpc3RyaWJ1dGlvbnModmFsdWU6IEltYWdlYnVpbGRlckRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25EaXN0cmlidXRpb25zW10pIHtcbiAgICB0aGlzLl9kaXN0cmlidXRpb25zID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRpc3RyaWJ1dGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzdHJpYnV0aW9uc1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUgKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzXG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlc2NyaXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZXNjcmlwdGlvbiksXG4gICAgICBkaXN0cmlidXRpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGltYWdlYnVpbGRlckRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25EaXN0cmlidXRpb25zVG9UZXJyYWZvcm0pKHRoaXMuX2Rpc3RyaWJ1dGlvbnMpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICB9O1xuICB9XG59XG4iXX0=