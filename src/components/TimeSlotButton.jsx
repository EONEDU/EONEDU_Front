import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import ColorPalette from './ui/ColorPalette';
import { FontStyle } from './ui/FontStyle';

const fadeIn = keyframes`
  from {
    background-color: ${ColorPalette.background};
  }
  to {
    background-color: ${({ isAvailable, isSelected }) =>
      isSelected ? ColorPalette.secondary : isAvailable ? ColorPalette.primary : ColorPalette.background};
  }
`;

const Button = styled.button`
  ${FontStyle.body1Regular}
  height: 30px;
  background-color: ${({ isLoading, isAvailable, isSelected }) =>
    isLoading ? ColorPalette.gray200 : isSelected ? ColorPalette.gray900 : isAvailable ? ColorPalette.white : ColorPalette.background};
  color: ${({ isLoading, isAvailable, isSelected }) =>
    isLoading ? 'white' : isSelected ? 'white' : isAvailable ? ColorPalette.black : ColorPalette.black};
  border: ${({ isLoading, isAvailable, isSelected }) =>
    isLoading ? `1px solid ${ColorPalette.gray700}` : isSelected ? `1px solid ${ColorPalette.gray900}` : isAvailable ? `1px solid ${ColorPalette.gray700}` : `1px solid ${ColorPalette.gray700}`};
  border-radius: 6px;
  cursor: ${({ isAvailable, isLoading }) => (isAvailable && !isLoading ? 'pointer' : 'not-allowed')};
  ${({ isLoading }) =>
    !isLoading &&
    css`
      animation: ${fadeIn} 0.3s ease-in-out;
  `}
`;

const TimeSlotButton = ({ time, isAvailable, isSelected, isLoading, onClick }) => {
  return (
    <Button
      isAvailable={isAvailable}
      isSelected={isSelected}
      isLoading={isLoading}
      onClick={onClick}
    >
      {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </Button>
  );
};

export default TimeSlotButton;