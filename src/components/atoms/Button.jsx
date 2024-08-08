import styled from "styled-components";
import FontStyle from "../ui/FontStyle";
import SizeValue from "../ui/SizeValue";

const StyledButton = styled.button.attrs(props => ({
  style: {
    height: props.height,
    width: SizeValue.width.full,
    backgroundColor: props.$backgroundColor,
    color: props.$textColor,
    boxShadow: props.$boxShadow,
  }
}))`
  ${props => props.fontStyle}
  border-radius: ${SizeValue.radius.md};
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

function Button({
  fontStyle = FontStyle.headlineBold,
  onClick,
  buttonText,
  height,
  backgroundColor,
  available,
  textColor,
  boxShadow = "none",
}) {
  return (
    <StyledButton
      fontStyle={fontStyle}
      onClick={available && onClick}
      height={height}
      $backgroundColor={backgroundColor}
      $textColor={textColor}
      $boxShadow={boxShadow}
    >
      {buttonText}
    </StyledButton>
  );
}

export default Button;