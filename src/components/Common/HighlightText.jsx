import styled from "styled-components";
import ColorPalette from "../ui/ColorPalette";

const Text = styled.div`
  position: relative;
  ${({ fontStyle }) => fontStyle}

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 3px;
    height: 10px;
    background-color: ${ColorPalette.highlight};
    z-index: -1;
  }
`;

function HighlightText({ fontStyle, text }) {
  return <Text fontStyle={fontStyle}>{text}</Text>;
}

export default HighlightText;