import * as React from 'react';
import { Query } from 'react-apollo';
import { getRepositoryGQLQuery } from '../../../GraphQL/Repository';
import Repository from './Repository';

interface IRepositoryQueryProps {
  name: string;
  owner: string;
  open: boolean;
  handleCloseRepo?: any;
}

class RepositoryQuery extends React.Component<IRepositoryQueryProps> {
  public render () {
    const { name, owner, open, handleCloseRepo } = this.props;
    return (
      <Query query={getRepositoryGQLQuery} variables={{ name, owner }}>
        {
          ({data, loading, error}) => {
            if (error) {
              return <h2>Error</h2>;
            }
            if (loading || !data) {
              return <h2>Fetching Data</h2>;
            }
            return (
              <Repository
                repo={data.repository}
                isModalOpen={open}
                handleCloseRepo={handleCloseRepo}/>
            );
          }
        }
      </Query>
    );
  }
}

export default RepositoryQuery;
