import { createStyles, Theme } from '@material-ui/core';

export const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    marginBottom: '64px'
  },
  appTitle: {
    flexGrow: 3,
    textAlign: 'center'
  },
  actionButtons:{
    flexGrow: 2
  },
  navButton: {
    margin: '0 10px'
  },
  navBtnIcon: {
    marginTop: -2,
    marginRight: theme.spacing.unit
  }
});