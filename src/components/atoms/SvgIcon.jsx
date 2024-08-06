import React from 'react';
import styled from 'styled-components';
import ColorPalette from '../ui/ColorPalette';

const SVGContainer = styled.div`
  display: inline-block;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  svg {
    width: 100%;
    height: 100%;
    fill: ${({ color }) => color};
  }
`;

const SVGIcon = ({ svg: SvgComponent, width = 24, height = 24, color = ColorPalette.black }) => {
  return (
    <SVGContainer width={width} height={height} color={color}>
      <SvgComponent />
    </SVGContainer>
  );
};

export default SVGIcon;