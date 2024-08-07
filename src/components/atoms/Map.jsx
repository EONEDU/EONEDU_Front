import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-color: #f0f0f0;
`;

function Map() {
  const mapElement = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.naver && window.naver.maps) {
        clearInterval(interval);

        const map = new window.naver.maps.Map(mapElement.current, {
          center: new window.naver.maps.LatLng(37.5665, 126.978),
          zoom: 17,
        });

        const marker = new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(37.5665, 126.978),
          map: map,
          title: "Seoul City Hall",
        });

        window.naver.maps.Event.addListener(marker, "click", () => {
          alert("You clicked the marker!");
        });
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <MapContainer ref={mapElement} />
  );
}

export default Map;