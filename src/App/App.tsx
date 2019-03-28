import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './appTheme';
import Navbar from '../static/layout/Navbar/Navbar';
import { ReposView } from '../static/views/ReposView';
import { RepoEdit } from '../static/views/RepoEdit';

class App extends React.Component {
  public render () {
    return (
        <MuiThemeProvider theme={theme}>
          <Router>
            <Navbar />
            <Switch>
              <Route exact={true} path='/' component={ReposView} />
              <Route exact={true} path='/add' component={RepoEdit} />
              <Route exact={true} path='/edit' component={RepoEdit} />
            </Switch>
          </Router>
        </MuiThemeProvider>
    );
  }
}

export default App;
