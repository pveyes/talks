import React from 'react';
import { Deck, Slide, Text } from 'spectacle';

export default class FJest extends React.Component {
  static info = {
    title: 'Testing JavaScript Applications with Jest',
  }

  render() {
    return (
      <Deck>
        <Slide>
          <Text>{'Testing JavaScript Applications with Jest'}</Text>
        </Slide>
        <Slide>
          <Text>{'Testing Applications with Jest'}</Text>
        </Slide>
      </Deck>
    );
  }
}
