import React from 'react';
import { Slide } from 'spectacle';
import { css } from 'emotion';
import { Github, Twitter, Instagram } from 'react-feather';

const styles = {
  me: css`
    text-align: left;
    margin-bottom: .01em;
  `,
  sub: css`
    text-align: left;
    font-size: .8em;
    margin-bottom: 2em;
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

const slideBg = 'https://scontent-sit4-1.cdninstagram.com/vp/c82d61553371a60b729893966c1f6f83/5B12D030/t51.2885-15/e35/16110321_413416848990275_9200249689574735872_n.jpg';

export default class PersonalBackgroundSlide extends React.Component {
  render() {
    return (
      <Slide bgImage={slideBg} textColor='#383f51'>
        <h1 className={styles.me}>Fatih Kalifa</h1>
        <h2 className={styles.sub}>Software Engineer | Traveloka</h2>
        <div className={styles.social}>
          <a className={styles.socialLink} href="https://github.com/pveyes">
            <Github />
            <span>
              pveyes
            </span>
          </a>
          <a className={styles.socialLink} href="https://twitter.com/pveyes">
            <Twitter />
            <span>pveyes</span>
          </a>
          <a className={styles.socialLink} href="https://instagram.com/pveyes">
            <Instagram />
            <span>fatihkalifa</span>
          </a>
        </div>
      </Slide>
    );
  }
}
