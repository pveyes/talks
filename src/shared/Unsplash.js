import React from 'react';
import styled from 'react-emotion';
import { Slide, Text } from 'spectacle';

const FullScreenSlide = styled(Slide)`
  height: 100vh;
  width: 100vw;
  max-height: 100vh !important;
  max-width: 100vw !important;
`;

const ImageCredit = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 1vh 1vw;
  background-color: ${props => props.bgColor};
`;

export default class UnsplashSlide extends React.Component {
  render() {
    const textColor = !this.props.blackBg ? '#000' : '#fff';
    const bgColor = !this.props.blackBg ? 'rgba(255, 255, 255, .25)' : 'rgba(0, 0, 0, .25)';
    return (
      <FullScreenSlide bgImage={this.props.src} maxHeight="100vh">
        <ImageCredit bgColor={bgColor}>
          <Text textSize={24} textColor={textColor}>
            <strong>{this.props.credit}</strong>
          </Text>
        </ImageCredit>
        {this.props.children}
      </FullScreenSlide>
    )
  }
}
