import * as React from 'react';
import { Query } from 'react-apollo';
import { AllMembersQuery } from '../GraphQL/types/AllMembersQuery';
import { allMembers } from '../GraphQL/Members';
export class HomeView extends React.Component<{}> {
  public render () {
    return (
      <Query<AllMembersQuery> query={allMembers}>
        {
          ({loading, data}) => {
            if (loading || !data) {
              return <span>Loading...</span>
            }
            
            return (
              <div>
                Hey we have data
                { data.allMembers!.members!.map(member => {
                  return (
                    <div key={Number(member.id!)}>
                      {member.firstname}
                    </div>
                  );
                })}
              </div>
            )
          }
        }
      </Query>
    );
  }
}
