import { gql } from '@apollo/client';

export const QUERY_GETSINGLEUSER = gql`
query Query {
  getSingleUser {
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
`;
