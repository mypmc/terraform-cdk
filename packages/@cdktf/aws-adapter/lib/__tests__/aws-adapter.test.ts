import { AwsTerraformAdapter } from "../aws-adapter";
import { Aspects, TerraformResource, TerraformStack, Testing } from "cdktf";
import { CfnElement } from "aws-cdk-lib";
import { CloudFormationTemplate } from "../cfn";
import { Construct } from "constructs";
import { registerMapping } from "../mapping";
import { camelCase } from "camel-case";
import { snakeCase } from "snake-case";

describe("AwsTerraformAdapter", () => {
  let adapter: AwsTerraformAdapter;
  let stack: TerraformStack;
  beforeEach(() => {
    const app = Testing.app();
    stack = new TerraformStack(app, "test");
    adapter = new AwsTerraformAdapter(stack, "adapter");
  });

  describe("resolveIntrinsic", () => {
    it("should resolve Fn::GetAtt", () => {
      new StaticCfnConstruct(adapter, "cfn", {
        Resources: {
          subject: {
            Type: "Test::Resource",
            Properties: {
              Value: { "Fn::GetAtt": ["another", "List"] },
            },
          },
          another: {
            Type: "Test::Resource",
            Properties: {},
          },
        },
      });

      expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
        "{
          \\"resource\\": {
            \\"test\\": {
              \\"adapter_another_C86ABFE2\\": {},
              \\"adapter_subject_24E89D84\\": {
                \\"value\\": \\"\${test.adapter_another_C86ABFE2.list}\\"
              }
            }
          }
        }"
      `);
    });

    it("should resolve Fn::Join", () => {
      new StaticCfnConstruct(adapter, "cfn", {
        Resources: {
          subject: {
            Type: "Test::Resource",
            Properties: {
              Value: {
                "Fn::Join": [
                  ",",
                  ["one", "two", { "Fn::GetAtt": ["another", "String"] }],
                ],
              },
            },
          },
          another: {
            Type: "Test::Resource",
            Properties: {},
          },
        },
      });

      expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
"{
  \\"resource\\": {
    \\"test\\": {
      \\"adapter_another_C86ABFE2\\": {},
      \\"adapter_subject_24E89D84\\": {
        \\"value\\": \\"\${join(\\\\\\",\\\\\\", [\\\\\\"one\\\\\\", \\\\\\"two\\\\\\", \${test.adapter_another_C86ABFE2.string}])}\\"
      }
    }
  }
}"
`);
    });

    it("should resolve Fn::Select", () => {
      new StaticCfnConstruct(adapter, "cfn", {
        Resources: {
          subject: {
            Type: "Test::Resource",
            Properties: {
              Value: {
                "Fn::Select": [1, { "Fn::GetAtt": ["another", "List"] }],
              },
            },
          },
          another: {
            Type: "Test::Resource",
            Properties: {},
          },
        },
      });

      expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
"{
  \\"resource\\": {
    \\"test\\": {
      \\"adapter_another_C86ABFE2\\": {},
      \\"adapter_subject_24E89D84\\": {
        \\"value\\": \\"\${element(\${test.adapter_another_C86ABFE2.list}, 1)}\\"
      }
    }
  }
}"
`);
    });

    it("should resolve Fn::GetAZs", () => {
      fail("todo");
      // FIXME:
      new StaticCfnConstruct(adapter, "cfn", {
        Resources: {
          subject: {
            Type: "Test::Resource",
            Properties: {
              Value: {
                "Fn::Join": [
                  ",",
                  ["one", "two", { "Fn::GetAtt": ["another", "String"] }],
                ],
              },
            },
          },
          another: {
            Type: "Test::Resource",
            Properties: {},
          },
        },
      });
      expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
"{
  \\"resource\\": {
    \\"test\\": {
      \\"adapter_another_C86ABFE2\\": {},
      \\"adapter_subject_24E89D84\\": {
        \\"value\\": \\"\${join(\\\\\\",\\\\\\", [\\\\\\"one\\\\\\", \\\\\\"two\\\\\\", \${test.adapter_another_C86ABFE2.string}])}\\"
      }
    }
  }
}"
`);
    });

    it("should resolve Fn::Base64", () => {
      new StaticCfnConstruct(adapter, "cfn", {
        Resources: {
          subject: {
            Type: "Test::Resource",
            Properties: {
              Value: {
                "Fn::Base64": [{ "Fn::GetAtt": ["another", "String"] }],
              },
            },
          },
          another: {
            Type: "Test::Resource",
            Properties: {},
          },
        },
      });
      expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
"{
  \\"resource\\": {
    \\"test\\": {
      \\"adapter_another_C86ABFE2\\": {},
      \\"adapter_subject_24E89D84\\": {
        \\"value\\": \\"\${base64encode(\${test.adapter_another_C86ABFE2.string})}\\"
      }
    }
  }
}"
`);
    });

    it("should resolve Fn::Cidr", () => {
      fail("todo");
      // FIXME:
      new StaticCfnConstruct(adapter, "cfn", {
        Resources: {
          subject: {
            Type: "Test::Resource",
            Properties: {
              Value: {
                "Fn::Join": [
                  ",",
                  ["one", "two", { "Fn::GetAtt": ["another", "String"] }],
                ],
              },
            },
          },
          another: {
            Type: "Test::Resource",
            Properties: {},
          },
        },
      });
      expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
  "{
    \\"resource\\": {
      \\"test\\": {
        \\"adapter_another_C86ABFE2\\": {},
        \\"adapter_subject_24E89D84\\": {
          \\"value\\": \\"\${join(\\\\\\",\\\\\\", [\\\\\\"one\\\\\\", \\\\\\"two\\\\\\", \${test.adapter_another_C86ABFE2.string}])}\\"
        }
      }
    }
  }"
  `);
    });

    it.only("should resolve Fn::FindInMap", () => {
      new StaticCfnConstruct(adapter, "cfn", {
        Resources: {
          subject: {
            Type: "Test::Resource",
            Properties: {
              Value: {
                "Fn::FindInMap": [
                  { "Fn::GetAtt": ["another", "Map"] },
                  "keyA",
                  { "Fn::GetAtt": ["another", "String"] },
                ],
              },
            },
          },
          another: {
            Type: "Test::Resource",
            Properties: {},
          },
        },
      });
      expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
"{
  \\"resource\\": {
    \\"test\\": {
      \\"adapter_another_C86ABFE2\\": {},
      \\"adapter_subject_24E89D84\\": {
        \\"value\\": \\"\${\${test.adapter_another_C86ABFE2.map}[\\\\\\"keyA\\\\\\"][\${test.adapter_another_C86ABFE2.string}]}\\"
      }
    }
  }
}"
`);
    });

    it("should resolve Fn::Sub", () => {
      fail("todo");
      // FIXME:
      new StaticCfnConstruct(adapter, "cfn", {
        Resources: {
          subject: {
            Type: "Test::Resource",
            Properties: {
              Value: {
                "Fn::Join": [
                  ",",
                  ["one", "two", { "Fn::GetAtt": ["another", "String"] }],
                ],
              },
            },
          },
          another: {
            Type: "Test::Resource",
            Properties: {},
          },
        },
      });
      expect(synthWithAspects(stack)).toMatchInlineSnapshot();
    });

    it("should resolve Fn::Split", () => {
      new StaticCfnConstruct(adapter, "cfn", {
        Resources: {
          subject: {
            Type: "Test::Resource",
            Properties: {
              Value: {
                "Fn::Split": [",", { "Fn::GetAtt": ["another", "String"] }],
              },
            },
          },
          another: {
            Type: "Test::Resource",
            Properties: {},
          },
        },
      });
      expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
"{
  \\"resource\\": {
    \\"test\\": {
      \\"adapter_another_C86ABFE2\\": {},
      \\"adapter_subject_24E89D84\\": {
        \\"value\\": \\"\${split(\\\\\\",\\\\\\", \${test.adapter_another_C86ABFE2.string})}\\"
      }
    }
  }
}"
`);
    });
  });
});

