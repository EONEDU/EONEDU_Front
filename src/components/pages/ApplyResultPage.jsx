import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SizeValue from "../ui/SizeValue";
import Layout from "../blocks/Layout";
import FontStyle from "../ui/FontStyle";
import ColorPalette from "../ui/ColorPalette";
import Title from "../blocks/Title";

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const TitleWrapper = styled.div`
  ${FontStyle.display2Bold}
  margin: ${SizeValue.space.xl5} 0;
  display: flex;
  white-space: nowrap;
  align-self: center;
`;

const InfoContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: ${SizeValue.space.lg};
  border: 1px solid ${ColorPalette.gray300};
  background-color: ${ColorPalette.gray050};
`;

const InfoItem = styled.div`
  ${FontStyle.body1Regular}
  margin-bottom: ${SizeValue.space.md};
  text-align: left;
`;

function ApplyResultPage() {
  const location = useLocation();
  const response = location.state;

  return (
    <Layout>
      <MainContent>
        <Title text={"신청 완료"} fontStyle={FontStyle.display2Bold} />
        <InfoContainer>
          <InfoItem><strong>예약자: </strong> {response}</InfoItem>
        </InfoContainer>
      </MainContent>
    </Layout>
  );
}

export default ApplyResultPage;