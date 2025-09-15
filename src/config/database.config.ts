import { DataSource } from "typeorm";
import { Country } from "../entity/Country";

const dataSource = new DataSource({
  type: "sqlite",
  database: "checkpoint.sqlite",
  entities: [Country],
  synchronize: true,
  logging: ["error", "query"],
});

export default dataSource;
