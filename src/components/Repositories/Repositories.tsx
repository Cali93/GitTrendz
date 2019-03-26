import * as React from 'react';
import { List, ListItem, Typography, Grid, Card, WithStyles, withStyles, createStyles, Theme, Hidden } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  cardItem: {
    margin: '10px 0px'
  }
});

interface IRepositoriesProps extends WithStyles<typeof styles> {
  scroller?: any;
  onLoadMore?: any;
  entries?: {
    edges: []
  },
  loading?: boolean
}

class Repositories extends React.Component<IRepositoriesProps> {

  public readonly scroller: React.RefObject<HTMLDivElement>;

  constructor (props) {
    super(props);
    this.scroller = React.createRef<HTMLDivElement>();
  };

  public handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = this.scroller.current;
    const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    if (scrolledToBottom){
      console.log({scrolledToBottom}, 'fetching more');
      this.props.onLoadMore();
    }
  };

  public render () {

    const { classes, entries, loading } = this.props;

    if (!entries && loading){
      return <p>Loading....</p>
    };

    const repos = entries && entries.edges || [];

    return (
      <div 
        ref={this.scroller}
        onScroll={this.handleScroll}
        style={{height: 'calc(100vh - 64px)', overflowY: 'scroll'}}
      >
      <List>
        <Grid container justify='center'>
        <Hidden smUp>
          <Grid item xs={10} sm={8}>
            <Typography variant='h5' align='center'>
              Trending Repositories
            </Typography>
          </Grid>
        </Hidden>
        {repos.map(({ node }: any, idx) => (
          <Grid item xs={10} sm={8} key={idx}>
            <Card className={classes.cardItem}>
              <ListItem >
                <h3>
                  {node.name} - {node.owner.login}
                </h3>
                <Typography>{node.description}</Typography>
                <p>
                  ★ {node.stargazers.totalCount} -{" "}
                  {node.primaryLanguage && node.primaryLanguage.name}{" "}
                </p>
              </ListItem>
            </Card>
          </Grid>
        ))}
        </Grid>
      </List>
      </div>
    );
  }
}

export default withStyles(styles)(Repositories);