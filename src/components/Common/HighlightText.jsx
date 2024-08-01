import styled from "styled-components";

const Text = styled.div`
  position: relative;
  ${({ fontStyle }) => fontStyle}

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 10px;
    background-color: #ffeb3b;
    z-index: -1;
  }
`;

function HighlightText({ fontStyle, text }) {
  return <Text fontStyle={fontStyle}>{text}</Text>;
}

export default HighlightText;