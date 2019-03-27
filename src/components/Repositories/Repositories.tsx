import * as React from 'react';
import cn from 'classnames';
import {
  List,
  ListItem,
  Typography,
  Grid,
  WithStyles,
  withStyles
} from '@material-ui/core';
import {getLanguageIconName} from '../../helpers/getLanguageIconName';
import {styles} from './repositoriesStyles';
import {StarOutlined} from '@material-ui/icons';
import RepositoryQuery from './Repository/RepositoryQuery';

interface IRepositoriesProps extends WithStyles < typeof styles > {
  scroller?: any;
  onLoadMore?: any;
  entries?: {
    edges: []
  },
  loading?: boolean;
}

interface IRepositoriesState {
  open: boolean;
  owner: string;
  name: string;
}

class Repositories extends React.Component<IRepositoriesProps,IRepositoriesState> {

  public readonly scroller : React.RefObject<HTMLDivElement>;

  constructor (props) {
    super(props);
    this.scroller = React.createRef<HTMLDivElement>();
    this.state = {
      open: false,
      owner: '',
      name: ''
    }
  };

  public handleScroll = () => {
    const {scrollTop, scrollHeight, clientHeight} = this.scroller.current;
    const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    if (scrolledToBottom) {
      this.props.onLoadMore();
    }
  };

  public renderLanguage = language => {
    const languageIconName = getLanguageIconName(language);
    const {classes} = this.props;
    const iconClassnames = cn('colored', `devicon-${languageIconName}-plain`);

    return (
      <div className={classes.languages}>
        <div className={classes.languagesIcons}>
          <i className={iconClassnames}/>
        </div>
        <Typography variant='subtitle2' align='center' className={classes.infoText}>
          {language}
        </Typography>
      </div>
    );
  };

  public renderStars = starsCount => {
    const {classes} = this.props
    return (
      <Grid item xs={2}>
        <div className={classes.stars}>
          <Typography variant='subtitle2' align='center' className={classes.infoText}>
            {starsCount}
          </Typography>
          <div className={classes.starIcons}>
            <StarOutlined fontSize='large'/>
          </div>
        </div>
      </Grid>
    );
  };

  public handleOpenRepo = (name: string, owner: string) => {
    this.setState({
      open: true,
      name,
      owner
    });
  };

  public handleCloseRepo = () => {
    this.setState({open: false});
  };

  public render () {

    const {classes, entries, loading} = this.props;
    const repos = entries && entries.edges || [];

    if (!entries && loading) {
      return <p>Loading....</p>
    };

    return (
      <React.Fragment>
        <div
          ref={this.scroller}
          onScroll={this.handleScroll}
          style={{
          height: 'calc(100vh - 64px)',
          overflowY: 'scroll'
        }}>
          <List>
            <Grid container justify='center'>
              <Grid item xs={10} sm={8}>
                <Typography variant='h4' align='center'>
                  Trending Repositories
                </Typography>
              </Grid>
              <Grid item xs={10} sm={8}>
                <Grid container justify='space-between'>
                  {repos.map(({node} : any, idx) => (
                    <Grid item xs={12} sm={12} md={5} key={idx}>
                      <div 
                        className={classes.cardItem}
                        onClick={e => this.handleOpenRepo(node.name, node.owner.login)}>
                        <ListItem >
                          <Grid container alignItems='center'>
                            <Grid item xs={2}>
                              {node.primaryLanguage && this.renderLanguage(node.primaryLanguage.name)}
                            </Grid>
                            <Grid item xs={8}>
                              <Typography variant='h6' align='center' className={classes.repoName}>
                                {node.name}
                              </Typography>
                            </Grid>
                            {node.stargazers.totalCount && this.renderStars(node.stargazers.totalCount)}
                          </Grid>
                        </ListItem>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </List>
        </div>
        <RepositoryQuery
          owner={this.state.owner}
          name={this.state.name}
          open={this.state.open}
          handleCloseRepo={this.handleCloseRepo}/>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Repositories);