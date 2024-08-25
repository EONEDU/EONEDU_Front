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

function PhoneTextField({
  backgroundColor = ColorPalette.gray050,
  textColor = ColorPalette.black,
  placeholderColor = ColorPalette.gray600,
  borderColor = ColorPalette.gray400,
  focusBorderColor = ColorPalette.gray900,
  width = SizeValue.width.full,
  fontStyle = FontStyle.body2Regular,
  isTextFieldDisabled = false,
  placeholder,
  textValue,
  setTextValue,
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
    </TextFieldContainer>
  );
}

export default PhoneTextField;