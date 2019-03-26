import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
  query pokemons($offset: Int!) {
    pokemons(offset: $offset, limit: 35) @client {
      id
      number
      name
      __typename
    }
  }
`;