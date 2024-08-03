import styled from "styled-components";
import ColorPalette from "../ui/ColorPalette";

const Text = styled.div`
  ${(props) => props.fontStyle}
  position: relative;
  display: inline-block;
  z-index: 0;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 10px;
    background-color: ${ColorPalette.highlight};
    z-index: -1;
  }
`;

function HighlightText({ fontStyle, text }) {
  return <Text fontStyle={fontStyle}>{text}</Text>;
}

export default HighlightText;