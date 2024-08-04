import styled from "styled-components";
import TextButton from "./TextButton";

const ButtonWrapper = styled.li`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: space-between;
  align-items: center;
`;

function TextButtonList({
  buttonData,
  fontStyle,
  textColor,
  flexDirection = "row",
}) {
  return (
    <ButtonWrapper>
      {buttonData.map((button, index) => (
        <TextButton
          key={index}
          onClick={button.onClick}
          buttonText={button.buttonText}
          textColor={textColor}
          fontStyle={fontStyle}
          flexDirection={flexDirection}
        />
      ))}
  </ButtonWrapper>);
}

export default TextButtonList;