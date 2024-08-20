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
          center: new window.naver.maps.LatLng(37.4964821, 127.0522146),
          zoom: 17,
          draggable: false, // 지도 드래그 방지
          pinchZoom: false, // 핀치 줌 방지 (모바일)
          scrollWheel: false, // 스크롤 휠 줌 방지
          keyboardShortcuts: false, // 키보드 단축키 방지
          disableDoubleTapZoom: true, // 더블 탭 줌 방지
          disableDoubleClickZoom: true, // 더블 클릭 줌 방지
        });

        const marker = new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(37.4964821, 127.0522146),
          map: map,
          title: "아카데미아",
        });

        window.naver.maps.Event.addListener(marker, "click", () => {
          // 마커 클릭 시 동작 정의 가능
        });
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <MapContainer ref={mapElement} />;
}

export default Map;