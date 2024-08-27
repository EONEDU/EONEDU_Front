import React, { useState } from "react";
import styled from "styled-components";
import SizeValue from "../ui/SizeValue";
import Layout from "../blocks/Layout";
import HighlightText from "../atoms/HighlightText";
import FontStyle from "../ui/FontStyle";
import Button from "../atoms/Button";
import ColorPalette from "../ui/ColorPalette";
import { useNavigate } from "react-router-dom";
import RoutePaths from "../../constants/RoutePaths";

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TitleWrapper = styled.div`
  ${FontStyle.display2Bold}
  margin: ${SizeValue.space.xl5} 0;
  display: flex;
  white-space: nowrap;
  align-self: center;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${SizeValue.space.lg};
`;

const Tab = styled.button`
  background: none;
  border: none;
  padding: ${SizeValue.space.md} ${SizeValue.space.lg};
  font-size: 18px;
  cursor: pointer;
  border-bottom: ${(props) => (props.active ? "2px solid #000" : "2px solid transparent")};
  color: ${(props) => (props.active ? "#000" : "#666")};
  
  &:focus {
    outline: none;
  }
`;

const Content = styled.div`
  padding: ${SizeValue.space.md};
  font-size: 16px;
  color: #333;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function ApplyGuidePage() {
  const [activeTab, setActiveTab] = useState("natural"); // 기본값을 자연계로 설정
  const navigate = useNavigate();

  return (
    <Layout>
      <MainContent>
        <TitleWrapper>
          <HighlightText text="모집 요강" fontStyle={FontStyle.display2Bold} />
        </TitleWrapper>
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
        <TabContainer>
          <Tab active={activeTab === "natural"} onClick={() => setActiveTab("natural")}>
            자연계
          </Tab>
          <Tab active={activeTab === "humanities"} onClick={() => setActiveTab("humanities")}>
            인문계
          </Tab>
        </TabContainer>
        <Content>
          {activeTab === "natural" && <div>자연계 모집 요강 내용입니다.</div>}
          {activeTab === "humanities" && <div>인문계 모집 요강 내용입니다.</div>}
        </Content>
      </MainContent>
    </Layout>
  );
}

export default ApplyGuidePage;