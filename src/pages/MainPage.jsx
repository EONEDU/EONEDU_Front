import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/NavBar";
import RoutePaths from "../constants/RoutePaths";

const MainContent = styled.div`
  padding-top: 60px;
`;

function MainPage() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar></Navbar>
      <MainContent></MainContent>
    </>
  );
}

export default MainPage;