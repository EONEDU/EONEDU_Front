import styled from "styled-components";
import Map from "../atoms/Map";
import OverlayContainer from "../atoms/OverlayContainer";
import SizeValue from "../ui/SizeValue";
import ColorPalette from "../ui/ColorPalette";
import ImgPaths from "../../constants/ImgPaths";

const ComponentWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: 20px;
`;

const MapInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: auto;

  @media (max-width: ${SizeValue.breakpoint.tablet}) {
    flex-direction: column;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: ${SizeValue.width.pageLg};
  position: absolute;
  top: -350px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  pointer-events: none;

  & > div {
    pointer-events: auto;
  }

  @media (max-width: ${SizeValue.breakpoint.tablet}) {
    position: static;
    transform: none;
    width: 100%;
    padding: 10px 0;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
    min-height: 640px;
  }
`;

function MapInfo() {
  return (
    <ComponentWrapper>
      <MapWrapper>
        <Map />
      </MapWrapper>
      <MapInfoWrapper>
        <InfoWrapper>
          <OverlayContainer svgUrl={ImgPaths.location} fillColor={ColorPalette.gray100}>
            <p>오시는 길</p>
          </OverlayContainer>
          <OverlayContainer svgUrl={ImgPaths.phone}>
            <p>상담 안내</p>
          </OverlayContainer>
        </InfoWrapper>
      </MapInfoWrapper>
    </ComponentWrapper>
  );
}

export default MapInfo;