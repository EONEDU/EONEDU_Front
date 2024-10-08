import React from 'react';
import styled from 'styled-components';
import ImgPaths from '../../constants/ImgPaths';
import FontStyle from '../ui/FontStyle';

const InfoSection = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
`;

const Icon = styled.img`
  margin-right: 10px;
  width: 24px;
  height: 24px;
`;

const TextContent = styled.div`
  text-align: left;
`;

const Title = styled.div`
  ${FontStyle.subhead3Bold}
  margin-bottom: 10px;
`;

const Details = styled.div`
  ${FontStyle.body2Medium}
  line-height: 1.5;
`;

const SmallText = styled.span`
  ${FontStyle.body1Medium}
`;

function InfoParagraph() {
  return (
    <>
      <InfoSection>
        <Icon src={ImgPaths.location} alt="Location Icon" />
        <TextContent>
          <Title>[오시는 길]</Title>
          <Details>
            서울시 강남구 도곡로 331 영동SC빌딩 6층<br />
            한티역 8번출구 바로 앞
          </Details>
        </TextContent>
      </InfoSection>
      <InfoSection>
        <Icon src={ImgPaths.phone} alt="Phone Icon" />
        <TextContent>
          <Title>[상담안내]</Title>
          <Details>
            TEL. 010-5486-4795 (문자 전용)<br />
            <SmallText>상담 예약 가능 시간</SmallText><br />
            오전 10시 ~ 오후 7시
          </Details>
        </TextContent>
      </InfoSection>
    </>
  );
}

export default InfoParagraph;