import * as React from 'react';
import cn from 'classnames';
import { 
  Dialog,DialogActions, DialogContent, DialogContentText, DialogTitle,
  Grid, Fab, Snackbar
} from '@material-ui/core';
import { withMobileDialog,  withStyles, WithStyles } from '@material-ui/core';
import { DeleteRounded, EditRounded, ArrowBackRounded, StarOutlined } from '@material-ui/icons/';

import { ButtonLink } from '../../common/ButtonLink';
import { Language } from '../../common/Language';
import { SnackbarContentWrapper } from '../../common/SnackbarContent';
import { styles } from './repositoryStyles';

interface IRepositoryProps extends WithStyles<typeof styles>{
  fullScreen?: boolean;
  isModalOpen?: boolean;
  repo: any;
  handleCloseRepo?: any;
  handleCloseSnackbar?: any;
}

interface IRepositoryState{
  isSnackbarOpen: boolean;
}

class Repository extends React.Component<IRepositoryProps, IRepositoryState> {

  public state = {
    isSnackbarOpen: false
  }

  public handleCloseSnackbar = () => {
    this.setState({ isSnackbarOpen: false });
  };
  
  public triggerError = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    this.setState({ isSnackbarOpen: true });
  };


  public renderDescription = () => {
    const { classes, repo: { description } } = this.props;
    return description ? (
      <Grid item xs={10} className={classes.textSection}>
        <span className={classes.textField}>
          Description:
        </span>
        <DialogContentText>
          {description}
        </DialogContentText>
      </Grid>
    ) : null
  };
  
  public renderLanguages = () => {
    const { classes, repo: { languages } } = this.props;
    if (languages.edges.length === 0) {
      return null;
    }
    return (
      <Grid item xs={10}>
        <span className={classes.textField}>
          Languages:
        </span>
        <div className={classes.languagesContainer}>
          {
            languages.edges.map(
              ({node}) => (
                <div className={classes.languageContainer} key={node.name}>
                  <Language language={node.name} />
                </div>
              )
            )
          }
        </div>
      </Grid>
    )
  };

  public renderSnackbar = () => {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={this.state.isSnackbarOpen}
        autoHideDuration={4000}
        onClose={this.handleCloseSnackbar}
      >
        <SnackbarContentWrapper
          onClose={this.handleCloseSnackbar}
          variant='error'
          message='Unauthorized action'
        />
      </Snackbar>
    )
  };

  public render () {

    const { classes, fullScreen, handleCloseRepo, isModalOpen, repo } = this.props;

    return (
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={isModalOpen}
          onClose={handleCloseRepo}
        >
          <Fab onClick={handleCloseRepo} color="primary" className={classes.goBack}>
            <ArrowBackRounded />
          </Fab>
          <Grid container justify='flex-end' alignItems='center' className={classes.header}>
            <Grid item xs={2} className={classes.headerItems}>
              {repo.stargazers.totalCount}
              <StarOutlined fontSize='large' className={classes.starIcon}/>
              stars
            </Grid>
            <Grid item xs={2} className={classes.headerItems}>
              {repo.forkCount}
              <i className={cn('devicon-git-plain colored', classes.headerIcons)}/>
              forks
            </Grid>
            <Grid item xs={2}>
              <a href={repo.url} target='blank' className={classes.headerItems}>
                view
                <i className={cn('devicon-github-plain colored', classes.headerIcons)}/>
                repo
              </a>
            </Grid>
          </Grid>
          <DialogTitle className={classes.title}>
            {repo.name}
          </DialogTitle>
          <DialogContent>
            <Grid container justify='center'>
              <Grid item xs={10} className={classes.textSection}>
                <span className={classes.textField}>
                  Owner:
                </span>
                <DialogContentText>
                  {repo.owner.login}
                </DialogContentText>
              </Grid>
              { this.renderDescription() }
              { this.renderLanguages() }
              </Grid>
          </DialogContent>
          <DialogActions>
            <Grid container justify='center'>
              <Grid item xs={10} className={classes.actionsBtn}>
                <ButtonLink
                  isFab
                  fabProps={{
                    fabClasses: classes.editBtn,
                    color: 'primary'
                  }}
                  variant='contained'
                  to={{
                    pathname: '/edit',
                    state: {
                      repo
                    }
                  }}
                  className={classes.editBtn}
                  color='primary'
                >
                  <EditRounded />
                  Edit repository
                </ButtonLink>
              </Grid>
              <Grid item xs={10} className={classes.actionsBtn}>
                <Fab variant='extended' onClick={this.triggerError} color='primary' className={classes.deleteBtn}>
                  <DeleteRounded />
                  Delete repository
                </Fab>
              </Grid>
            </Grid>
          </DialogActions>
        </Dialog>
        { this.renderSnackbar() }
      </div>
    );
  }
}

export default withStyles(styles)(withMobileDialog<IRepositoryProps>({breakpoint: 'xs'})(Repository));