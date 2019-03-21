import gql from 'graphql-tag';

export const allMembers = gql`
  query AllMembersQuery {
    allMembers {
      members {
        id
        firstname
        lastname
      }
    }
  }
`;