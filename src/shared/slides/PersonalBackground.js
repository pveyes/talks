import React from 'react';
import { Slide } from 'spectacle';
import { css } from 'emotion';
import { GitHub, Twitter, Link } from 'react-feather';

const styles = {
  me: css`
    text-align: left;
    margin-bottom: .1em;
  `,
  sub: css`
    text-align: left;
    font-size: .8em;
    margin-top: 0;
    margin-bottom: .1em;
  `,
  team: css`
    text-align: left;
    font-size: .7em;
    margin-top: 0;
    font-weight: 400;
    margin-bottom: 1.5em;
  `,
  social: css`
    font-family: sans-serif;
  `,
  socialLink: css`
    color: #383f51;
    opacity: .8;
    text-decoration: none;
    display: block;
    height: 24px;
    font-size: 0.8em;
    font-weight: 600;
    display: flex;
    align-items: center;
    margin: 10px 0;

    &:hover {
      opacity: 1;
    }

    & span {
      margin-left: 10px;
      display: inline-block;
    }
  `,
}

export default class PersonalBackgroundSlide extends React.Component {
  render() {
    return (
      <Slide bgColor='#fafaf7' textColor='#383f51' textAlign='left'>
        <h1 className={styles.me}>Fatih Kalifa</h1>
        <h2 className={styles.sub}>Software Engineer | Traveloka</h2>
        <h3 className={styles.team}>Web Infrastructure</h3>
        <div className={styles.social}>
          <a className={styles.socialLink} href="https://twitter.com/pveyes">
            <Twitter />
            <span>pveyes</span>
          </a>
          <a className={styles.socialLink} href="https://github.com/pveyes">
            <GitHub />
            <span>
              pveyes
            </span>
          </a>
          <a className={styles.socialLink} href="https://fatihkalifa.com">
            <Link />
            <span>https://fatihkalifa.com</span>
          </a>
        </div>
      </Slide>
    );
  }
}
