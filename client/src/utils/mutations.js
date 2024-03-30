import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation Mutation($username: String, $email: String, $password: String) {
  createUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      email
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
      username
    }
  }
}
`;

export const DELETE_BOOK = gql`
mutation Mutation($bookId: String) {
  deleteBook(bookId: $bookId) {
    username
    email
    _id
    savedBooks {
      authors
      description
      bookId
      image
      link
      title
    }
  }
}
`;

export const LOGIN_USER = gql`
mutation Mutation($email: String, $password: String) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
      username
    }
  }
}
`;

export const SAVE_BOOK = gql`
mutation Mutation($authors: [String], $description: String, $bookId: String, $image: String, $link: String, $title: String) {
  saveBook(authors: $authors, description: $description, bookId: $bookId, image: $image, link: $link, title: $title) {
    username
    email
    _id
    savedBooks {
      authors
      description
      bookId
      image
      link
      title
    }
  }
}
`;
