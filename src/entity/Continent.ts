import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Country } from "./Country";

@ObjectType()
@Entity()
export class Continent extends BaseEntity {
  @Field(() => ID)
  @PrimaryColumn()
  code: string;

  @Field()
  @Column()
  name: string;

  @OneToMany(() => Country, (country) => country.continent)
  countries: Country[];
}
