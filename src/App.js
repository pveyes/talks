import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

// list of slides
// TODO use babel-preval / macro
import FJest from './talks/fjest';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/fjest' component={FJest} />
        <Route render={() => (
          <div>
            <h1>Talks</h1>
            <ul>
              <li>
                <Link to='/fjest'>{'Testing JavaScript Applications with Jest'}</Link>
              </li>
            </ul>
          </div>
        )} />
      </Switch>
    );
  }
}

export default App;
