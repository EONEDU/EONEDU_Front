import styled from "styled-components";
import FontStyle from "../ui/FontStyle";

const StyledButton = styled.button.attrs(props => ({
  style: {
    height: props.height,
    backgroundColor: props.$backgroundColor,
    color: props.$textColor,
    boxShadow: props.$boxShadow,
    width: props.$width,
  }
}))`
  ${props => props.fontStyle}
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  cursor: ${props => (props.$available ? "pointer" : "not-allowed")};
  pointer-events: ${props => (props.$available ? "auto" : "none")};
  flex: 1;
  opacity: ${props => (props.$available ? 1 : 0.6)};
`;

function Button({
  fontStyle = FontStyle.headlineBold,
  onClick,
  buttonText,
  height,
  backgroundColor,
  available = true,
  textColor,
  boxShadow = "none",
  width = '100%',
}) {
  return (
    <StyledButton
      fontStyle={fontStyle}
      onClick={available ? onClick : null}
      height={height}
      $backgroundColor={backgroundColor}
      $textColor={textColor}
      $boxShadow={boxShadow}
      $width={width}
      $available={available}
    >
      {buttonText}
    </StyledButton>
  );
}

export default Button;