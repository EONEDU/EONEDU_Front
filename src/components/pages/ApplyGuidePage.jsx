import React, { useState } from "react";
import styled from "styled-components";
import SizeValue from "../ui/SizeValue";
import Layout from "../blocks/Layout";
import FontStyle from "../ui/FontStyle";
import Title from "../blocks/Title";
import { useNavigate } from "react-router-dom";
import RoutePaths from "../../constants/RoutePaths";

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${SizeValue.space.xl3};
  margin-bottom: ${SizeValue.space.xl};
`;

const ApplyButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: #000;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #333;
  }
`;

const TabContainer = styled.div`
  margin-top: ${SizeValue.space.xl5};
  display: flex;
  justify-content: center;
  margin-bottom: ${SizeValue.space.lg};
`;

const Tab = styled.button`
  background: ${(props) => (props.active ? "#000" : "none")};
  color: ${(props) => (props.active ? "#fff" : "#666")};
  border: none;
  padding: ${SizeValue.space.md} ${SizeValue.space.lg};
  font-size: 18px;
  cursor: pointer;
  margin-right: ${SizeValue.space.md};

  &:focus {
    outline: none;
  }
`;

const Content = styled.div`
  padding: ${SizeValue.space.md};
  font-size: 16px;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  max-width: 700px;
  width: 100%;
  height: auto;
  margin-bottom: ${SizeValue.space.lg};
`;

const SubTabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${SizeValue.space.md};
`;

const SubTab = styled.button`
  background: ${(props) => (props.active ? "#555" : "none")};
  color: ${(props) => (props.active ? "#fff" : "#666")};
  border: none;
  padding: ${SizeValue.space.md} ${SizeValue.space.lg};
  font-size: 16px;
  cursor: pointer;
  margin-right: ${SizeValue.space.md};

  &:focus {
    outline: none;
  }
`;

function ApplyGuidePage() {
  const [activeTab, setActiveTab] = useState("apply_guide");
  const [activeSubTab, setActiveSubTab] = useState("study_space");
  const navigate = useNavigate();

  return (
    <Layout>
      <Title text="2025 아카데미아 모집 요강" fontStyle={FontStyle.display2Bold} />
      <MainContent>
        <ButtonWrapper>
          <ApplyButton onClick={() => navigate(RoutePaths.APPLY.path)}>
            원서 접수하러 가기
          </ApplyButton>
        </ButtonWrapper>

        <TabContainer>
          <Tab active={activeTab === "apply_guide"} onClick={() => setActiveTab("apply_guide")}>
            모집요강
          </Tab>
          <Tab active={activeTab === "system"} onClick={() => setActiveTab("system")}>
            시스템
          </Tab>
          <Tab active={activeTab === "study_place"} onClick={() => setActiveTab("study_place")}>
            공부공간
          </Tab>
        </TabContainer>

        <Content>
          {activeTab === "apply_guide" && (
            <Image src="/assets/image/apply_guide.png" alt="모집 요강" />
          )}
          {activeTab === "system" && (
            <Image src="/assets/image/system.png" alt="시스템" />
          )}
          {activeTab === "study_place" && (
            <>
              <SubTabContainer>
                <SubTab
                  active={activeSubTab === "study_space"}
                  onClick={() => setActiveSubTab("study_space")}
                >
                  공부 공간
                </SubTab>
                <SubTab
                  active={activeSubTab === "lounge"}
                  onClick={() => setActiveSubTab("lounge")}
                >
                  라운지
                </SubTab>
                <SubTab
                  active={activeSubTab === "consult"}
                  onClick={() => setActiveSubTab("consult")}
                >
                  상담실
                </SubTab>
                <SubTab
                  active={activeSubTab === "wash"}
                  onClick={() => setActiveSubTab("wash")}
                >
                  양치 공간
                </SubTab>
              </SubTabContainer>
              {activeSubTab === "study_space" && (
                <>
                  <Image src="/assets/image/study/study1.jpg" alt="공부 공간 1" />
                  <Image src="/assets/image/study/study2.jpg" alt="공부 공간 2" />
                  <Image src="/assets/image/study/study3.jpg" alt="공부 공간 3" />
                </>
              )}
              {activeSubTab === "lounge" && (
                <>
                  <Image src="/assets/image/lounge/lounge1.png" alt="라운지 1" />
                  <Image src="/assets/image/lounge/lounge2.png" alt="라운지 2" />
                  <Image src="/assets/image/lounge/lounge3.png" alt="라운지 3" />
                  <Image src="/assets/image/lounge/lounge4.png" alt="라운지 4" />
                </>
              )}
              {activeSubTab === "consult" && (
                <>
                  <Image src="/assets/image/consult/consult1.png" alt="상담실 1" />
                  <Image src="/assets/image/consult/consult2.jpg" alt="상담실 2" />
                </>
              )}
              {activeSubTab === "wash" && (
                <Image src="/assets/image/wash/wash1.jpg" alt="양치 공간" />
              )}
            </>
          )}
        </Content>
      </MainContent>
    </Layout>
  );
}

export default ApplyGuidePage;