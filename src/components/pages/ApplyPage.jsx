import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SizeValue from "../ui/SizeValue";
import Layout from "../blocks/Layout";
import HighlightText from "../atoms/HighlightText";
import FontStyle from "../ui/FontStyle";
import Button from "../atoms/Button";
import RoutePaths from "../../constants/RoutePaths";

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  ${FontStyle.display2Bold}
  margin: ${SizeValue.space.xl5} 0;
  display: flex;
  white-space: nowrap;
  align-self: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1150px;
  width: 100%;
  padding: ${SizeValue.space.lg};
  margin-bottom: ${SizeValue.space.lg};
  background-color: #f9f9f9;
  border: 1px solid #ddd;
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
  ${FontStyle.subhead2Bold}
  color: #555;
  margin-bottom: ${SizeValue.space.sm};
`;

const SectionContent = styled.p`
  ${FontStyle.body2Regular}
  color: #555;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FullWidthButton = styled(Button)`
  width: 1150px;
`;

const LinkButton = styled(Button)`
  background-color: #007bff;
  text-decoration: none;
  text-align: center;
`;

function ApplyPage() {
  const navigate = useNavigate();

  return (
    <Layout>
      <MainContent>
        <TitleWrapper>
          <HighlightText text="원서 접수" fontStyle={FontStyle.display2Bold} />
        </TitleWrapper>

        <Container>
          <ContainerTitle>유의사항</ContainerTitle>
          <Section>
            <SectionTitle>접수방법</SectionTitle>
            <SectionContent>온라인 접수만 가능 (방문접수 불가)</SectionContent>
          </Section>
          <Section>
            <SectionTitle>방문상담 예약</SectionTitle>
            <SectionContent>
              <LinkButton
                buttonText="상담 예약 바로가기"
                height={SizeValue.height.button}
                backgroundColor="#007bff"
                textColor="#fff"
                onClick={() => navigate(RoutePaths.CONSULTATION_REQUEST.path)}
              />
            </SectionContent>
          </Section>
          <Section>
            <SectionTitle>전화문의</SectionTitle>
            <SectionContent>010-5486-4795</SectionContent>
          </Section>
        </Container>
        <Container>
          <Section>
            <ContainerTitle>자연계 신설시작반(무시험전형) 원서접수 - 2024 수능 기준</ContainerTitle>
          </Section>
          <Section>
            <SectionTitle>기준</SectionTitle>
            <SectionContent>
              2024학년도 수능 성적
            </SectionContent>
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
            <FullWidthButton
              buttonText="원서 접수"
              height={SizeValue.height.button}
              backgroundColor="#000"
              textColor="#fff"
              onClick={() => navigate(RoutePaths.APPLY_SCIENCE_2024.path)}
            />
          </ButtonWrapper>
        </Container>

        <Container>
          <Section>
            <ContainerTitle>자연계 신설시작반(무시험전형) 원서접수 - 2025 6모 기준</ContainerTitle>
          </Section>
          <Section>
            <SectionTitle>기준</SectionTitle>
            <SectionContent>
              2025학년도 6월 모의평가 성적
            </SectionContent>
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
            <FullWidthButton
              buttonText="원서 접수"
              height={SizeValue.height.button}
              backgroundColor="#000"
              textColor="#fff"
              onClick={() => navigate(RoutePaths.APPLY_SCIENCE_2025.path)}
            />
          </ButtonWrapper>
        </Container>

        <Container>
          <Section>
            <ContainerTitle>인문계 신설시작반(무시험전형) 원서접수 - 2024 수능 기준</ContainerTitle>
          </Section>
          <Section>
            <SectionTitle>기준</SectionTitle>
            <SectionContent>
              2024학년도 수능 성적
            </SectionContent>
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
            <FullWidthButton
              buttonText="원서 접수"
              height={SizeValue.height.button}
              backgroundColor="#000"
              textColor="#fff"
              onClick={() => navigate(RoutePaths.APPLY_HUMANITY_2024.path)}
            />
          </ButtonWrapper>
        </Container>

        <Container>
          <Section>
            <ContainerTitle>인문계 신설시작반(무시험전형) 원서접수 - 2025 6모 기준</ContainerTitle>
          </Section>
          <Section>
            <SectionTitle>기준</SectionTitle>
            <SectionContent>
              2025학년도 6월 모의평가 성적
            </SectionContent>
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
            <FullWidthButton
              buttonText="원서 접수"
              height={SizeValue.height.button}
              backgroundColor="#000"
              textColor="#fff"
              onClick={() => navigate(RoutePaths.APPLY_HUMANITY_2025.path)}
            />
          </ButtonWrapper>
        </Container>
      </MainContent>
    </Layout>
  );
}

export default ApplyPage;