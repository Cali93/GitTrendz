import gql from 'graphql-tag';

export const getRepositoryGQLQuery = gql`
  query repository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      url
      description
      forkCount
      commitComments {
        totalCount
      }
      owner {
        login
      }
      stargazers {
        totalCount
      }
      languages(first: 4){
        edges {
          node {
            name
          }
        }
      }
    }
  }
`;