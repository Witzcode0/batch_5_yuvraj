import { gql } from "apollo-server";

const typeDefs = gql`
  """
  User entity
  """
  type User {
    id: ID!              # Unique identifier
    name: String!        # Full name
    email: String!       # Email address
    posts: [Post!]!      # Posts created by the user
  }

  """
  Post entity
  """
  type Post {
    id: ID!              # Unique identifier
    title: String!       # Post title
    content: String!     # Post body
    author: User!        # Post author
  }

  """
  Queries (Read operations)
  """
  type Query {
    hello: String
    getUser(id: ID!): User
    getUsers: [User!]!

    getPost(id: ID!): Post
    getPosts: [Post!]!
  }

  """
  Mutations (Write operations)
  """
  type Mutation {
    createUser(
      name: String!
      email: String!
    ): User!

    createPost(
      title: String!
      content: String!
      authorId: ID!
    ): Post!
  }

  """
  Subscriptions (Real-time updates)
  """
  type Subscription {
    postAdded: Post!
  }
`;

export default typeDefs;