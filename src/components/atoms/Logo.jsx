import styled from "styled-components";
import FontStyle from "../ui/FontStyle";
import SizeValue from "../ui/SizeValue";
import ColorPalette from "../ui/ColorPalette";

const LogoWrapper = styled.a`
  margin: 0 ${SizeValue.space.xl};
  align-items: center;
  text-decoration: none;
`;

const LogoText = styled.div`
  ${FontStyle.display3Bold}
  color: ${ColorPalette.black};
  margin-left: ${SizeValue.space.sm};
`;

function Logo({ logoText, href, SvgIcon }) {
  return (
    <LogoWrapper href={href}>
      {SvgIcon && <SvgIcon />}
      <LogoText>{logoText}</LogoText>
    </LogoWrapper>
  );
}

export default Logo;