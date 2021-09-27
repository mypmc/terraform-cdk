"use strict";
// https://www.terraform.io/docs/providers/awscc/d/cloudfront_cloudfront_origin_access_identity.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccCloudfrontCloudfrontOriginAccessIdentity = exports.dataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigToTerraform = exports.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig = void 0;
const cdktf = require("cdktf");
class DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig extends cdktf.ComplexComputedList {
    // comment - computed: true, optional: false, required: false
    get comment() {
        return this.getStringAttribute('comment');
    }
}
exports.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig = DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig;
function dataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comment: cdktf.stringToTerraform(struct.comment),
    };
}
exports.dataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigToTerraform = dataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_cloudfront_origin_access_identity.html awscc_cloudfront_cloudfront_origin_access_identity}
*/
class DataAwsccCloudfrontCloudfrontOriginAccessIdentity extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_cloudfront_origin_access_identity.html awscc_cloudfront_cloudfront_origin_access_identity} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudfront_cloudfront_origin_access_identity',
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
    // cloudfront_origin_access_identity_config - computed: true, optional: false, required: false
    get cloudfrontOriginAccessIdentityConfig() {
        return this.interpolationForAttribute('cloudfront_origin_access_identity_config');
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
    // s3_canonical_user_id - computed: true, optional: false, required: false
    get s3CanonicalUserId() {
        return this.getStringAttribute('s3_canonical_user_id');
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
exports.DataAwsccCloudfrontCloudfrontOriginAccessIdentity = DataAwsccCloudfrontCloudfrontOriginAccessIdentity;
// =================
// STATIC PROPERTIES
// =================
DataAwsccCloudfrontCloudfrontOriginAccessIdentity.tfResourceType = "awscc_cloudfront_cloudfront_origin_access_identity";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1jbG91ZGZyb250LWNsb3VkZnJvbnQtb3JpZ2luLWFjY2Vzcy1pZGVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEtYXdzY2MtY2xvdWRmcm9udC1jbG91ZGZyb250LW9yaWdpbi1hY2Nlc3MtaWRlbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9HQUFvRztBQUNwRywyQ0FBMkM7OztBQUczQywrQkFBK0I7QUFZL0IsTUFBYSxxRkFBc0YsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRWxJLDZEQUE2RDtJQUM3RCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGO0FBTkQsc0xBTUM7QUFFRCxTQUFnQixnR0FBZ0csQ0FBQyxNQUE4RjtJQUM3TSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztLQUNsRCxDQUFBO0FBQ0gsQ0FBQztBQUxELDRNQUtDO0FBR0Q7O0VBRUU7QUFDRixNQUFhLGlEQUFrRCxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFPOUYsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBK0Q7UUFDOUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxvREFBb0Q7WUFDM0UsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxPQUFPO2FBQ3RCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBRWIsOEZBQThGO0lBQzlGLElBQVcsb0NBQW9DO1FBQzdDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLDBDQUEwQyxDQUFRLENBQUM7SUFDM0YsQ0FBQztJQUlELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxJQUFXLEVBQUUsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNqQixDQUFDO0lBRUQsMEVBQTBFO0lBQzFFLElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsRUFBRSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ3RDLENBQUM7SUFDSixDQUFDOztBQW5FSCw4R0FvRUM7QUFsRUMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyxnRUFBYyxHQUFXLG9EQUFvRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvY2xvdWRmcm9udF9jbG91ZGZyb250X29yaWdpbl9hY2Nlc3NfaWRlbnRpdHkuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NjY0Nsb3VkZnJvbnRDbG91ZGZyb250T3JpZ2luQWNjZXNzSWRlbnRpdHlDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogVW5pcXVlbHkgaWRlbnRpZmllcyB0aGUgcmVzb3VyY2UuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9jbG91ZGZyb250X2Nsb3VkZnJvbnRfb3JpZ2luX2FjY2Vzc19pZGVudGl0eS5odG1sI2lkIERhdGFBd3NjY0Nsb3VkZnJvbnRDbG91ZGZyb250T3JpZ2luQWNjZXNzSWRlbnRpdHkjaWR9XG4gICovXG4gIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQ2xvdWRmcm9udENsb3VkZnJvbnRPcmlnaW5BY2Nlc3NJZGVudGl0eUNsb3VkZnJvbnRPcmlnaW5BY2Nlc3NJZGVudGl0eUNvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvbW1lbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb21tZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29tbWVudCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NDbG91ZGZyb250Q2xvdWRmcm9udE9yaWdpbkFjY2Vzc0lkZW50aXR5Q2xvdWRmcm9udE9yaWdpbkFjY2Vzc0lkZW50aXR5Q29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQ2xvdWRmcm9udENsb3VkZnJvbnRPcmlnaW5BY2Nlc3NJZGVudGl0eUNsb3VkZnJvbnRPcmlnaW5BY2Nlc3NJZGVudGl0eUNvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb21tZW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbW1lbnQpLFxuICB9XG59XG5cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvY2xvdWRmcm9udF9jbG91ZGZyb250X29yaWdpbl9hY2Nlc3NfaWRlbnRpdHkuaHRtbCBhd3NjY19jbG91ZGZyb250X2Nsb3VkZnJvbnRfb3JpZ2luX2FjY2Vzc19pZGVudGl0eX1cbiovXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQ2xvdWRmcm9udENsb3VkZnJvbnRPcmlnaW5BY2Nlc3NJZGVudGl0eSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybURhdGFTb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2NfY2xvdWRmcm9udF9jbG91ZGZyb250X29yaWdpbl9hY2Nlc3NfaWRlbnRpdHlcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvY2xvdWRmcm9udF9jbG91ZGZyb250X29yaWdpbl9hY2Nlc3NfaWRlbnRpdHkuaHRtbCBhd3NjY19jbG91ZGZyb250X2Nsb3VkZnJvbnRfb3JpZ2luX2FjY2Vzc19pZGVudGl0eX0gRGF0YSBTb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgRGF0YUF3c2NjQ2xvdWRmcm9udENsb3VkZnJvbnRPcmlnaW5BY2Nlc3NJZGVudGl0eUNvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzY2NDbG91ZGZyb250Q2xvdWRmcm9udE9yaWdpbkFjY2Vzc0lkZW50aXR5Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NjY19jbG91ZGZyb250X2Nsb3VkZnJvbnRfb3JpZ2luX2FjY2Vzc19pZGVudGl0eScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3NjYydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBjbG91ZGZyb250X29yaWdpbl9hY2Nlc3NfaWRlbnRpdHlfY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2xvdWRmcm9udE9yaWdpbkFjY2Vzc0lkZW50aXR5Q29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Nsb3VkZnJvbnRfb3JpZ2luX2FjY2Vzc19pZGVudGl0eV9jb25maWcnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZFxuICB9XG5cbiAgLy8gczNfY2Fub25pY2FsX3VzZXJfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzM0Nhbm9uaWNhbFVzZXJJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3MzX2Nhbm9uaWNhbF91c2VyX2lkJyk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgfTtcbiAgfVxufVxuIl19