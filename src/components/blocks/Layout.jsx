import React from "react";
import styled from "styled-components";
import NavBar from "../blocks/NavBar";
import Footer from "../blocks/Footer";

const MainContent = styled.div`
  padding-top: 80px;
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
`;

function Layout({ children }) {
  return (
    <>
      <NavBar />
        <MainContent>{children}</MainContent>
      <Footer />
    </>
  );
}

export default Layout;