import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './appTheme';
import Navbar from '../static/layout/Navbar/Navbar';
import { ReposView } from '../static/views/ReposView';
// import { ReposView } from '../static/views/ReposView';

class App extends React.Component {
  public render () {
    return (
        <MuiThemeProvider theme={theme}>
          <Navbar />
          <Router>
            <Switch>
              <Route exact={true} path='/' component={ReposView} />
            </Switch>
          </Router>
        </MuiThemeProvider>
    );
  }
}

export default App;
