import styled from "styled-components";
import NavBar from "../blocks/NavBar";

const MainContent = styled.div`
  padding-top: 60px;
`;

function MainPage() {
  
  return (
    <>
      <NavBar></NavBar>
      <MainContent></MainContent>
    </>
  );
}

export default MainPage;