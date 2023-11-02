const typeDefs = `

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


`;

module.exports = typeDefs;
