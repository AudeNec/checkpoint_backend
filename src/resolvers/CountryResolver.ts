import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Country } from "../entity/Country";

@InputType()
class CountryInput extends Country {
  @Field()
  name!: string;

  @Field()
  code!: string;

  @Field()
  emoji!: string;

  @Field()
  continentCode!: string;
}

@Resolver(Country)
export default class CountryResolver {
  @Query(() => [Country])
  async getAllCountries() {
    return await Country.find();
  }

  @Query(() => Country)
  async getCountryByCode(@Arg("code") code: string) {
    return await Country.findOneBy({ code });
  }

  @Mutation(() => Country)
  async createCountry(@Arg("data", () => CountryInput) data: CountryInput) {
    const country = Country.create(data);
    await country.save();
    return country;
  }
}
