import { gql } from '@apollo/client';

export const USER = gql`
query user {
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
`