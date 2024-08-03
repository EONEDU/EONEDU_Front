import styled from "styled-components";
import HighlightText from "./HighlightText";
import FontStyle from "../ui/FontStyle";

const StepTextWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: end;
  align-self: start;
`;

const DescriptionText = styled.span`
  ${FontStyle.body2Regular}
`;


function StepText({ titleText, descriptionText }) {
  return (
    <StepTextWrapper>
      <HighlightText fontStyle={FontStyle.display1Bold} text={titleText} />
      <DescriptionText>{descriptionText}</DescriptionText>
    </StepTextWrapper>
  );
}

export default StepText;
