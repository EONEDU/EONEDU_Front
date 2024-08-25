import styled, { keyframes } from "styled-components";
import SizeValue from "../ui/SizeValue";
import ColorPalette from "../ui/ColorPalette";
import FontStyle from "../ui/FontStyle";

const StyledTextField = styled.input`
  ${(props) => props.fontStyle}
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  width: ${(props) => props.width};
  height: ${SizeValue.height.textField};
  box-shadow: 0 0 0 1px ${(props) => props.borderColor} inset;
  border: none;
  //border-radius: ${SizeValue.radius.md};
  padding: ${SizeValue.space.lg};
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

function TextField({
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
}) {
  return (
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
      width={width}
    />
  );
}

export default TextField;