import styled from "styled-components";
import Layout from "../blocks/Layout";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import SizeValue from "../ui/SizeValue";
import ColorPalette from "../ui/ColorPalette";

const MainContent = styled.div`
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function MainPage() {
  const navigate = useNavigate();
  
  return (
    <Layout>
      <MainContent>
      <ButtonWrapper>
          <Button
              buttonText="원서 접수하기"
              height={SizeValue.height.button}
              backgroundColor={ColorPalette.gray900}
              textColor={ColorPalette.white}
              onClick={() => {
                navigate(RoutePaths.APPLY.path);
              }}
              width="300px"
            />
        </ButtonWrapper>
      </MainContent>
    </Layout>
  );
}

export default MainPage;