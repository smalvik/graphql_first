import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

// Schema
import { schema } from '../schema';

// Resolvers
import { resolvers } from '../resolvers';

const app = express();

const server = new ApolloServer({
    typeDefs: schema, 
    resolvers
});

server.applyMiddleware({app});

export { server, app };