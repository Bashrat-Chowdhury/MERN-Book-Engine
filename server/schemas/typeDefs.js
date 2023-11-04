const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    savedBooks: [Book]
  }

  type Book {
    _id: ID!
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
  }

  input bookInput {
    bookId: String
    title: String
    description: String
    authors: [String]
    image: String
    link: String
  }

  type Mutation {
    newUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: bookInput!): User
    deleteBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
