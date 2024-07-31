import styled from "styled-components";
import { FontStyle } from "./ui/FontStyle";

const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DescriptionBox = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${({ color }) => color};
  border-radius: 2px;
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