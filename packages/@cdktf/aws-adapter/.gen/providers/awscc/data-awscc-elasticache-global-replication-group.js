"use strict";
// https://www.terraform.io/docs/providers/awscc/d/elasticache_global_replication_group.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccElasticacheGlobalReplicationGroup = exports.dataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsToTerraform = exports.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations = exports.dataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsToTerraform = exports.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations = exports.dataAwsccElasticacheGlobalReplicationGroupMembersToTerraform = exports.DataAwsccElasticacheGlobalReplicationGroupMembers = void 0;
const cdktf = require("cdktf");
class DataAwsccElasticacheGlobalReplicationGroupMembers extends cdktf.ComplexComputedList {
    // replication_group_id - computed: true, optional: false, required: false
    get replicationGroupId() {
        return this.getStringAttribute('replication_group_id');
    }
    // replication_group_region - computed: true, optional: false, required: false
    get replicationGroupRegion() {
        return this.getStringAttribute('replication_group_region');
    }
    // role - computed: true, optional: false, required: false
    get role() {
        return this.getStringAttribute('role');
    }
}
exports.DataAwsccElasticacheGlobalReplicationGroupMembers = DataAwsccElasticacheGlobalReplicationGroupMembers;
function dataAwsccElasticacheGlobalReplicationGroupMembersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        replication_group_id: cdktf.stringToTerraform(struct.replicationGroupId),
        replication_group_region: cdktf.stringToTerraform(struct.replicationGroupRegion),
        role: cdktf.stringToTerraform(struct.role),
    };
}
exports.dataAwsccElasticacheGlobalReplicationGroupMembersToTerraform = dataAwsccElasticacheGlobalReplicationGroupMembersToTerraform;
class DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations extends cdktf.ComplexComputedList {
    // node_group_id - computed: true, optional: false, required: false
    get nodeGroupId() {
        return this.getStringAttribute('node_group_id');
    }
    // preferred_availability_zones - computed: true, optional: false, required: false
    get preferredAvailabilityZones() {
        return this.getListAttribute('preferred_availability_zones');
    }
}
exports.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations = DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations;
function dataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        node_group_id: cdktf.stringToTerraform(struct.nodeGroupId),
        preferred_availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(struct.preferredAvailabilityZones),
    };
}
exports.dataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsToTerraform = dataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsToTerraform;
class DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations extends cdktf.ComplexComputedList {
    // replication_group_id - computed: true, optional: false, required: false
    get replicationGroupId() {
        return this.getStringAttribute('replication_group_id');
    }
    // replication_group_region - computed: true, optional: false, required: false
    get replicationGroupRegion() {
        return this.getStringAttribute('replication_group_region');
    }
    // resharding_configurations - computed: true, optional: false, required: false
    get reshardingConfigurations() {
        return this.interpolationForAttribute('resharding_configurations');
    }
}
exports.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations = DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations;
function dataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        replication_group_id: cdktf.stringToTerraform(struct.replicationGroupId),
        replication_group_region: cdktf.stringToTerraform(struct.replicationGroupRegion),
        resharding_configurations: cdktf.listMapper(dataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsToTerraform)(struct.reshardingConfigurations),
    };
}
exports.dataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsToTerraform = dataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/elasticache_global_replication_group.html awscc_elasticache_global_replication_group}
*/
class DataAwsccElasticacheGlobalReplicationGroup extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/elasticache_global_replication_group.html awscc_elasticache_global_replication_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccElasticacheGlobalReplicationGroupConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_elasticache_global_replication_group',
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
    // automatic_failover_enabled - computed: true, optional: false, required: false
    get automaticFailoverEnabled() {
        return this.getBooleanAttribute('automatic_failover_enabled');
    }
    // cache_node_type - computed: true, optional: false, required: false
    get cacheNodeType() {
        return this.getStringAttribute('cache_node_type');
    }
    // cache_parameter_group_name - computed: true, optional: false, required: false
    get cacheParameterGroupName() {
        return this.getStringAttribute('cache_parameter_group_name');
    }
    // engine_version - computed: true, optional: false, required: false
    get engineVersion() {
        return this.getStringAttribute('engine_version');
    }
    // global_node_group_count - computed: true, optional: false, required: false
    get globalNodeGroupCount() {
        return this.getNumberAttribute('global_node_group_count');
    }
    // global_replication_group_description - computed: true, optional: false, required: false
    get globalReplicationGroupDescription() {
        return this.getStringAttribute('global_replication_group_description');
    }
    // global_replication_group_id - computed: true, optional: false, required: false
    get globalReplicationGroupId() {
        return this.getStringAttribute('global_replication_group_id');
    }
    // global_replication_group_id_suffix - computed: true, optional: false, required: false
    get globalReplicationGroupIdSuffix() {
        return this.getStringAttribute('global_replication_group_id_suffix');
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
    // members - computed: true, optional: false, required: false
    get members() {
        return this.interpolationForAttribute('members');
    }
    // regional_configurations - computed: true, optional: false, required: false
    get regionalConfigurations() {
        return this.interpolationForAttribute('regional_configurations');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
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
exports.DataAwsccElasticacheGlobalReplicationGroup = DataAwsccElasticacheGlobalReplicationGroup;
// =================
// STATIC PROPERTIES
// =================
DataAwsccElasticacheGlobalReplicationGroup.tfResourceType = "awscc_elasticache_global_replication_group";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1lbGFzdGljYWNoZS1nbG9iYWwtcmVwbGljYXRpb24tZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhLWF3c2NjLWVsYXN0aWNhY2hlLWdsb2JhbC1yZXBsaWNhdGlvbi1ncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEZBQTRGO0FBQzVGLDJDQUEyQzs7O0FBRzNDLCtCQUErQjtBQVkvQixNQUFhLGlEQUFrRCxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFOUYsMEVBQTBFO0lBQzFFLElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELDhFQUE4RTtJQUM5RSxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCwwREFBMEQ7SUFDMUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNGO0FBaEJELDhHQWdCQztBQUVELFNBQWdCLDREQUE0RCxDQUFDLE1BQTBEO0lBQ3JJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxrQkFBa0IsQ0FBQztRQUN6RSx3QkFBd0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQ2pGLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztLQUM1QyxDQUFBO0FBQ0gsQ0FBQztBQVBELG9JQU9DO0FBRUQsTUFBYSx3RkFBeUYsU0FBUSxLQUFL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UUFDL0IsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMseUJBQXlCLENBQVEsQ0FBQztJQUMxRSxDQUFDO0lBRUQsNERBQTREO0lBQzVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLEVBQUUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUN0QyxDQUFDO0lBQ0osQ0FBQzs7QUFoSEgsZ0dBaUhDO0FBL0dDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0cseURBQWMsR0FBVyw0Q0FBNEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2VsYXN0aWNhY2hlX2dsb2JhbF9yZXBsaWNhdGlvbl9ncm91cC5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c2NjRWxhc3RpY2FjaGVHbG9iYWxSZXBsaWNhdGlvbkdyb3VwQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIFVuaXF1ZWx5IGlkZW50aWZpZXMgdGhlIHJlc291cmNlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvZWxhc3RpY2FjaGVfZ2xvYmFsX3JlcGxpY2F0aW9uX2dyb3VwLmh0bWwjaWQgRGF0YUF3c2NjRWxhc3RpY2FjaGVHbG9iYWxSZXBsaWNhdGlvbkdyb3VwI2lkfVxuICAqL1xuICByZWFkb25seSBpZDogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VsYXN0aWNhY2hlR2xvYmFsUmVwbGljYXRpb25Hcm91cE1lbWJlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyByZXBsaWNhdGlvbl9ncm91cF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlcGxpY2F0aW9uR3JvdXBJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlcGxpY2F0aW9uX2dyb3VwX2lkJyk7XG4gIH1cblxuICAvLyByZXBsaWNhdGlvbl9ncm91cF9yZWdpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZXBsaWNhdGlvbkdyb3VwUmVnaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVwbGljYXRpb25fZ3JvdXBfcmVnaW9uJyk7XG4gIH1cblxuICAvLyByb2xlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWxhc3RpY2FjaGVHbG9iYWxSZXBsaWNhdGlvbkdyb3VwTWVtYmVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VsYXN0aWNhY2hlR2xvYmFsUmVwbGljYXRpb25Hcm91cE1lbWJlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcmVwbGljYXRpb25fZ3JvdXBfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVwbGljYXRpb25Hcm91cElkKSxcbiAgICByZXBsaWNhdGlvbl9ncm91cF9yZWdpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVwbGljYXRpb25Hcm91cFJlZ2lvbiksXG4gICAgcm9sZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWxhc3RpY2FjaGVHbG9iYWxSZXBsaWNhdGlvbkdyb3VwUmVnaW9uYWxDb25maWd1cmF0aW9uc1Jlc2hhcmRpbmdDb25maWd1cmF0aW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG5vZGVfZ3JvdXBfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBub2RlR3JvdXBJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25vZGVfZ3JvdXBfaWQnKTtcbiAgfVxuXG4gIC8vIHByZWZlcnJlZF9hdmFpbGFiaWxpdHlfem9uZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcmVmZXJyZWRBdmFpbGFiaWxpdHlab25lcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdwcmVmZXJyZWRfYXZhaWxhYmlsaXR5X3pvbmVzJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VsYXN0aWNhY2hlR2xvYmFsUmVwbGljYXRpb25Hcm91cFJlZ2lvbmFsQ29uZmlndXJhdGlvbnNSZXNoYXJkaW5nQ29uZmlndXJhdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFbGFzdGljYWNoZUdsb2JhbFJlcGxpY2F0aW9uR3JvdXBSZWdpb25hbENvbmZpZ3VyYXRpb25zUmVzaGFyZGluZ0NvbmZpZ3VyYXRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG5vZGVfZ3JvdXBfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubm9kZUdyb3VwSWQpLFxuICAgIHByZWZlcnJlZF9hdmFpbGFiaWxpdHlfem9uZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEucHJlZmVycmVkQXZhaWxhYmlsaXR5Wm9uZXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFbGFzdGljYWNoZUdsb2JhbFJlcGxpY2F0aW9uR3JvdXBSZWdpb25hbENvbmZpZ3VyYXRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gcmVwbGljYXRpb25fZ3JvdXBfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZXBsaWNhdGlvbkdyb3VwSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXBsaWNhdGlvbl9ncm91cF9pZCcpO1xuICB9XG5cbiAgLy8gcmVwbGljYXRpb25fZ3JvdXBfcmVnaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVwbGljYXRpb25Hcm91cFJlZ2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlcGxpY2F0aW9uX2dyb3VwX3JlZ2lvbicpO1xuICB9XG5cbiAgLy8gcmVzaGFyZGluZ19jb25maWd1cmF0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlc2hhcmRpbmdDb25maWd1cmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXNoYXJkaW5nX2NvbmZpZ3VyYXRpb25zJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFbGFzdGljYWNoZUdsb2JhbFJlcGxpY2F0aW9uR3JvdXBSZWdpb25hbENvbmZpZ3VyYXRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWxhc3RpY2FjaGVHbG9iYWxSZXBsaWNhdGlvbkdyb3VwUmVnaW9uYWxDb25maWd1cmF0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICByZXBsaWNhdGlvbl9ncm91cF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXBsaWNhdGlvbkdyb3VwSWQpLFxuICAgIHJlcGxpY2F0aW9uX2dyb3VwX3JlZ2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXBsaWNhdGlvbkdyb3VwUmVnaW9uKSxcbiAgICByZXNoYXJkaW5nX2NvbmZpZ3VyYXRpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0VsYXN0aWNhY2hlR2xvYmFsUmVwbGljYXRpb25Hcm91cFJlZ2lvbmFsQ29uZmlndXJhdGlvbnNSZXNoYXJkaW5nQ29uZmlndXJhdGlvbnNUb1RlcnJhZm9ybSkoc3RydWN0IS5yZXNoYXJkaW5nQ29uZmlndXJhdGlvbnMpLFxuICB9XG59XG5cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvZWxhc3RpY2FjaGVfZ2xvYmFsX3JlcGxpY2F0aW9uX2dyb3VwLmh0bWwgYXdzY2NfZWxhc3RpY2FjaGVfZ2xvYmFsX3JlcGxpY2F0aW9uX2dyb3VwfVxuKi9cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFbGFzdGljYWNoZUdsb2JhbFJlcGxpY2F0aW9uR3JvdXAgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX2VsYXN0aWNhY2hlX2dsb2JhbF9yZXBsaWNhdGlvbl9ncm91cFwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9lbGFzdGljYWNoZV9nbG9iYWxfcmVwbGljYXRpb25fZ3JvdXAuaHRtbCBhd3NjY19lbGFzdGljYWNoZV9nbG9iYWxfcmVwbGljYXRpb25fZ3JvdXB9IERhdGEgU291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIERhdGFBd3NjY0VsYXN0aWNhY2hlR2xvYmFsUmVwbGljYXRpb25Hcm91cENvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzY2NFbGFzdGljYWNoZUdsb2JhbFJlcGxpY2F0aW9uR3JvdXBDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c2NjX2VsYXN0aWNhY2hlX2dsb2JhbF9yZXBsaWNhdGlvbl9ncm91cCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3NjYydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhdXRvbWF0aWNfZmFpbG92ZXJfZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF1dG9tYXRpY0ZhaWxvdmVyRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhdXRvbWF0aWNfZmFpbG92ZXJfZW5hYmxlZCcpO1xuICB9XG5cbiAgLy8gY2FjaGVfbm9kZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2FjaGVOb2RlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NhY2hlX25vZGVfdHlwZScpO1xuICB9XG5cbiAgLy8gY2FjaGVfcGFyYW1ldGVyX2dyb3VwX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjYWNoZVBhcmFtZXRlckdyb3VwTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NhY2hlX3BhcmFtZXRlcl9ncm91cF9uYW1lJyk7XG4gIH1cblxuICAvLyBlbmdpbmVfdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuZ2luZVZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmdpbmVfdmVyc2lvbicpO1xuICB9XG5cbiAgLy8gZ2xvYmFsX25vZGVfZ3JvdXBfY291bnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBnbG9iYWxOb2RlR3JvdXBDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2dsb2JhbF9ub2RlX2dyb3VwX2NvdW50Jyk7XG4gIH1cblxuICAvLyBnbG9iYWxfcmVwbGljYXRpb25fZ3JvdXBfZGVzY3JpcHRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBnbG9iYWxSZXBsaWNhdGlvbkdyb3VwRGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdnbG9iYWxfcmVwbGljYXRpb25fZ3JvdXBfZGVzY3JpcHRpb24nKTtcbiAgfVxuXG4gIC8vIGdsb2JhbF9yZXBsaWNhdGlvbl9ncm91cF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGdsb2JhbFJlcGxpY2F0aW9uR3JvdXBJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2dsb2JhbF9yZXBsaWNhdGlvbl9ncm91cF9pZCcpO1xuICB9XG5cbiAgLy8gZ2xvYmFsX3JlcGxpY2F0aW9uX2dyb3VwX2lkX3N1ZmZpeCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGdsb2JhbFJlcGxpY2F0aW9uR3JvdXBJZFN1ZmZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2dsb2JhbF9yZXBsaWNhdGlvbl9ncm91cF9pZF9zdWZmaXgnKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkXG4gIH1cblxuICAvLyBtZW1iZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWVtYmVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtZW1iZXJzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcmVnaW9uYWxfY29uZmlndXJhdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZWdpb25hbENvbmZpZ3VyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3JlZ2lvbmFsX2NvbmZpZ3VyYXRpb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc3RhdHVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdHVzJyk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgfTtcbiAgfVxufVxuIl19