import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { typeDefs } from "./schema" 

// Schema:
const typeDefs = gql`
type Query {
    greet: String
}
`;

// Query Resolver:
const resolvers = {
    Query: {
        greet: () => "Hello, GraphQL",
    },
};

// Apollo Server Setup:
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()], // The ApolloServerPluginLandingPageGraphQLPlayground enables a web-based GraphQL IDE to interact with the server.
});

// Start the Server:
// Specify Custom Port: 

const PORT = 5000; // Change to your desired port


server.listen({ port: PORT }).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});

