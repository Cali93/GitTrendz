import * as React from 'react';
// import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import collibraLogo from '../../assets/Collibra-Logo-RGB-FullColor.svg';

export const BrandLogo: React.FC = (props) => {
  // const isOnMobile = useMediaQuery('(max-width:960px)');
  // const flexGrow = isOnMobile ? 1 : 0;

  const styles = {
    root: {
      padding: '5px',
      flexGrow: 1
    },
    brandLogo: {
      height: '50px'
    }
  }
  
  return (
    <div style={styles.root}>
      <img src={collibraLogo} style={styles.brandLogo} />
    </div>
  );
};