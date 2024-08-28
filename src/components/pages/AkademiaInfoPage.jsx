import React from "react";
import styled from "styled-components";
import Layout from "../blocks/Layout";
import FontStyle from "../ui/FontStyle";
import MapInfo from "../blocks/MapInfo";
import InfoParagraph from "../atoms/InfoParagraph";
import Title from "../blocks/Title";
import SizeValue from "../ui/SizeValue";

const MainContent = styled.div`
  padding-top: ${SizeValue.space.xl5};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TitleWrapper = styled.div`
  ${FontStyle.display2Bold}
  margin: 80px 0 100px 0;
  display: flex;
  white-space: nowrap;
  align-self: center;
`;

const InfoWrapper = styled.div`
  ${FontStyle.body3Regular}
  max-width: 1150px;
  width: 100%;
  margin: 0 auto;
`;

function AkademiaInfoPage() {
  return (
    <Layout>
      <Title text="대치점 안내" fontStyle={FontStyle.display3Bold} />
      <MainContent>
        <MapInfo />
        <InfoWrapper>
          <InfoParagraph />
        </InfoWrapper>
      </MainContent>
    </Layout>
  );
}

export default AkademiaInfoPage;