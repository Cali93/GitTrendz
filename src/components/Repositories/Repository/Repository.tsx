import * as React from 'react';
import cn from 'classnames';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withMobileDialog, Grid, Fab, withStyles, WithStyles, Theme, createStyles } from '@material-ui/core';
import { DeleteRounded, ArrowBackRounded, StarOutlined, EditRounded } from '@material-ui/icons/'

const styles = (theme: Theme) => createStyles({
  header: {
    position: 'relative',
    top: -40,
    right: 20,
  },
  title: {
    textAlign: 'center'
  },
  delete: {
    textAlign: 'center',
    margin: '10px 0',
  },
  deleteBtn: {
    '&:hover': {
      background: '#b71c1c'
    }
  },
  goBack: {
    position: 'relative',
    zIndex: 1,
    top: 20,
    left: 20
  },
  headerItems: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '6px',
    margin: '0 5px',
    fontWeight: 500,
    textDecoration: 'none',
    color: 'inherit'
  },
  headerIcons: {
    fontSize: '35px'
  },
  starIcon: {
    color: '#FBC02D'
  }
})

interface IRepositoryProps extends WithStyles<typeof styles>{
  fullScreen?: boolean;
  open?: boolean;
  repo: any;
  handleCloseRepo?: any;
}

class Repository extends React.Component<IRepositoryProps> {

  
  // public renderLanguages = language => {
  //   const languageIconName = getLanguageIconName(language);
  //   const {classes} = this.props;
  //   const iconClassnames = cn('colored', `devicon-${languageIconName}-plain`);

  //   return (
  //     <div className={classes.languages}>
  //       <div className={classes.languagesIcons}>
  //         <i className={iconClassnames}/>
  //       </div>
  //       <Typography variant='subtitle2' align='center' className={classes.infoText}>
  //         {language}
  //       </Typography>
  //     </div>
  //   );
  // };

  public render () {

    const { classes, fullScreen, handleCloseRepo, open, repo } = this.props;

    return (
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleCloseRepo}
          aria-labelledby="responsive-dialog-title"
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
          <DialogTitle id="responsive-dialog-title">
          <div className={classes.title}>
            {repo.name}
          </div>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Description: {repo.description}
              Owner: {repo.owner.login}
            </DialogContentText>
            {/* <DialogContentText>
            </DialogContentText> */}
          </DialogContent>
          <DialogActions>
            <Grid container justify='center'>
              <Grid item xs={10} className={classes.delete}>
                <Fab variant='extended' onClick={handleCloseRepo} color='primary' className={classes.deleteBtn}>
                  <EditRounded />
                  Edit this repository
                </Fab>
              </Grid>
              <Grid item xs={10} className={classes.delete}>
                <Fab variant='extended' onClick={handleCloseRepo} color='primary' className={classes.deleteBtn}>
                  <DeleteRounded />
                  Delete this repository
                </Fab>
              </Grid>
            </Grid>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(withMobileDialog<IRepositoryProps>({breakpoint: 'xs'})(Repository));