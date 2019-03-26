import * as React from 'react';
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

interface IDrawerItemsProps extends WithStyles<typeof styles> { }

class DrawerItems extends React.Component<IDrawerItemsProps> {
  public render () {
    const { classes: { divider, list, primary } } = this.props;
    return (
      <div className={list}>
      <List>
      <ListItem >
        <ListItemIcon>
          <FolderOpenRounded color='secondary'/>
        </ListItemIcon>
        <ListItemText primary='REPOSITORIES' classes={{primary}}/>
      </ListItem>
      <Divider className={divider}/>
      <ListItem >
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

export default withStyles(styles)(DrawerItems)