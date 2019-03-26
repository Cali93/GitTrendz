import * as React from 'react';
import { 
  AppBar,
  Toolbar,
  WithStyles,
  withStyles,
  Hidden,
  Button
} from '@material-ui/core';
import { FolderOpenRounded, CreateNewFolderRounded } from '@material-ui/icons';

import { BrandLogo } from '../../../components/common/BrandLogo';
import Drawer from '../Drawer/Drawer';
import { MobileMenuItem } from './MobileMenuItem';
import { styles } from './navbarStyles';

interface INavProps extends WithStyles<typeof styles> { }

interface INavState {
  open: boolean;
}

class Navbar extends React.Component<INavProps, INavState> {
  public state = {
    open: false
  };

  public toggleDrawer = () => {
    this.setState({
      open: !this.state.open
    });
  };

  public render () {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" >
          <Toolbar>
            <BrandLogo />
            <MobileMenuItem toggleDrawer={this.toggleDrawer}/>
            <Hidden smDown>
              {/* <Typography variant="h5" color="inherit" className={classes.appTitle}>
                OPEN DATA VISUALIZATION
              </Typography> */}
              <Button variant='outlined' color='inherit' className={classes.navButton}>
                <FolderOpenRounded className={classes.navBtnIcon} />
                Repositories
              </Button>
              <Button variant='outlined' color='inherit' className={classes.navButton}>
                <CreateNewFolderRounded className={classes.navBtnIcon} />
                Add repository
              </Button>
            </Hidden>    
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.open} toggleDrawer={this.toggleDrawer} />
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);