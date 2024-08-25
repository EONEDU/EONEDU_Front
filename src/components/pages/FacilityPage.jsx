import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import SizeValue from "../ui/SizeValue";
import Layout from "../blocks/Layout";
import HighlightText from "../atoms/HighlightText";
import FontStyle from "../ui/FontStyle";

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-color: #f0f0f0;
`;

const TitleWrapper = styled.div`
  ${FontStyle.display2Bold}
  margin: ${SizeValue.space.xl5} 0;
  display: flex;
  white-space: nowrap;
  align-self: center;
`;

function FacilityPage() {
  return (
    <Layout>
      <MainContent>
        <TitleWrapper>
          <HighlightText text="학원 시설 안내" fontStyle={FontStyle.display2Bold} />
        </TitleWrapper>
      </MainContent>
    </Layout>
  );
}

export default FacilityPage;