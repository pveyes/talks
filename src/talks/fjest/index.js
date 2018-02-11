import React from 'react';
import { Deck, Slide, Heading, Text } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import Dim from '../../shared/Dim';
import PersonalBackgroundSlide from '../../shared/slides/PersonalBackground';

const theme = createTheme({
  primary: '#99424f',
}, {
  primary: 'Helvetica, sans-serif',
});

export default class FJest extends React.Component {
  static info = {
    title: 'Testing JavaScript Applications with Jest',
  }

  render() {
    return (
      <Deck theme={theme}>
        <Slide>
          <Heading textSize={44}>Testing JavaScript Applications with Jest</Heading>
          <div style={{marginTop: '1em'}}>
            <Text textSize={28} textColor="#fff">
              <Dim>https://</Dim>
              <span>talks.fatihkalifa.com/fjest</span>
            </Text>
          </div>
        </Slide>
        <PersonalBackgroundSlide />
        <Slide>

        </Slide>
      </Deck>
    );
  }
}
