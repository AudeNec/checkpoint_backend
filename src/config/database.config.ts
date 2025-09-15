import { DataSource } from "typeorm";
import { Country } from "../entity/Country";

const dataSource = new DataSource({
  type: "sqlite",
  database: "checkpoint.sqlite",
  entities: [Country],
  // synchronize: true,
  logging: ["error", "query"],
  migrations: ["src/migration/**/*.ts"],
});

export default dataSource;
