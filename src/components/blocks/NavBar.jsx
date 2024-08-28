import React, { useState, useEffect } from "react";
import styled from "styled-components";
import getMenuItems from "../../constants/MenuItems";
import ColorPalette from "../ui/ColorPalette";
import FontStyle from "../ui/FontStyle";
import SizeValue from "../ui/SizeValue";
import RoutePaths from "../../constants/RoutePaths";
import Logo from "../atoms/Logo";
import SVGImage from "../atoms/SvgImg";
import ImgPaths from "../../constants/ImgPaths";

const NavContainer = styled.nav`
  height: ${SizeValue.height.navBar};
  width: ${SizeValue.width.full};
  background-color: ${ColorPalette.white};
  color: ${ColorPalette.black};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: ${({ $isScrolled }) =>
    $isScrolled ? "0 0 4px rgba(0, 0, 0, 0.25)" : "none"};

  @media (max-width: ${SizeValue.breakpoint.tablet}) {
    height: 60px;
  }
`;

const LogoContainer = styled.div`
  margin-left: ${SizeValue.space.sm};
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: ${SizeValue.breakpoint.tablet}) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: ${ColorPalette.white};
    width: 100%;
    max-height: ${({ $isOpen }) => ($isOpen ? "300px" : "0")};
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: max-height 0.3s ease;
  }
`;

const MenuItem = styled.li`
  margin-right: ${SizeValue.space.xl};
  position: relative;
  cursor: pointer;

  @media (max-width: ${SizeValue.breakpoint.tablet}) {
    margin-right: 0;
    padding: ${SizeValue.space.sm} 0;
    text-align: center;
  }
`;

const MenuLink = styled.div`
  ${FontStyle.subhead3SemiBold}
  padding: ${SizeValue.space.md} ${SizeValue.space.lg};
  display: block;
  color: ${ColorPalette.black};
  text-decoration: none;

  @media (max-width: ${SizeValue.breakpoint.tablet}) {
    padding: ${SizeValue.space.sm};
  }

  &:hover {
    background-color: ${ColorPalette.transparent};
  }
`;

const SubMenu = styled.div`
  ${FontStyle.body1Medium}
  padding: ${SizeValue.space.md} 0;
  background-color: ${ColorPalette.white};
  white-space: nowrap;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  border: 1px solid ${ColorPalette.gray200};

  @media (max-width: ${SizeValue.breakpoint.tablet}) {
    position: static;
    box-shadow: none;
  }
`;

const SubMenuItem = styled.a`
  padding: ${SizeValue.space.md} ${SizeValue.space.lg};
  color: ${ColorPalette.black};
  display: block;
  text-decoration: none;

  &:hover {
    background-color: ${ColorPalette.white};
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  margin-right: ${SizeValue.space.lg};

  @media (max-width: ${SizeValue.breakpoint.tablet}) {
    display: block;
  }
`;

function NavBar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubMenuMobile, setActiveSubMenuMobile] = useState(null);
  const menuItems = getMenuItems();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubMenuMobile = (index) => {
    if (activeSubMenuMobile === index) {
      setActiveSubMenuMobile(null);
    } else {
      setActiveSubMenuMobile(index);
    }
  };

  const handleMenuClick = (path) => {
    window.location.href = path;
  };

  return (
    <NavContainer $isScrolled={isScrolled}>
      <LogoContainer>
        <Logo href={RoutePaths.HOME.path} logoText="아카데미아" />
      </LogoContainer>
      <HamburgerMenu onClick={toggleMenu}>
        <SVGImage src={menuOpen ? ImgPaths.close : ImgPaths.menu} />
      </HamburgerMenu>
      <Menu $isOpen={menuOpen}>
        {menuItems.map((menu, index) => (
          <MenuItem
            key={index}
            onMouseEnter={() =>
              menu.hasMultipleSubMenus && window.innerWidth > 768 && setActiveMenu(index)
            }
            onMouseLeave={() =>
              menu.hasMultipleSubMenus && window.innerWidth > 768 && setActiveMenu(null)
            }
            onClick={() =>
              !menu.hasMultipleSubMenus && handleMenuClick(menu.subMenus[0].path)
            }
          >
            <MenuLink>
              {menu.name}
            </MenuLink>
            {menu.hasMultipleSubMenus && (
              <SubMenu
                $isOpen={
                  (window.innerWidth > 768 && activeMenu === index) ||
                  (window.innerWidth <= 768 && activeSubMenuMobile === index)
                }
              >
                {menu.subMenus.map((subMenu, subIndex) => (
                  <SubMenuItem key={subIndex} href={subMenu.path}>
                    {subMenu.name}
                  </SubMenuItem>
                ))}
              </SubMenu>
            )}
          </MenuItem>
        ))}
      </Menu>
    </NavContainer>
  );
}

export default NavBar;