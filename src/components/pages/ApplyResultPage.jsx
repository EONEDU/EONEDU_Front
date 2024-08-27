import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SizeValue from "../ui/SizeValue";
import Layout from "../blocks/Layout";
import FontStyle from "../ui/FontStyle";
import ColorPalette from "../ui/ColorPalette";

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
  border-radius: ${SizeValue.radius.md};
  background-color: ${ColorPalette.gray050};
`;

const InfoItem = styled.div`
  ${FontStyle.body1Regular}
  margin-bottom: ${SizeValue.space.md};
  text-align: left;
`;

function ApplyResultPage() {
  const location = useLocation();
  const name = location.state;

  return (
    <Layout>
      <MainContent>
        <TitleWrapper>
          접수가 완료되었습니다.
        </TitleWrapper>
        <InfoContainer>
          <InfoItem><strong>예약자: </strong> {name}</InfoItem>
        </InfoContainer>
      </MainContent>
    </Layout>
  );
}

export default ApplyResultPage;