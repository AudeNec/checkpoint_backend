import "reflect-metadata";
import dataSource from "./config/database.config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import CountryResolver from "./resolvers/CountryResolver";
import { Continent } from "./entity/Continent";
import ContinentResolver from "./resolvers/ContinentResolver";
const port = 3000;

async function startServer() {
  await dataSource.initialize();
  const schema = await buildSchema({
    resolvers: [CountryResolver, ContinentResolver],
  });
  const apolloServer = new ApolloServer({ schema });
  const { url } = await startStandaloneServer(apolloServer, {
    listen: { port },
  });
  console.info("Server started on " + url);
  if ((await Continent.count()) === 0) {
    const { seedContinents } = await import("./seeder/Seeders");
    await seedContinents();
  }
}
startServer();
