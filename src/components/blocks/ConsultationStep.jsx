import styled from "styled-components";
import ColorPalette from "../ui/ColorPalette";
import SizeValue from "../ui/SizeValue";
import VerticalDevider from "../atoms/VerticalDevider";
import StepText from "../atoms/StepText";

const StepWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
`;

const StepContentWrapper = styled.div`
  display: flex;
  align-items: stretch;
  gap: ${SizeValue.space.sm};
  justify-content: space-between;
  width: 100%;
`;

const DividerWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 ${SizeValue.space.sm};
  flex: 0 0 auto;
`;

const ChildrenWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex: 1;
`;

function ConsultationStep({ stepTitle, stepDescription, children }) {
  return (
    <StepWrapper>
      <StepText titleText={stepTitle} descriptionText={stepDescription} />
      <StepContentWrapper>
        <DividerWrapper>
          <VerticalDevider color={ColorPalette.gray200} />
        </DividerWrapper>
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </StepContentWrapper>
    </StepWrapper>
  );
}

export default ConsultationStep;