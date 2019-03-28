import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Card, WithStyles, withStyles, Fab, Snackbar, Typography } from '@material-ui/core';
import { SaveRounded } from '@material-ui/icons';
import ChipInput from '@onecloudinc/material-ui-chip-input';

import { DefaultTextField } from '../../../common/DefaultTextField';
import { SnackbarContentWrapper } from '../../../common/SnackbarContent';
import { styles } from './editRepositoryStyles';

interface IEditRepositoryProps extends WithStyles<typeof styles> {
  location: any;
}

interface IEditRepositoryState {
  description?: string;
  name?: string;
  owner?: {
    login: string;
  };
  url?: string;
  languages?: string[];
  isSnackbarOpen?: boolean;
}

class EditRepository extends React.Component<IEditRepositoryProps, IEditRepositoryState> {
  constructor (props) {
    super(props);
    this.state = {
      description: '',
      name: '',
      owner: {
        login: ''
      },
      url: '',
      languages: []
    }
  }

  public componentDidMount () {
    if(this.props.location.pathname.includes('edit') && this.props.location.state.repo) {
      const { repo } = this.props.location.state;
      const { name, description, owner, url, languages } = repo;
      this.setState({ 
        name,
        description,
        owner,
        url,
        languages: languages.edges.map(({node}) => node.name)
      })
    }
  }

  public handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    } as Pick<IEditRepositoryState, keyof IEditRepositoryState>);
  };

  public handleAddChip = chip => {
    this.setState({
      languages: [...this.state.languages, chip]
    } as Pick<IEditRepositoryState, 'languages'>)
  };

  public handleDeleteChip (deletedChip) {
    this.setState({
      languages: this.state.languages.filter((lang) => lang !== deletedChip)
    })
  };

  public handleCloseSnackbar = () => {
    this.setState({ isSnackbarOpen: false });
  };

  public triggerError = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    this.setState({ isSnackbarOpen: true });
  };

  public renderSnackbar = () => {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={this.state.isSnackbarOpen}
        autoHideDuration={4000}
        onClose={this.handleCloseSnackbar}
      >
        <SnackbarContentWrapper
          onClose={this.handleCloseSnackbar}
          variant='error'
          message='Unauthorized action'
        />
      </Snackbar>
    )
  }

  public render () {
    const { classes } = this.props;
    return (
      <Grid container justify='center' alignItems='center' className={classes.root}>
        <Grid item xs={10} sm={8} md={6}>
          <Card className={classes.formCard}>
            <Typography variant='h5' align='center'>
              Repository Informations
            </Typography>
            <form className={classes.formContainer} noValidate autoComplete="off">
            <DefaultTextField
              name='name'
              label="Name"
              required
              classes={{input: classes.textField}}
              value={this.state.name}
              onChange={this.handleChange}
            />
            <DefaultTextField
              name='owner'
              label="Owner"
              required
              classes={{input: classes.textField}}
              value={this.state.owner.login}
              onChange={this.handleChange}
            />
            <DefaultTextField
              name='description'
              multiline
              rowsMax="4"
              label="Description"
              classes={{input: classes.textField}}
              value={this.state.description}
              onChange={this.handleChange}
            />
            <DefaultTextField
              name='url'
              label="URL"
              classes={{input: classes.textField}}
              value={this.state.url}
              onChange={this.handleChange}
            />
            <ChipInput
              fullWidthInput
              classes={{
                root: classes.chipInput
              }}
              value={this.state.languages}
              label='Languages'
              variant='outlined'
              placeholder='Type &amp; press enter to add more'
              onAdd={(chip) => this.handleAddChip(chip)}
              onDelete={(chip) => this.handleDeleteChip(chip)}
              InputLabelProps={{
                shrink: true,
                className: classes.label
              }}
            />
            <div className={classes.actionContainer}>
              <Fab variant='extended' onClick={this.triggerError} color='primary' className={classes.actionBtn}>
                <SaveRounded className={classes.saveIcon}/>
                Save repository
              </Fab>
            </div>
            </form>
          </Card>
          { this.renderSnackbar() }
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(withRouter(EditRepository));
