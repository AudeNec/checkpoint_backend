import { DataSource } from "typeorm";
import { Country } from "../entity/Country";
import { Continent } from "../entity/Continent";

const dataSource = new DataSource({
  type: "sqlite",
  database: "checkpoint.sqlite",
  entities: [Country, Continent],
  synchronize: true,
  logging: ["error", "query"],
});

export default dataSource;
