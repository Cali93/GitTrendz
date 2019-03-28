import * as React from 'react';

import collibraLogo from '../../assets/Collibra-Logo-RGB-FullColor.svg';

export const BrandLogo: React.FC = (props) => {

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