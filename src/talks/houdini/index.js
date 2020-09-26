import React, { Component } from 'react';
import Head from 'react-helmet';
import raw from 'raw.macro';
import parse from '../../utils/parseSlideMarkdown';

const md = parse(raw('./README.md'))
const SlideDeck = React.lazy(() => import('./Deck'));

export default class This extends Component {
  static info = {
    ...md,
    date: new Date('2020-09-26'),
    SlideDeck,
  }

  render() {
    return (
      <>
        <Head>
          <title>{md.title}</title>
        </Head>
        <SlideDeck />
      </>
    );
  }
}
