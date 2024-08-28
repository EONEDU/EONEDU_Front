import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SizeValue from "../ui/SizeValue";
import Layout from "../blocks/Layout";
import FontStyle from "../ui/FontStyle";
import ColorPalette from "../ui/ColorPalette";
import Title from "../blocks/Title";

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const InfoContainer = styled.div`
  width: 100%;
  max-width: 600px;
  padding: ${SizeValue.space.xl};
  border: 1px solid ${ColorPalette.gray300};
  background-color: ${ColorPalette.gray050};
  border-radius: 8px;
  margin-top: ${SizeValue.space.xl};
`;

const InfoItem = styled.p`
  ${FontStyle.body1Regular}
  margin-bottom: ${SizeValue.space.md};
  line-height: 1.5;
  color: ${ColorPalette.gray900};
`;

const Highlight = styled.span`
  ${FontStyle.display1Bold}
  color: ${ColorPalette.black};
`;

function ApplyResultPage() {
  const location = useLocation();
  const clientName = location.state;

  console.log(location.state);
  return (
    <Layout>
    <Title text="신청 완료" fontStyle={FontStyle.display2Bold} />
      <MainContent>
        
        <InfoContainer>
          <InfoItem><Highlight>{clientName || "OOO"} 학생</Highlight> 접수가 완료되었습니다!</InfoItem>
          <InfoItem>
            <strong>Q. 입학 확정 발표는 언제, 어떻게 확인할 수 있나요?</strong><br />
            - 9/2(월) 21:00에 응시원서 접수 시 입력한 학부모와 학생 번호로 문자를 발송해 드릴 예정입니다.<br />
            - 결제 및 좌석 배정은 이후 별도로 안내해 드릴 예정입니다.
          </InfoItem>
          <InfoItem>
            <strong>Q. 급식은 필수 신청인가요?</strong><br />
            - 중, 석식 급식이 진행되며, 급식을 신청하지 않는 경우 도시락을 지참하거나 외출하여 식사할 수 있습니다.<br />
            - 급식 신청 절차는 이후 별도로 안내해 드릴 예정입니다.<br />
            - TEL. 010-5486-4795 (문자전용)
          </InfoItem>
        </InfoContainer>
      </MainContent>
    </Layout>
  );
}

export default ApplyResultPage;