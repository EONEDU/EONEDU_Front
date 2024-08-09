import React, { useState } from 'react';
import styled from 'styled-components';
import postConsultation from '../../hooks/postConsultation';
import useConsultations from '../../hooks/useConsultations';
import ConsultationCalendar from '../atoms/ConsultationCalendar';
import TimeSlot from '../blocks/TimeSlot';
import SizeValue from '../ui/SizeValue';
import HighlightText from '../atoms/HighlightText';
import FontStyle from '../ui/FontStyle';
import ColorPalette from '../ui/ColorPalette';
import Button from '../atoms/Button';
import ConsultationStep from '../blocks/ConsultationStep';
import Layout from '../blocks/Layout';
import ToggleButton from '../blocks/ToggleButton';
import TextField from '../atoms/TextField';
import ButtonTextField from '../atoms/ButtonTextField';

const ContentWrapper = styled.div`
  width: ${SizeValue.width.pageSm};
  display: flex;
  flex-direction: column;
  align-items: end;
  align-self: center;
  
  @media (max-width: 768px) {
    max-width: 500px;
  }

  @media (max-width: 450px) {
    width: 400px;
  }
`;

const CalendarWrapper = styled.div`
  gap: ${SizeValue.space.xl};
  margin-top: ${SizeValue.space.xl};
  margin-bottom: ${SizeValue.space.xl5};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-self: end;
`;

const ButtonWrapper = styled.div`
  width: ${SizeValue.width.pageSm};
  margin-bottom: ${SizeValue.space.xl5};
  @media (max-width: 768px) {
    max-width: 500px;
  }

  @media (max-width: 450px) {
    width: 400px;
  }
`;

const TitleWrapper = styled.div`
  ${FontStyle.display3Bold}
  margin: ${SizeValue.space.xl5} 0;
  display: flex;
  white-space: nowrap;
  align-self: center;
`;

const TitleText = styled.div`
  ${FontStyle.display3Bold}
  white-space: nowrap;
`;

const TextFieldWrapper = styled.div`
  margin-top: ${SizeValue.space.xl3};
  margin-bottom: ${SizeValue.space.xl5};
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${SizeValue.space.md};
  width: ${SizeValue.width.pageSmContent};
  
  @media (max-width: 768px) {
    max-width: 450px;
  }

  @media (max-width: 450px) {
    width: 350px;
  }
`;

const typeToggleData = [
  {
    text: '방문 상담',
  },
  {
    text: '전화 상담',
  },
];

const branchToggleData = [
  {
    text: '1호점',
  },
];

function formatDateToLocal(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function ConsulationRequestPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedType, setSelectedType] = useState(0);
  const [selectedBranch, setSelectedBranch] = useState(0);
  const { reservations, loading, error } = useConsultations(selectedDate);

  const handleReserveClick = async () => {
    if (selectedTime) {
      const formattedDate = formatDateToLocal(selectedDate);
      const formattedTime = selectedTime.toTimeString().split(' ')[0];
      try {
        await postConsultation(formattedDate, formattedTime, "noguen", "01020573318");
        alert('Consultation reserved successfully');
      } catch (err) {
        console.error("Reservation Error:", err);
        alert('Failed to reserve consultation');
      }
    }
  };

  return (
    <Layout>
      <ContentWrapper>
        <TitleWrapper>
          <TitleText>{`빠르게\u00A0`}</TitleText>
          <HighlightText text="상담 예약" fontStyle={FontStyle.display3Bold} />
          <TitleText>{`을 도와드릴게요!`}</TitleText>
        </TitleWrapper>
        <ConsultationStep stepTitle="1. 상담 종류" stepDescription="원하시는 상담 시간을 선택해주세요.">
        <ToggleButton toggleButtons={typeToggleData} selected={selectedType} setSelected={setSelectedType} />
        </ConsultationStep>
        <ConsultationStep stepTitle="2. 지점" stepDescription="상담 지점을 선택해주세요.">
        <ToggleButton toggleButtons={branchToggleData} selected={selectedBranch} setSelected={setSelectedBranch} />
        </ConsultationStep>
        <ConsultationStep stepTitle="3. 상담 날짜" stepDescription="대충 상담 날짜">
          <CalendarWrapper>
            <ConsultationCalendar
              value={selectedDate}
              onChange={setSelectedDate}
            />
            <TimeSlot
              selectedDate={selectedDate}
              selectedDateReservations={reservations}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
              loading={loading}
            />
          </CalendarWrapper>
        </ConsultationStep>
        <ConsultationStep stepTitle="4. 예약자 정보" stepDescription="이름과 전화번호를 입력해주세요.">
          <TextFieldWrapper>
            <TextField placeholder="이름" />
            <ButtonTextField placeholder="전화번호" buttonText="인증하기"/>
            <TextField placeholder="인증번호 받기" />
          </TextFieldWrapper>
        </ConsultationStep>
        <ButtonWrapper>
          
          <Button
            buttonText="상담 신청하기"
            height={SizeValue.height.button}
            backgroundColor={ColorPalette.gray900}
            textColor={ColorPalette.white}
            available={true}
            onClick={handleReserveClick}
          />
        </ButtonWrapper>
      </ContentWrapper>
    </Layout>
  );
}

export default ConsulationRequestPage;