// Currently Testing.synth does not invoke Aspects, so we make sure this happens
// this is not a correct (read complete) invocation of Aspects, but it invokes
// the convertion of the AwsTerraformAdapter
function synthWithAspects(stack: TerraformStack) {
  Aspects.of(stack).all.forEach((aspect) => aspect.visit(stack));

  return Testing.synth(stack);
}

registerMapping("Test::Resource", {
  resource: (scope, id, props) => {
    const converted: { [i: string]: any } = {};
    // "PascalCase" to "camelCase" for all keys
    Object.keys(props).forEach((key) => {
      const cdktfKey = camelCase(key);
      converted[cdktfKey] = props[key];
      delete props[key];
    });
    return new TestResource(scope, id, converted);
  },
  attributes: {
    Ref: (r) => r.getStringAttribute("ref"),
    Arn: (r) => r.getStringAttribute("arn"),
    List: (r) => r.getListAttribute("list") as any, // TODO: check interface as this is not a string but string[]
    Bool: (r) => r.getBooleanAttribute("bool") as any, // TODO: check interface as this is not a string but IResolvable
    String: (r) => r.getStringAttribute("string"),
    Number: (r) => r.getNumberAttribute("number") as any, // TODO: check interface as this is not a string but number
    Map: (r) => r.getStringAttribute("map") as any, // TODO: check how to map
  },
});

/**
 * resource for testing purposes that will just convert everything to snake case
 */
class TestResource extends TerraformResource {
  constructor(
    scope: Construct,
    id: string,
    private config: { [i: string]: any }
  ) {
    super(scope, id, { terraformResourceType: "test" });
  }
  synthesizeAttributes() {
    const converted: { [i: string]: any } = {};
    Object.keys(this.config).forEach((key) => {
      const cdktfKey = snakeCase(key);
      converted[cdktfKey] = this.config[key];
    });
    return converted;
  }
}

class StaticCfnConstruct extends CfnElement {
  constructor(
    scope: Construct,
    id: string,
    private cfn: CloudFormationTemplate
  ) {
    super(scope, id);
  }

  _toCloudFormation(): object {
    return this.cfn;
  }
}