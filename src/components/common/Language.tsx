import * as React from 'react';
import cn from 'classnames'
import { Typography, WithStyles, withStyles } from '@material-ui/core';

import { getLanguageIconName } from '../../helpers/getLanguageIconName';

const styles = {
  languagesIcons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px',
    width: '50px',
    borderRadius: '6px',
    background: 'linear-gradient(#ECEFF1, #FFFFFF)',
    boxShadow:'0 0 2px 0 rgba(33, 33, 33, 0.33)',
    fontSize: '40px'
  },
  infoText: {
    zIndex: 100,
    fontWeight: 600
  }
};

interface ILanguageProps  extends WithStyles<typeof styles> {
  language: string;
}

const LanguageComponent: React.FunctionComponent<ILanguageProps> = ({classes, language}) => {
  const languageIconName = getLanguageIconName(language);
  const iconClassnames = cn('colored', `devicon-${languageIconName}-plain`);

  return (
    <React.Fragment>
      <div className={classes.languagesIcons}>
        <i className={iconClassnames}/>
      </div>
      <Typography variant='subtitle2' align='center' className={classes.infoText}>
        {language}
      </Typography>
    </React.Fragment>
  );
};

export const Language = withStyles((theme) => (styles))(LanguageComponent);