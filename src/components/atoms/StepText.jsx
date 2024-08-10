import React from "react";
import styled from "styled-components";
import HighlightText from "./HighlightText";
import FontStyle from "../ui/FontStyle";
import { useMediaQuery } from 'react-responsive';

const StepTextWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: end;
  align-self: start;
  white-space: nowrap;
`;

const DescriptionText = styled.span`
  ${FontStyle.body2Regular}

  @media (max-width: 768px) {
    ${FontStyle.body1Regular}
  }
`;

function StepText({ titleText, descriptionText }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <StepTextWrapper>
      <HighlightText 
        fontStyle={isMobile ? FontStyle.headlineBold : FontStyle.display1Bold} 
        text={titleText} 
      />
      <DescriptionText>{descriptionText}</DescriptionText>
    </StepTextWrapper>
  );
}

export default StepText;