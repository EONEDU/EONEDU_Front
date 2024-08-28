import styled from "styled-components";
import FontStyle from "../ui/FontStyle";
import SizeValue from "../ui/SizeValue";
import ColorPalette from "../ui/ColorPalette";

const LogoWrapper = styled.a`
  margin-left: ${SizeValue.space.md};
  align-items: center;
  text-decoration: none;
  display: flex;
`;

const LogoImage = styled.img`
  width: 120px;
`;

const LogoImage2 = styled.img`
  width: 40px;
`;


function Logo({ logoText, href }) {
  return (
    <LogoWrapper href={href}>
      <LogoImage src="/assets/image/logo.png" alt="Logo" />
    </LogoWrapper>
  );
}

export default Logo;