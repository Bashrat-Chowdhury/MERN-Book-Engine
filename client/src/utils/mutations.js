import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation newUser($username: String!, $email: String!, $password: String!) {
    newUser(username: $username, email: $email, password: $password) {
      token
      user {
        email
        username
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(
    $bookId: String
    $title: String
    $description: String
    $authors: [String]
    $image: String
    $link: String
  ) {
    saveBook(
      bookId: $bookId
      title: $title
      description: $description
      authors: $authors
      image: $image
      link: $link
    ) {
      username
      email
      savedBooks {
        bookId
        title
      }
    }
  }
`;

export const DELETE_BOOK = gql`
mutation deleteBook($bookId: String!) {
  deleteBook(bookId: $bookId) {
    email
    savedBooks {
      bookId
      title
    }
    username
  }
}

`
