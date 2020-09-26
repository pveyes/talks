import React, { Component } from 'react';
import { Deck, Slide, List, ListItem, Heading, Image, Code } from 'spectacle';
import styled, { keyframes } from 'styled-components';
import createTheme from 'spectacle/lib/themes/default';
import CodeSlide from 'spectacle-code-slide';
import PersonalBackgroundSlide from '../../shared/slides/PersonalBackground';
import FullScreenSlideImage from '../../shared/FullScreenSlideImage';
import raw from 'raw.macro';

const Colors = {
  BLUE: '#1BA0E2',
  BLACK: '#222222',
  WHITE: '#ffffff',
};

const theme = createTheme({
  primary: Colors.WHITE,
  textPrimary: Colors.BLACK,
  code: 'rgb(45,45,45)',
}, {
  primary: 'Inter, sans-serif',
});

const TextSize = {
  xs: 16,
  s: 20,
  m: 28,
  l: 40,
  xl: 64,
  xxl: 84,
};

const confetti = keyframes`
  from {
    --extra-confettiNumber: 80;
  }

  to {
    --extra-confettiNumber: 81;
  }
`

const ConfettiSpan = styled.span`
  display: inline-block;
  padding: 20px 40px;
  --extra-confettiNumber: 80;
  --extra-confettiLengthVariance: 12;
  --extra-confettiWeightVariance: 3;

  background: paint(extra-confetti);

  animation: ${confetti} 500s infinite;
`;

const Highlight = styled.span`
  display: inline-block;
  position: relative;
  z-index: 1;

  &::before {
    display: block;
    position: absolute;
    content: "";
    background-color: #aaf3d8;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    transform: rotate(0.5deg) skewX(32deg);
  }
`;

function ConfettiHeading(props) {
  return <Heading textColor={Colors.BLACK} textSize={TextSize.xl}><ConfettiSpan>{props.children}</ConfettiSpan></Heading>
}

const Note = styled('p')`
  font-size: 22px !important;
`;

export default class SlideDeck extends Component {
  render() {
    return (
      <>
        <Deck theme={theme} progress="pacman">
          <Slide bgColor="tv">
            <Heading textSize={64} textColor={Colors.BLACK}>Declarative Dynamic Pattern with CSS Paint API</Heading>
          </Slide>
          <PersonalBackgroundSlide />
          <Slide bgColor="#6FA58D">
            <Heading textColor={Colors.WHITE}>
              <img src={require('./assets/surabaya.jpg')} alt="Surabaya JS logo" />SurabayaCSS
          </Heading>
          </Slide>
          <FullScreenSlideImage src='https://media1.giphy.com/media/jOzQAhuT3WUp19JldV/giphy.gif' />
          <Slide>
            <Heading textColor={Colors.BLACK} textSize={TextSize.l}>Houdini is <em>the</em> CSS-in-JS</Heading>
            <Image src="https://i.imgflip.com/4gcfqc.jpg" />
          </Slide>
          <Slide>
            <ConfettiHeading>What is Houdini?</ConfettiHeading>
            <Note>
              Houdini is a group of APIs that give developers direct access to the CSS Object Model (CSSOM), enabling developers to write code the browser can parse as CSS, thereby <Highlight>creating new CSS features without waiting for them to be implemented natively in browsers</Highlight> - <a href="https://developer.mozilla.org/en-US/docs/Web/Houdini">MDN</a>
            </Note>
          </Slide>
          <Slide>
            <iframe title="Houdini API Browser Support table" src="https://ishoudinireadyyet.com/" frameBorder={0} width={1000} height={600} />
            <figcaption>
              <a href="https://ishoudinireadyyet.com">https://ishoudinireadyyet.com</a></figcaption>
          </Slide>
          <Slide>
            <ConfettiHeading>CSS Paint API</ConfettiHeading>
            <List>
              <ListItem textSize={TextSize.m}>Programmatically generate image for background-image / border-image</ListItem>
              <ListItem textSize={TextSize.m}>Code is executed in a paint worklet</ListItem>
              <ListItem textSize={TextSize.m}>Canvas-based API</ListItem>
            </List>
          </Slide>
          <CodeSlide
            slideIndex={7}
            transition={[]}
            code={raw('./codes/html-init.html')}
            lang='html'
            ranges={[
              { loc: [0, 18], title: 'index.html' },
              { loc: [5, 6], title: 'Usage in CSS' },
              { loc: [13, 14], title: 'Worklet initialization' },
              { loc: [12, 13], title: 'Feature detection' },
            ]}
          />
          <CodeSlide
            slideIndex={8}
            transition={[]}
            code={raw('./codes/worklet-example.js')}
            lang='js'
            ranges={[
              { loc: [0, 6], title: 'define class with paint method' },
              { loc: [7, 8], title: 'register' },
            ]}
          />
          <Slide>
            <Heading textSize={TextSize.xl} textColor={Colors.BLACK}>Declarative</Heading>
            <Code>background-image: paint(something)</Code>
          </Slide>
          <Slide>
            <ConfettiHeading>Dynamic?</ConfettiHeading>
          </Slide>
          <Slide>
            <Image src={require('./assets/hey.png')} alt="Hey feature list with dynamic blob as list background" width={600} />
          </Slide>
          <Slide>
            <Image src={require('./assets/blobs.png')} alt="Blobs.app screenshot" width={600} />
          </Slide>
          <Slide>
            <Heading textSize={TextSize.xl} textColor={Colors.BLACK}>SVG?</Heading>
          </Slide>
          <FullScreenSlideImage src='https://media0.giphy.com/media/VzfU9S4UsFW0PeISZJ/giphy.gif' />
          <Slide>
            <ConfettiHeading>Path2D API</ConfettiHeading>
            <Note>In recent versions of Chrome, Firefox and Opera you could make use of the Path2D API to draw Paths in Canvas based on SVG path data. The Path2D constructor can optionally take a SVG path data as its input and generate the equivalent path on Canvas.</Note>
            <a href="https://stackoverflow.com/questions/9458239/draw-path-in-canvas-with-svg-path-data-svg-paths-to-canvas-paths">https://stackoverflow.com/questions/9458239/draw-path-in-canvas-with-svg-path-data-svg-paths-to-canvas-paths</a>
          </Slide>
          <Slide>
            <Image src={require('./assets/blog-ol.png')} />
            <Note>
              <a href="https://fatihkalifa.com/dark-mode-web">https://fatihkalifa.com/dark-mode-web</a>
            </Note>
          </Slide>
          <Slide>
            <ConfettiHeading>Demo?</ConfettiHeading>
          </Slide>
          <FullScreenSlideImage src="https://media3.giphy.com/media/hV7Vz9VwUaedWJZIxp/giphy.gif" />
        </Deck>
      </>
    );
  }
}
