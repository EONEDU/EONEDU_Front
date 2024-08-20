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
  ${FontStyle.body1Regular}

  @media (max-width: 768px) {
    ${FontStyle.captionMedium}
  }
`;

function StepText({ titleText, descriptionText }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <StepTextWrapper>
      <HighlightText 
        fontStyle={isMobile ? FontStyle.subhead3Bold : FontStyle.headlineBold} 
        text={titleText} 
      />
      <DescriptionText>{descriptionText}</DescriptionText>
    </StepTextWrapper>
  );
}

export default StepText;