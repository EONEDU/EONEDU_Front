import styled from "styled-components";
import ColorPalette from "../ui/ColorPalette";
import FontStyle from "../ui/FontStyle";

const ButtonWrapper = styled.button`
  ${props => props.fontStyle}
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${props => props.textColor};
  cursor: pointer;
`;

function TextButton({
  onClick,
  buttonText,
  textColor=ColorPalette.white,
  fontStyle=FontStyle.body2Regular,
}) {
  return (
    <ButtonWrapper
      onClick={onClick}
      textColor={textColor}
      fontStyle={fontStyle}
    >
    {buttonText}
    </ButtonWrapper>
  );
}

export default TextButton;