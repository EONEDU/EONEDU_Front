import styled from "styled-components";
import FontStyle from "../ui/FontStyle";
import SizeValue from "../ui/SizeValue";

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
  border-radius: ${SizeValue.radius.md};
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex: 1;  // 부모 컨테이너에서 flexbox를 활용할 수 있도록 설정
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
  width = '100%',
}) {
  return (
    <StyledButton
      fontStyle={fontStyle}
      onClick={available && onClick}
      height={height}
      $backgroundColor={backgroundColor}
      $textColor={textColor}
      $boxShadow={boxShadow}
      $width={width}  // width를 동적으로 설정 가능하게 함
    >
      {buttonText}
    </StyledButton>
  );
}

export default Button;