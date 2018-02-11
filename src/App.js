import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import importAll from 'import-all.macro';

const talkEntry = importAll.sync('./talks/**/index.js');

const talks = Object.keys(talkEntry).map(path => ({
  path: path.replace(/\.\/talks\/(\w+)\/index\.js/, '/$1'),
  Component: talkEntry[path].default,
  info: talkEntry[path].default.info,
})).sort((t1, t2) => {
  if (t1.info.date > t2.info.date) {
    return 1;
  }

  return -1;
});

class App extends Component {
  componentDidMount() {
    talks.slice(0, 3).forEach(talk => {
      talk.info.SlideDeck.preload()
    });
  }

  render() {
    return (
      <Switch>
        {talks.map(talk => (
          <Route key={talk.path} exact path={talk.path} component={talk.Component} />
        ))}
        <Route render={() => (
          <div>
            <h1>{`Talks`}</h1>
            <ul className='talks'>
              {talks.map(talk => (
                <li key={talk.path}>
                  <Link to={talk.path}>{talk.info.title}</Link>
                  <p>{talk.info.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )} />
      </Switch>
    );
  }
}

export default App;
