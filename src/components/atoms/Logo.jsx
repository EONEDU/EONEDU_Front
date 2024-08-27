import styled from "styled-components";
import FontStyle from "../ui/FontStyle";
import SizeValue from "../ui/SizeValue";
import ColorPalette from "../ui/ColorPalette";

const LogoWrapper = styled.a`
  margin: 0 ${SizeValue.space.xl};
  align-items: center;
  text-decoration: none;
  display: flex;
`;

const LogoImage = styled.img`
  width: 120px;
  
`;

const LogoText = styled.div`
  ${FontStyle.display2Bold}
  color: ${ColorPalette.black};
  margin-left: ${SizeValue.space.sm};
`;

function Logo({ logoText, href }) {
  return (
    <LogoWrapper href={href}>
      <LogoImage src="/assets/image/logo.png" alt="Logo" />
    
    </LogoWrapper>
  );
}

export default Logo;