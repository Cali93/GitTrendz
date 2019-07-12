import { createStyles, Theme } from '@material-ui/core';

export const styles = (theme: Theme) => createStyles({
  scroller: {
    height: 'calc(100vh - 64px)',
    overflowY: 'scroll'
  },
  cardItem: {
    height: 'auto',
    margin: '40px 0px',
    borderRadius: '8px',
    backgroundColor: '#FFFFFF',
    boxShadow:'0 2px 4px 0 rgba(0,0,0,0.1)',
    '&:hover': {
      boxShadow: '0 0 4px 0 rgba(33, 33, 33, 0.33)',
      cursor: 'pointer'
    }
  },
  languageContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '80px',
    left: '10px',
    top: '-35px',
    marginRight: '10px'
  },
  repoName: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontWeight: 700,
    padding: '10px',
    margin: '0 10px',
    textShadow: '1px 2px 3px rgba(0,0,0,0.3)'
  },
  stars: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
    right: '10px',
    top: '42px',
  },
  starIcons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px',
    width: '50px',
    background: 'linear-gradient(#FFFFFF, #ECEFF1)',
    boxShadow:'0 0 2px 0 rgba(33, 33, 33, 0.33)',
    borderRadius: '6px',
    color: '#FBC02D'
  },
  infoText: {
    zIndex: 100,
    fontWeight: 600
  }
});