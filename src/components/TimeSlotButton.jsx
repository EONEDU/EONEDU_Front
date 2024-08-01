import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import ColorPalette from './ui/ColorPalette';
import FontStyle from './ui/FontStyle';
import SizeValue from './ui/SizeValue';

const fadeIn = keyframes`
  from {
    background-color: ${ColorPalette.gray050};
  }
  to {
    background-color: ${({ isAvailable, isSelected }) =>
      isSelected ? ColorPalette.secondary : isAvailable ? ColorPalette.primary : ColorPalette.background};
  }
`;

const Button = styled.button`
  ${FontStyle.body1Regular}
  height: ${SizeValue.height.toggleButtonSm};
  border-radius: ${SizeValue.radius.md};
  background-color: ${({ isLoading, isAvailable, isSelected }) =>
    isLoading ? ColorPalette.gray050 : isSelected ? ColorPalette.gray900 : isAvailable ? ColorPalette.white : ColorPalette.gray050};

  color: ${({ isLoading, isAvailable, isSelected }) =>
    isLoading ? ColorPalette.gray050 : isSelected ? 'white' : isAvailable ? ColorPalette.black : ColorPalette.gray300};

  border: ${({ isLoading, isAvailable, isSelected }) =>
    isLoading ? `1px solid ${ColorPalette.gray050}` : isSelected ? `1px solid ${ColorPalette.gray900}` : isAvailable ? `1px solid ${ColorPalette.gray700}` : `none`};

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