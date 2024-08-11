import styled from "styled-components";
import FontStyle from "../ui/FontStyle";

const StyledText = styled.div`
  ${FontStyle.display3Bold}
  white-space: nowrap;

  @media (max-width: 768px) {
    ${FontStyle.display1Bold}
  }
`;

function TitleText({ text }) {
  return <StyledText>{text}</StyledText>;
}

export default TitleText;