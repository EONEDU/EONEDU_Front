import styled from "styled-components";
import SizeValue from "../ui/SizeValue";
import ColorPalette from "../ui/ColorPalette";

const Container = styled.div`
  width: 200px;
  height: 350px;
  background-color: ${ColorPalette.gray900};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${SizeValue.radius.md};
  font-size: 14px;
  text-align: center;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 20;
  margin: 0;
  pointer-events: none;
  position: relative;

  background-image: url(${(props) => props.svgUrl});
  background-repeat: no-repeat;
  background-position: 80% 80%;
  background-size: 150%;

  @media (max-width: 768px) {
    width: 90%;
    max-width: 400px;
    margin: 10px 0;
  }

  & > * {
    pointer-events: auto;
  }
`;

function OverlayContainer({ children, svgUrl }) {
  return <Container svgUrl={svgUrl}>{children}</Container>;
}

export default OverlayContainer;