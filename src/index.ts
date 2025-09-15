import "reflect-metadata";
import dataSource from "./config/database.config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import CountryResolver from "./resolvers/CountryResolver";
const port = 3000;

async function startServer() {
  await dataSource.initialize();
  const schema = await buildSchema({
    resolvers: [CountryResolver],
  });
  const apolloServer = new ApolloServer({ schema });
  const { url } = await startStandaloneServer(apolloServer, {
    listen: { port },
  });
  console.info("Server started on " + url);
}
startServer();
