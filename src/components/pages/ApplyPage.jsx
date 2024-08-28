import React, { useState } from "react";
import styled from "styled-components";
import SizeValue from "../ui/SizeValue";
import Layout from "../blocks/Layout";
import FontStyle from "../ui/FontStyle";
import RoutePaths from "../../constants/RoutePaths";
import Title from "../blocks/Title";
import { useNavigate } from "react-router-dom";

const MainContent = styled.div`
  padding-top: ${SizeValue.space.xl5};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: flex-start;
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${SizeValue.space.lg};
  margin-bottom: ${SizeValue.space.lg};
  background-color: #f9f9f9;
  
`;

const ContainerTitle = styled.h2`
  ${FontStyle.headlineBold}
  margin-bottom: ${SizeValue.space.md};
  color: #333;
`;

const Section = styled.div`
  margin-bottom: ${SizeValue.space.md};
`;

const SectionTitle = styled.h3`
  ${FontStyle.subhead3Bold}
  color: #555;
  margin-bottom: ${SizeValue.space.sm};
`;

const SectionContent = styled.p`
  ${FontStyle.body2Regular}
  color: #555;
  display: flex;
  align-items: center;
`;

const LinkText = styled.a`
  ${FontStyle.body2Bold}
  color: #007bff;
  margin-left: ${SizeValue.space.sm};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FullWidthButton = styled.button`
  width: 1150px;
  padding: ${SizeValue.space.md};
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 18px;
  text-align: center;
`;

function ApplyPage() {
  const [activeTab, setActiveTab] = useState("science2024");
  const navigate = useNavigate();

  return (
    <Layout>
      <Title text="원서 접수"/>
      <MainContent>
        <>
          <Section>
            <SectionTitle>접수방법</SectionTitle>
            <SectionContent>온라인 접수만 가능 (방문접수 불가)</SectionContent>
          </Section>
          <Section>
            <SectionTitle>방문상담 예약</SectionTitle>
            <SectionContent>
              링크를 통해 예약 가능
              <LinkText onClick={() => navigate(RoutePaths.CONSULTATION_REQUEST.path)}>바로가기</LinkText>
            </SectionContent>
          </Section>
          <Section>
            <SectionTitle>전화문의</SectionTitle>
            <SectionContent>010-5486-4795</SectionContent>
          </Section>
        </>

        <TabContainer>
          <Tab active={activeTab === "science2024"} onClick={() => setActiveTab("science2024")}>
            자연계 2024
          </Tab>
          <Tab active={activeTab === "science2025"} onClick={() => setActiveTab("science2025")}>
            자연계 2025
          </Tab>
          <Tab active={activeTab === "humanity2024"} onClick={() => setActiveTab("humanity2024")}>
            인문계 2024
          </Tab>
          <Tab active={activeTab === "humanity2025"} onClick={() => setActiveTab("humanity2025")}>
            인문계 2025
          </Tab>
        </TabContainer>

        {activeTab === "science2024" && (
          <Container>
            <ContainerTitle>자연계 신설시작반(무시험전형) 원서접수 - 2024 수능 기준</ContainerTitle>
            <Section>
              <SectionTitle>기준</SectionTitle>
              <SectionContent>2024학년도 수능 성적</SectionContent>
            </Section>
            <Section>
              <SectionTitle>모집기간</SectionTitle>
              <SectionContent>
                1차 모집 기간: 2024.8.28(수) ∼ 2024.9.4(수)
              </SectionContent>
            </Section>
            <Section>
              <SectionTitle>추가 설명</SectionTitle>
              <SectionContent>
                모집 기간 후 원서 접수자 대상으로 개별 안내
              </SectionContent>
            </Section>
            <ButtonWrapper>
              <FullWidthButton onClick={() => navigate(RoutePaths.APPLY_SCIENCE_2024.path)}>
                원서 접수
              </FullWidthButton>
            </ButtonWrapper>
          </Container>
        )}

        {activeTab === "science2025" && (
          <Container>
            <ContainerTitle>자연계 신설시작반(무시험전형) 원서접수 - 2025 6모 기준</ContainerTitle>
            <Section>
              <SectionTitle>기준</SectionTitle>
              <SectionContent>2025학년도 6월 모의평가 성적</SectionContent>
            </Section>
            <Section>
              <SectionTitle>모집기간</SectionTitle>
              <SectionContent>
                1차 모집 기간: 2024.8.28(수) ∼ 2024.9.4(수)
              </SectionContent>
            </Section>
            <Section>
              <SectionTitle>추가 설명</SectionTitle>
              <SectionContent>
                모집 기간 후 원서 접수자 대상으로 개별 안내
              </SectionContent>
            </Section>
            <ButtonWrapper>
              <FullWidthButton onClick={() => navigate(RoutePaths.APPLY_SCIENCE_2025.path)}>
                원서 접수
              </FullWidthButton>
            </ButtonWrapper>
          </Container>
        )}

        {activeTab === "humanity2024" && (
          <Container>
            <ContainerTitle>인문계 신설시작반(무시험전형) 원서접수 - 2024 수능 기준</ContainerTitle>
            <Section>
              <SectionTitle>기준</SectionTitle>
              <SectionContent>2024학년도 수능 성적</SectionContent>
            </Section>
            <Section>
              <SectionTitle>모집기간</SectionTitle>
              <SectionContent>
                1차 모집 기간: 2024.8.28(수) ∼ 2024.9.4(수)
              </SectionContent>
            </Section>
            <Section>
              <SectionTitle>추가 설명</SectionTitle>
              <SectionContent>
                모집 기간 후 원서 접수자 대상으로 개별 안내
              </SectionContent>
            </Section>
            <ButtonWrapper>
              <FullWidthButton onClick={() => navigate(RoutePaths.APPLY_HUMANITY_2024.path)}>
                원서 접수
              </FullWidthButton>
            </ButtonWrapper>
          </Container>
        )}

        {activeTab === "humanity2025" && (
          <Container>
            <ContainerTitle>인문계 신설시작반(무시험전형) 원서접수 - 2025 6모 기준</ContainerTitle>
            <Section>
              <SectionTitle>기준</SectionTitle>
              <SectionContent>2025학년도 6월 모의평가 성적</SectionContent>
            </Section>
            <Section>
              <SectionTitle>모집기간</SectionTitle>
              <SectionContent>
                1차 모집 기간: 2024.8.28(수) ∼ 2024.9.4(수)
              </SectionContent>
            </Section>
            <Section>
              <SectionTitle>추가 설명</SectionTitle>
              <SectionContent>
                모집 기간 후 원서 접수자 대상으로 개별 안내
              </SectionContent>
            </Section>
            <ButtonWrapper>
              <FullWidthButton onClick={() => navigate(RoutePaths.APPLY_HUMANITY_2025.path)}>
                원서 접수
              </FullWidthButton>
            </ButtonWrapper>
          </Container>
        )}
      </MainContent>
    </Layout>
  );
}

export default ApplyPage;