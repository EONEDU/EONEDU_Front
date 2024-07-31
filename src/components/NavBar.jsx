import React, { useState } from 'react';
import styled from 'styled-components';
import getMenuItems from '../constants/MenuItems';
import ColorPalette from './ui/ColorPalette';
import { FontStyle } from './ui/FontStyle';

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${ColorPalette.white};
  padding: 10px;
  position: fixed;
  color: ${ColorPalette.black};
  width: 100%;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-right: 20px;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  position: relative;
  margin-right: 20px;
  cursor: pointer;

  &:hover > div {
    display: block;
  }
`;

const MenuTitle = styled.div`
  ${FontStyle.headlineSemiBold}
`;

const SubMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${ColorPalette.white};
  padding: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

const SubMenuItem = styled.a`
  display: block;
  color: ${ColorPalette.black};
  padding: 5px 10px;
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
      <Logo>Logo</Logo>
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
};



export default NavBar;