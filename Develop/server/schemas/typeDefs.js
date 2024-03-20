const typeDefs = `
  type User {
    username: String
    email: String
    _id: ID
    savedBooks: [Book]
  }
  type Book {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }
  type Auth {
    token: String
    user: User
  }
  type Query {
    getSingleUser: User
  }
  type Mutation {
    createUser( username: String, email: String, password: String ): Auth
    login( email: String, password: String ): Auth
    saveBook( authors: [String], description: String, bookId: String, image: String, link: String, title: String): User
    deleteBook (bookId: String): User
  }
`;

module.exports = typeDefs;
