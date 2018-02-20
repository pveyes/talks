import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import importAll from 'import-all.macro';
import { css } from 'emotion';

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

const styles = {
  main: css`
    width: 700px;
    margin: 0 auto;
  `,
  title: css`
    font-family: 'Asap', sans-serif;
    font-weight: 600;
    text-align: center;
    font-size: 5em;
  `,
  talks: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,
  talk: css`
    padding: 20px;



    & a {
      color: #fff;

      &:first-child {
        text-decoration: none;
        font-family: 'Asap', sans-serif;
        font-weight: 600;
        font-size: 1.5em;
      }
    }

    & p {
      line-height: 1.5;
    }
  `,
};

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
          <div className={styles.main}>
            <h1 className={styles.title}>{`Talks`}</h1>
            <ul className={styles.talks} data-test="talks">
              {talks.map(talk => (
                <li key={talk.path} className={styles.talk}>
                  <Link to={talk.path}>{talk.info.title}</Link>
                  <p>{talk.info.description}</p>
                  <Link to={talk.path}>See slides</Link>
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
