import styled from "styled-components";
import ColorPalette from "./ui/ColorPalette";
import { FontStyle } from "./ui/FontStyle";

const StyledButton = styled.button`
  ${FontStyle.headlineBold}
  width: 100%;
  display: flex;
  border: none;
  border-radius: 6px;
  height: 50px;
  background-color: ${ColorPalette.gray900};
  color: ${ColorPalette.white};
  align-items: center;
  justify-content: center;
`;

function CommonButton({ onClick, text }) {
  return (<StyledButton onClick={onClick}>{text}</StyledButton>);
}

export default CommonButton;