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
  background-color: ${(props) =>
    props.isDisabled ? ColorPalette.gray200 : props.backgroundColor};
  color: ${(props) => (props.isDisabled ? ColorPalette.gray500 : props.textColor)};
  width: 100%;
  height: ${SizeValue.height.textField};
  box-shadow: 0 0 0 1px ${(props) => props.borderColor} inset;
  border: none;
  padding: ${SizeValue.space.lg};
  padding-right: ${SizeValue.height.textField + 10}px;
  box-sizing: border-box;
  outline: none;
  transition: box-shadow 0.3s ease, background-color 0.3s ease;

  ::placeholder {
    color: ${(props) => props.placeholderColor};
  }

  &:focus {
    box-shadow: ${(props) =>
      props.isDisabled ? "none" : `0 0 0 2px ${props.focusBorderColor} inset`};
  }

  ${(props) =>
    props.isDisabled &&
    `
    cursor: not-allowed;
    pointer-events: none;
  `}
`;

const StyledButton = styled.button`
  ${FontStyle.body1Regular}
  height: calc(${SizeValue.height.textField} - 10px);
  background-color: ${(props) => props.buttonBackgroundColor};
  color: ${ColorPalette.white};
  border: none;
  width: 120px;
  padding: 0 ${SizeValue.space.lg};
  cursor: ${(props) => (props.isButtonDisabled ? "not-allowed" : "pointer")};
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: ${(props) => (props.isButtonDisabled ? "none" : "auto")};
  opacity: ${(props) => (props.isButtonDisabled ? 0.5 : 1)};
  transition: background-color 0.3s ease, opacity 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.isButtonDisabled ? props.buttonBackgroundColor : ColorPalette.gray700};
  }

  &:active {
    background-color: ${(props) =>
      props.isButtonDisabled ? props.buttonBackgroundColor : ColorPalette.gray600};
  }
`;

function formatPhoneNumber(value) {
  const cleaned = value.replace(/\D/g, "");

  let formatted = cleaned;
  if (cleaned.length > 3 && cleaned.length <= 7) {
    formatted = `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
  } else if (cleaned.length > 7) {
    formatted = `${cleaned.slice(0, 3)}-${cleaned.slice(3, 7)}-${cleaned.slice(7, 11)}`;
  }

  return formatted;
}

function PhoneNumberButtonTextField({
  backgroundColor = ColorPalette.gray050,
  buttonBackgroundColor = ColorPalette.gray900,
  textColor = ColorPalette.black,
  placeholderColor = ColorPalette.gray600,
  borderColor = ColorPalette.gray400,
  focusBorderColor = ColorPalette.gray900,
  width = SizeValue.width.full,
  fontStyle = FontStyle.body2Regular,
  isTextFieldDisabled = false,
  isButtonDisabled,
  placeholder,
  textValue,
  setTextValue,
  buttonText,
  onButtonClick,
}) {
  const handleInputChange = (e) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    setTextValue(formattedValue);
  };

  return (
    <TextFieldContainer width={width}>
      <StyledTextField
        fontStyle={fontStyle}
        placeholder={placeholder}
        backgroundColor={backgroundColor}
        textColor={textColor}
        placeholderColor={placeholderColor}
        value={textValue}
        onChange={handleInputChange}
        borderColor={borderColor}
        focusBorderColor={focusBorderColor}
        isDisabled={isTextFieldDisabled}
        disabled={isTextFieldDisabled}
      />
      <StyledButton
        onClick={onButtonClick}
        buttonBackgroundColor={buttonBackgroundColor}
        isButtonDisabled={isButtonDisabled}
      >
        {buttonText}
      </StyledButton>
    </TextFieldContainer>
  );
}

export default PhoneNumberButtonTextField;