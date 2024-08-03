import styled from "styled-components";
import ColorPalette from "../ui/ColorPalette";
import SizeValue from "../ui/SizeValue";
import VerticalDevider from "../atoms/VerticalDevider";
import StepText from "../atoms/StepText";

const StepWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StepContentWrapper = styled.div`
  display: flex;
  align-items: stretch;
  gap: ${SizeValue.space.xl};
  justify-content: space-between;
`;

const DividerWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const ChildrenWrapper = styled.div`
  display: flex;
  align-items: flex-end;
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