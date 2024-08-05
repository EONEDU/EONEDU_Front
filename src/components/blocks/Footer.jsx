import styled from "styled-components";
import SizeValue from "../ui/SizeValue";
import ColorPalette from "../ui/ColorPalette";
import TextButtonList from "../atoms/TextButtonList";
import FontStyle from "../ui/FontStyle";
import TextButton from "../atoms/TextButton";

const FooterWrapper = styled.footer`
  width: 100%;
  height: ${SizeValue.height.footerHeight};
  background-color: ${ColorPalette.gray900};
  color: ${ColorPalette.white};
  padding: ${SizeValue.space.md};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;

const buttonData = [
  {
    buttonText: "Home",
    onClick: () => console.log("Home"),
  },
  {
    buttonText: "About",
    onClick: () => console.log("About"),
  },
  {
    buttonText: "Contact",
    onClick: () => console.log("Contact"),
  },
];

function Footer() {
  return (
    <FooterWrapper>
      <TextButtonList
        buttonData={buttonData}
        textColor={ColorPalette.gray100}
        fontStyle={FontStyle.body3Medium}
        flexDirection={"row"}
      />
    </FooterWrapper>
  );
}

export default Footer;