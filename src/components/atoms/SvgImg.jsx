import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSVG = styled.img`
  width: ${props => props.width}px;
  height: auto;
`;

const SVGImage = ({ src, width = 24 }) => {
  return <StyledSVG src={src} width={width} alt="SVG Image" />;
};

SVGImage.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
};

export default SVGImage;