import { createStyles, Theme } from "@material-ui/core";

export const styles = (theme: Theme) => createStyles({
  header: {
    position: 'relative',
    top: -40,
    right: 20,
  },
  goBack: {
    position: 'relative',
    zIndex: 1,
    top: 20,
    left: 20
  },
  headerItems: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '6px',
    margin: '0 5px',
    fontWeight: 500,
    textDecoration: 'none',
    color: 'inherit'
  },
  headerIcons: {
    fontSize: '35px'
  },
  starIcon: {
    color: '#FFC107'
  },
  title: {
    textAlign: 'center',
    padding: '0 0 20px 0'
  },
  actionsBtn: {
    textAlign: 'center',
    margin: '10px 0',
  },
  deleteBtn: {
    border: 'solid 1px #b71c1c',
    '&:hover': {
      background: '#b71c1c'
    }
  },
  editBtn: {
    border: 'solid 1px #FFC107'
  },
  textField: {
    fontWeight: 'bold'
  },
  textSection: {
    marginBottom: '15px'
  },
  languagesContainer:{
    display: 'flex',
    justifyContent: 'flex-start',
    height: '80px',
    padding: '10px 0'
  },
  languageContainer:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '80px',
    margin: '0 5px'
  }
})