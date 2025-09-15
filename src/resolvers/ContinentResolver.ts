import { Arg, Field, InputType, Mutation } from "type-graphql";
import { Continent } from "../entity/Continent";

@InputType()
class ContinentInput extends Continent {
  @Field()
  name: string;

  @Field()
  code: string;
}

export default class ContinentResolver {
  @Mutation(() => Continent)
  async createContinent(
    @Arg("data", () => ContinentInput) data: ContinentInput
  ) {
    const continent = Continent.create(data as Partial<Continent>);
    await continent.save();
    return continent;
  }
}
