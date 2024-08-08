import styled from "styled-components";
import FontStyle from "../ui/FontStyle";
import SizeValue from "../ui/SizeValue";

const StyledButton = styled.button`
  ${props => props.fontStyle}
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
  box-shadow: ${props => props.boxShadow};
`;

function Button(
  {
    fontStyle=FontStyle.headlineBold,
    onClick,
    buttonText,
    height,
    backgroundColor,
    disabledBackgroundColor,
    available,
    textColor,
    disabledTextColor,
    boxShadow="none",
  }) {
  return (
    <StyledButton
      fontStyle={fontStyle}
      onClick={available && onClick}
      height={height}
      backgroundColor={available ? backgroundColor : disabledBackgroundColor}
      textColor={available ? textColor : disabledTextColor}
      content={buttonText}
      boxShadow={boxShadow}>
      {buttonText}
    </StyledButton>
  );
}

export default Button;