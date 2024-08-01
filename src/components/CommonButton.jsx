import styled from "styled-components";
import ColorPalette from "./ui/ColorPalette";
import FontStyle from "./ui/FontStyle";
import SizeValue from "./ui/SizeValue";

const StyledButton = styled.button`
  ${FontStyle.headlineBold}
  border-radius: ${SizeValue.radius.md};
  height: ${SizeValue.height.button};
  width: ${SizeValue.width.full};
  background-color: ${ColorPalette.gray900};
  color: ${ColorPalette.white};
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

function CommonButton({ onClick, text }) {
  return (<StyledButton onClick={onClick}>{text}</StyledButton>);
}

export default CommonButton;