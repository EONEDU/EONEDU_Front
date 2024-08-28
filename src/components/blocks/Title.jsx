import React from "react";
import styled from "styled-components";
import FontStyle from "../ui/FontStyle";

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  background-color: #000; /* 검정색 배경 */
  color: #fff; /* 흰색 글씨 */
`;

const TitleText = styled.h1`
  ${FontStyle.display2Bold} /* 텍스트 스타일 */
  margin: 0;
  text-align: center;
`;

function Title({ text }) {
  return (
    <TitleContainer>
      <TitleText>{text}</TitleText>
    </TitleContainer>
  );
}

export default Title;