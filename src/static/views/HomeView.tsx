import * as React from 'react';
import { Query } from 'react-apollo';
// import { List, ListItem } from '@material-ui/core';

// import { GetPokemonsQuery } from '../../GraphQL/types/GetPokemonsQuery';
// import { GET_POKEMONS } from '../../GraphQL/Pokemons';
import * as moment from 'moment';
import { trendingRepositoriesGQLQuery } from 'src/GraphQL/Repositories';

interface IHomeViewProps {
  scroller: any;
}

interface IHomeViewState {
  hasMoreItems: boolean;
}

export class HomeView extends React.Component<IHomeViewProps, IHomeViewState> {

  public readonly scroller: React.RefObject<HTMLDivElement>;

  constructor (props) {
    super(props);
    this.scroller = React.createRef<HTMLDivElement>();
    this.state = {
      hasMoreItems: true
    };
  };

  public handleScroll = (pokemons, fetchMore) => {
    const { scrollTop, scrollHeight, clientHeight } = this.scroller.current;
    const { hasMoreItems } = this.state;
    const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    if (scrolledToBottom && hasMoreItems && pokemons.length >= 35){
      console.log({scrolledToBottom}, 'fetching more', pokemons.length)
      fetchMore({
        variables: { offset: pokemons.length },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          console.log('fetched more', fetchMoreResult.pokemons)
          if (!fetchMoreResult) {
            return previousResult;
          }

          if (fetchMoreResult.pokemons.length < 35 && pokemons.length >= 150) {
            this.setState({ hasMoreItems: false });
          }

          return {
            ...previousResult,
            pokemons: [...previousResult.pokemons, ...fetchMoreResult.pokemons],
          };
        },
      });
    }
  };

  public renderPokemons = ({loading, data, fetchMore}) => {
    if (loading || !data) {
      return <span>Loading...</span>
    }

    if (data.error) {
      console.log(data.error);
      return <span>GraphQL Error</span>
    }
    console.log(data);
    return <span>Helloo...</span>

    // return (
    //   <div 
    //     ref={this.scroller}
    //     onScroll={e => this.handleScroll(data.pokemons, fetchMore)}
    //     style={{height: '93.4vh', overflowY: 'scroll'}}
    //   >
    //     <List>
    //       Hey we have data
    //       { data.pokemons!.map(pokemon => {
    //         return (
    //           <ListItem key={pokemon.number}>
    //             {pokemon.name}
    //           </ListItem>
    //         );
    //       })}
    //     </List>
    //   </div>
    // )
  }

  public render () {
    const date = moment(new Date()).subtract(1, "weeks");
    const formattedDate = date.format("YYYY-MM-DD");
    const query = `created:>${formattedDate} sort:stars-desc`;
    return (
      <Query<any> query={trendingRepositoriesGQLQuery} variables={{query}}>
        { this.renderPokemons }
      </Query>
    );
  }
}
