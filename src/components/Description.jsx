import styled from "styled-components";
import FontStyle from "./ui/FontStyle";
import SizeValue from "./ui/SizeValue";

const DescriptionWrapper = styled.div`
  gap: ${SizeValue.space.md};
  display: flex;
  align-items: center;
`;

const DescriptionBox = styled.div`
  width: ${SizeValue.icon.md};
  height: ${SizeValue.icon.md};
  border-radius: ${SizeValue.radius.xs};
  background-color: ${({ color }) => color};
  
`;

const DescriptionText = styled.div`
  ${FontStyle.body1Regular}
`;

function Description({ text, color }) {
  return (
    <DescriptionWrapper>
      <DescriptionBox color={color} />
      <DescriptionText>{text}</DescriptionText>
    </DescriptionWrapper>
  );
}

export default Description;