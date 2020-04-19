const { ApolloServer, gql } = require("apollo-server");
import typeDefs from '../schema/schema';
import resolvers from '../resolvers/resolvers';
import {context} from '../enviroments/enviroments';

const server = new ApolloServer({ typeDefs, resolvers , context });

server.listen({port:3000}).then(({ url }) => {console.log(`SERVER APIGATEWAY PERIME at: ${url}`);});
