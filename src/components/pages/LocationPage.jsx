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
  width: 100%;
  height: 400px;
`;

const TitleWrapper = styled.div`
  ${FontStyle.display3Bold}
  margin: ${SizeValue.space.xl5} 0;
  display: flex;
  white-space: nowrap;
  align-self: center;
`;

const TitleText = styled.div`
  ${FontStyle.display3Bold}
  white-space: nowrap;
`;

function LocationPage() {
  const mapElement = useRef(null);

  useEffect(() => {
    const map = new naver.maps.Map(mapElement.current, {
      center: new naver.maps.LatLng(37.5665, 126.978),
      zoom: 17,
    });

    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.5665, 126.978),
      map: map,
      title: "Seoul City Hall",
    });

    
    naver.maps.Event.addListener(marker, "click", () => {
      alert("You clicked the marker!");
    });

  }, []);

  return (
    <Layout>
      <MainContent>
        <TitleWrapper>
          <HighlightText text="오시는 길" fontStyle={FontStyle.display3Bold} />
        </TitleWrapper>
        <MapContainer ref={mapElement}/>
      </MainContent>
    </Layout>
  );
}

export default LocationPage;