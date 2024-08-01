import React, { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import styled from 'styled-components';
import getMenuItems from '../constants/MenuItems';
import ColorPalette from './ui/ColorPalette';
import FontStyle from './ui/FontStyle';
import SizeValue from './ui/SizeValue';
import RoutePaths from '../constants/RoutePaths';

const NavContainer = styled.nav`
  height: ${SizeValue.height.navBar};
  width: ${SizeValue.width.full};
  background-color: ${ColorPalette.white};
  color: ${ColorPalette.black};
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  z-index: 1000;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
`;

const Logo = styled.a`
  ${FontStyle.display2Bold}
  margin: 0 ${SizeValue.space.xl};
  color: ${ColorPalette.black};
  display: block;
  text-decoration: none;
  border: none;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-right: ${SizeValue.space.xl};
  position: relative;
  cursor: pointer;

  &:hover > div {
    display: block;
  }
`;

const MenuTitle = styled.div`
  ${FontStyle.headlineSemiBold}
`;

const SubMenu = styled.div`
  ${FontStyle.body3Medium}
  padding: ${SizeValue.space.md};
  background-color: ${ColorPalette.white};
  border-radius: ${SizeValue.radius.sm};
  padding: ${SizeValue.space.md};
  white-space: nowrap;
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  box-shadow: 0 0px 4px rgba(0, 0, 0, 0.3);
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

function NavBar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuItems = getMenuItems();

  return (
    <NavContainer>
      <Logo href={RoutePaths.HOME.path}>Logo</Logo>
      <Menu>
        {menuItems.map((menu, index) => (
          <MenuItem
            key={index}
            onMouseEnter={() => setActiveMenu(index)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <MenuTitle>{menu.name}</MenuTitle>
            {activeMenu === index && (
              <SubMenu>
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