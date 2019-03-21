import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomeView } from './views/HomeView';

class App extends React.Component {

  public render () {
    return (
      <Router>
        <Switch>
          <Route exact={true} path='/' component={HomeView} />
        </Switch>
      </Router>
    );
  }
}

export default App;
