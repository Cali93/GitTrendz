import * as React from 'react';
import { Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

interface IMobileMenuItemProps {
  toggleDrawer: any;
}

export const MobileMenuItem: React.FC<IMobileMenuItemProps> = (props) => {
    return (
      <Hidden mdUp>
        <IconButton color="inherit" aria-label="Menu" onClick={props.toggleDrawer}>
          <MenuIcon />
        </IconButton> 
      </Hidden>
    );
};
