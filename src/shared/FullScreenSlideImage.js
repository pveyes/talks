import React from 'react';
import styled from '@emotion/styled';
import { Slide } from 'spectacle';

const FullScreenSlide = styled(Slide)`
  height: 100vh;
  width: 100vw;
  max-height: 100vh !important;
  max-width: 100vw !important;
`;


export default function FullScreenSlideImage(props) {
    return <FullScreenSlide bgImage={props.src} maxHeight="100vh" />
}