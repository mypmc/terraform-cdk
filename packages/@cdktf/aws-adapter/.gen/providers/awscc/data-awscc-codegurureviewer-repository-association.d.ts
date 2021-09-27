import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCodegurureviewerRepositoryAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/codegurureviewer_repository_association.html#id DataAwsccCodegurureviewerRepositoryAssociation#id}
    */
    readonly id: string;
}
export declare class DataAwsccCodegurureviewerRepositoryAssociationTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccCodegurureviewerRepositoryAssociationTagsToTerraform(struct?: DataAwsccCodegurureviewerRepositoryAssociationTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/codegurureviewer_repository_association.html awscc_codegurureviewer_repository_association}
*/
export declare class DataAwsccCodegurureviewerRepositoryAssociation extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/codegurureviewer_repository_association.html awscc_codegurureviewer_repository_association} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCodegurureviewerRepositoryAssociationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCodegurureviewerRepositoryAssociationConfig);
    get associationArn(): string;
    get bucketName(): string;
    get connectionArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get owner(): string;
    get tags(): any;
    get type(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}