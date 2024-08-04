import React, { useState } from 'react';
import styled from 'styled-components';
import postConsultation from '../../hooks/postConsultation';
import useConsultations from '../../hooks/useConsultations';
import ConsultationCalendar from '../atoms/ConsultationCalendar';
import NavBar from '../blocks/NavBar';
import TimeSlot from '../blocks/TimeSlot';
import SizeValue from '../ui/SizeValue';
import HighlightText from '../atoms/HighlightText';
import FontStyle from '../ui/FontStyle';
import ColorPalette from '../ui/ColorPalette';
import Button from '../atoms/Button';
import ConsultationStep from '../blocks/ConsultationStep';
import TextField from '../atoms/TextField';
import Footer from '../blocks/Footer';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: ${SizeValue.width.pageSm};
  padding-top: ${SizeValue.height.navBar};
  display: flex;
  flex-direction: column;
  align-items: end;
  align-self: center;
`;

const CalendarWrapper = styled.div`
  gap: ${SizeValue.space.xl};
  margin-top: ${SizeValue.space.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-self: end;
`;

const ButtonWrapper = styled.div`
  width: ${SizeValue.width.pageSm};
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
          <ButtonWrapper>
            <Button
              buttonText="상담 신청"
              height={SizeValue.height.button}
              backgroundColor={ColorPalette.gray900}
              textColor={ColorPalette.white}
              available={true}
              onClick={handleReserveClick}
            />
          </ButtonWrapper>
        </ContentWrapper>
      </PageWrapper>
      <Footer />
    </>
  );
}

export default ConsulationRequestPage;