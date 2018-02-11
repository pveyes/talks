import React, { Component }  from 'react';
import dynamic from '../../shared/dynamic';
import preval from 'preval.macro';

// TODO remove boilerplate, write our own macro or something
const md = preval`
  const parse = require('../../utils/parseSlideMarkdown');
  const mdPath = require('path').resolve(__dirname, './README.md');
  const md = require('fs').readFileSync(mdPath, { encoding: 'utf-8' });
  module.exports = parse(md);
`;

const SlideDeck = dynamic(() => import('./Deck'));

export default class FJest extends Component {
  static info = {
    ...md,
    date: new Date('2018-02-20'),
    SlideDeck,
  }

  render() {
    return <SlideDeck />;
  }
}
