import * as React from 'react';
import {SwipeableDrawer, IconButton, Grid, withStyles} from '@material-ui/core';
import {ArrowBackRounded} from '@material-ui/icons';
import DrawerItems from './DrawerItems';
import { BrandLogo } from 'src/components/common/BrandLogo';

const styles = {
  paper: {
    backgroundColor: '#212121'
  }
};

interface IDrawerProps {
  classes?: any;
  open : boolean;
  toggleDrawer : any;
};

class Drawer extends React.Component<IDrawerProps> {
  public render () {
    const { open, toggleDrawer, classes: { paper } } = this.props;
    return (
      <SwipeableDrawer
        anchor='left'
        open={open}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        classes={{paper}}
      >
        <Grid container justify='center' alignItems='center'>
          <Grid item xs={2}>
            <IconButton onClick={toggleDrawer}>
              <ArrowBackRounded color='secondary'/>
            </IconButton>
          </Grid>
          <Grid item xs={10}>
            <BrandLogo />
          </Grid>
        </Grid>
        <DrawerItems/>
      </SwipeableDrawer>
    );
  }
}

export default withStyles(styles)(Drawer);