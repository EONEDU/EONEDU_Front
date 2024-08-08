import React from "react";
import styled from "styled-components";
import SizeValue from "../ui/SizeValue";
import ColorPalette from "../ui/ColorPalette";
import FontStyle from "../ui/FontStyle";

const TextFieldContainer = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => props.width};
  position: relative;
`;

const StyledTextField = styled.input`
  ${(props) => props.fontStyle}
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  width: 100%;
  height: ${SizeValue.height.textField};
  box-shadow: 0 0 0 1px ${(props) => props.borderColor} inset;
  border: none;
  border-radius: ${SizeValue.radius.md};
  padding: ${SizeValue.space.lg};
  padding-right: ${SizeValue.height.textField + 10}px;
  box-sizing: border-box;
  outline: none;
  transition: box-shadow 0.3s ease;

  ::placeholder {
    color: ${(props) => props.placeholderColor};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.focusBorderColor} inset;
  }
`;

const StyledButton = styled.button`
  ${FontStyle.body2Regular}
  height: calc(${SizeValue.height.textField} - 10px);
  background-color: ${ColorPalette.gray900};
  color: ${ColorPalette.white};
  border: none;
  border-radius: ${SizeValue.radius.md};
  padding: 0 ${SizeValue.space.lg};
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);

  &:hover {
    background-color: ${ColorPalette.gray700};
  }

  &:active {
    background-color: ${ColorPalette.gray600};
  }
`;

function ButtonTextField({
  backgroundColor = ColorPalette.gray050,
  disabledBackgroundColor = ColorPalette.gray100,
  textColor = ColorPalette.black,
  placeholderColor = ColorPalette.gray600,
  disabledTextColor = ColorPalette.gray300,
  disabledPlaceholderColor = ColorPalette.gray500,
  borderColor = ColorPalette.gray400,
  focusBorderColor = ColorPalette.gray900,
  width = SizeValue.width.full,
  available = true,
  fontStyle = FontStyle.body2Regular,
  placeholder,
  textValue,
  setTextValue,
  buttonText,
  onButtonClick,
}) {
  return (
    <TextFieldContainer width={width}>
      <StyledTextField
        fontStyle={fontStyle}
        placeholder={placeholder}
        backgroundColor={available ? backgroundColor : disabledBackgroundColor}
        textColor={available ? textColor : disabledTextColor}
        placeholderColor={available ? placeholderColor : disabledPlaceholderColor}
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        borderColor={borderColor}
        focusBorderColor={focusBorderColor}
      />
      <StyledButton onClick={onButtonClick}>
        {buttonText}
      </StyledButton>
    </TextFieldContainer>
  );
}

export default ButtonTextField;