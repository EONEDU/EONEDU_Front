import React from "react";
import styled from "styled-components";
import SizeValue from "../ui/SizeValue";
import Layout from "../blocks/Layout";
import FontStyle from "../ui/FontStyle";
import Title from "../blocks/Title";

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px; /* 화면 중앙 정렬을 위한 높이 설정 */
`;

const Message = styled.div`
  ${FontStyle.display2Bold}
  color: #888; /* 회색 글씨 */
  text-align: center;
`;

function FacilityPage() {
  return (
    <Layout>
      <Title text="학원 시설 안내" fontStyle={FontStyle.display3Bold} />
      <MainContent>
        <Message>시설 안내 페이지는 준비중입니다.</Message>
      </MainContent>
    </Layout>
  );
}

export default FacilityPage;