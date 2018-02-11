import React, { Component }  from 'react';
import dynamic from '../../shared/dynamic';

const SlideDeck = dynamic(() => import('./Deck'));

export default class FJest extends Component {
  static info = {
    title: 'Testing JavaScript Applications with Jest',
    date: new Date('2018-02-20'),
    SlideDeck,
  }

  render() {
    return <SlideDeck />;
  }
}
