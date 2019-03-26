import * as React from 'react';
import { Query } from 'react-apollo';
import * as moment from 'moment';
import Repositories from './Repositories';
import { trendingRepositoriesGQLQuery } from '../../GraphQL/Repositories';

class ReposQuery extends React.Component {
  public render () {
    const date = moment(new Date()).subtract(1, 'weeks');
    const formattedDate = date.format('YYYY-MM-DD');
    const query = `created:>${formattedDate} sort:stars-desc`;
    return (
        <Query
          notifyOnNetworkStatusChange={true}
          query={trendingRepositoriesGQLQuery}
          variables={{
            query
          }}
        >
          {({ data, loading, error, fetchMore }) => {
            if (error){
              return <p>{error.message}</p>;
            }
            const { search } = data;
            return (
              <Repositories
                loading={loading}
                entries={search}
                onLoadMore={() =>
                  fetchMore({
                    variables: {
                      query,
                      cursor: search.pageInfo.endCursor
                    },
                    updateQuery: (prevResult, { fetchMoreResult }) => {
                      const newEdges = fetchMoreResult.search.edges;
                      const pageInfo = fetchMoreResult.search.pageInfo;
                      return newEdges.length
                        ? {
                            search: {
                              __typename: prevResult.search.__typename,
                              edges: [...prevResult.search.edges, ...newEdges],
                              pageInfo
                            }
                          }
                        : prevResult;
                    }
                  })
                }
              />
            );
          }}
        </Query>
    );
  }
}

export default ReposQuery;