import React, { Fragment, Component }  from 'react';
import Head from 'react-helmet';
import raw from 'raw.macro';
import dynamic from '../../shared/dynamic';
import parse from '../../utils/parseSlideMarkdown';

const md = parse(raw('./README.md'))
const SlideDeck = dynamic(() => import('./Deck'));

export default class This extends Component {
  static info = {
    ...md,
    date: new Date('2018-07-03'),
    SlideDeck,
  }

  render() {
    return (
      <Fragment>
        <Head>
          <title>{md.title}</title>
        </Head>
        <SlideDeck />
      </Fragment>
    );
  }
}
