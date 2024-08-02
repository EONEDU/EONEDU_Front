import React, { useState } from 'react';
import styled from 'styled-components';
import postConsultation from '../hooks/postConsultation';
import useConsultations from '../hooks/useConsultations';
import ConsultationCalendar from '../components/ConsultationRequest/ConsultationCalendar/ConsultationCalendar';
import NavBar from '../components/Common/NavBar';
import TimeSlot from '../components/ConsultationRequest/TimeSlot/TimeSlot';
import CommonButton from '../components/Common/CommonButton';
import SizeValue from '../components/ui/SizeValue';
import HighlightText from '../components/Common/HighlightText';
import FontStyle from '../components/ui/FontStyle';
import StepText from '../components/ConsultationRequest/StepText/StepText';
import ColorPalette from '../components/ui/ColorPalette';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: ${SizeValue.width.pageSm};
  padding-top: ${SizeValue.height.navBar};
  gap: ${SizeValue.space.xl4};
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
`;

const CalendarWrapper = styled.div`
  gap: ${SizeValue.space.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  width: ${SizeValue.width.pageSmContent};
`;

const TitleWrapper = styled.div`
  ${FontStyle.display3Bold}
  margin: ${SizeValue.space.xl5} 0;
  display: flex;
  white-space: nowrap;
`;

const TitleText = styled.div`
  ${FontStyle.display3Bold}
  white-space: nowrap;
`;

const VerticalDevider = styled.div`
  display: flex;
  width: 1px;
  background-color: ${({ color }) => color};
`;

const CategoryWrapper = styled.div`
  display: flex;
  align-items: stretch;
  gap: ${SizeValue.space.xl};
`;

function formatDateToLocal(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function ConsulationRequestPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
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
    <>
      <NavBar />
      <PageWrapper>
        <ContentWrapper>
          <TitleWrapper>
            <TitleText>{`빠르게\u00A0`}</TitleText>
            <HighlightText text="상담 예약" fontStyle={FontStyle.display3Bold} />
            <TitleText>{`을 도와드릴게요!`}</TitleText>
          </TitleWrapper>
          <StepText titleText="3. 상담시간" descriptionText="원하시는 상담 시간을 선택해주세요." />
          <CategoryWrapper>
            <VerticalDevider color={ColorPalette.black} />
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
          </CategoryWrapper>
          <ButtonWrapper>
            <CommonButton onClick={handleReserveClick} text="상담 신청" />
          </ButtonWrapper>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
}

export default ConsulationRequestPage;