import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSVG = styled.img`
  width: ${props => props.width || 24}px;
  height: auto;
`;

const SVGImage = ({ src, width }) => {
  return <StyledSVG src={src} width={width} alt="SVG Image" />;
};

SVGImage.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
};

SVGImage.defaultProps = {
  width: 24,
};

export default SVGImage;