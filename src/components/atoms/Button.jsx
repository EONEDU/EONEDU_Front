import styled from "styled-components";
import FontStyle from "../ui/FontStyle";
import SizeValue from "../ui/SizeValue";

const StyledButton = styled.button`
  ${FontStyle.headlineBold}
  border-radius: ${SizeValue.radius.md};
  height: ${props => props.height};
  width: ${SizeValue.width.full};
  background-color: ${props => props.backgroundColor};
  content: ${props => props.buttonText};
  color: ${props => props.textColor};
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

function Button(
  {
    onClick,
    buttonText,
    height,
    backgroundColor,
    disabledBackgroundColor,
    available,
    textColor,
    disabledTextColor,
  }) {
  return (
    <StyledButton
      onClick={available && onClick}
      height={height}
      backgroundColor={available ? backgroundColor : disabledBackgroundColor}
      textColor={available ? textColor : disabledTextColor}
      content={buttonText}>
      {buttonText}
    </StyledButton>
  );
}

export default Button;