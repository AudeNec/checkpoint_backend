import { Field, InputType, Query, Resolver } from "type-graphql";
import { Country } from "../entity/Country";

// @InputType()
// class CountryInput {
//   @Field()
//   name!: string;

//   @Field()
//   code!: string;

//   @Field()
//   emoji!: string;
// }

@Resolver(Country)
export default class CountryResolver {
  @Query(() => [Country])
  async getAllCountries() {
    return await Country.find();
  }
}
