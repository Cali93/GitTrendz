import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { WithStyles, withStyles, createStyles, Theme } from '@material-ui/core';
import { CreateNewFolderRounded, FolderOpenRounded } from '@material-ui/icons';

export const styles = (theme: Theme) => createStyles({
  list: {
    width: 'auto'
  },
  primary: {
    color: theme.palette.secondary.main
  },
  divider: {
    backgroundColor: theme.palette.secondary.main
  }
});

interface IDrawerItemsProps extends WithStyles<typeof styles> {
  history?: any;
}

type DrawerProps = IDrawerItemsProps & RouteComponentProps<{}> 

class DrawerItems extends React.Component<DrawerProps> {
  public render () {
    const { classes: { divider, list, primary } } = this.props;
    return (
      <div className={list}>
      <List>
      <ListItem onClick={e => this.props.history.push('/')}>
        <ListItemIcon>
          <FolderOpenRounded color='secondary'/>
        </ListItemIcon>
        <ListItemText primary='REPOSITORIES' classes={{primary}}/>
      </ListItem>
      <Divider className={divider}/>
      <ListItem onClick={e => this.props.history.push('/add')}>
        <ListItemIcon>
          <CreateNewFolderRounded color='secondary'/>
        </ListItemIcon>
        <ListItemText primary='ADD REPOSITORY' classes={{primary}}/>
      </ListItem>
      </List>
    </div>
    );
  }
}

export default withStyles(styles)(withRouter(DrawerItems));
