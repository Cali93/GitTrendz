import { createStyles, Theme } from "@material-ui/core";

export const styles = (theme: Theme) => createStyles({
  root: {
    height: 'calc(100vh - 64px)',
    overflow: 'scroll',
  },
  formCard: {
    marginTop: '80px',
    padding: '20px'
  },
  formContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  label: {
    fontSize: '20px',
    fontWeight: 'bold'
  },
  chipInput: {
    width: '100% !important',
    marginTop: '16px',
    marginBottom: '8px',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  actionContainer: {
    width: '100%',
    textAlign: 'center'
  },
  actionBtn: {
    border: 'solid 1px #FFC107'
  },
  saveIcon: {
    margin: '-5px 3px 0 0'
  }
})