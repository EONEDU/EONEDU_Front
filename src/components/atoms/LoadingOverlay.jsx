import React from 'react';
import styled, { keyframes } from 'styled-components';
import ColorPalette from '../ui/ColorPalette';

const blinkAnimation = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${ColorPalette.white};
  z-index: 9999;
`;

const Text = styled.div`
  font-size: 2rem;
  color: ${ColorPalette.black};
  animation: ${blinkAnimation} 1s infinite ease-in-out;
`;

const LoadingOverlay = () => (
  <Overlay>
    <Text>Loading...</Text>
  </Overlay>
);

export default LoadingOverlay;