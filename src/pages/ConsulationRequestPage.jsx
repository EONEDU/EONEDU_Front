import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import fetchConsultationsByDate from '../hooks/fetchConsultationByDate';
import postConsultation from '../hooks/postConsultation';
import ConsultationCalendar from '../components/ConsultationCalendar';
import Navbar from '../components/NavBar';
import TimeSlot from '../components/TimeSlot';
import CommonButton from '../components/CommonButton';
import SizeValue from '../components/ui/SizeValue';

const ContentWrapper = styled.div`
  padding-top: ${SizeValue.height.navBar};
  gap: ${SizeValue.space.xl4};
  display: flex;
  flex-direction: column;
  align-items: center;
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

function formatDateToLocal (date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

function ConsulationRequestPage() {
  const [value, setValue] = useState(new Date());
  const [selectedDateReservations, setSelectedDateReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchConsultationsByDate(
          value.getFullYear(),
          value.getMonth() + 1,
          value.getDate()
        );
        setSelectedDateReservations(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [value]);

  const timeSlots = useMemo(() => {
    const startTime = new Date(value);
    startTime.setHours(16, 0, 0);
    const endTime = new Date(value);
    endTime.setHours(21, 30, 0);

    const slots = [];
    for (let time = new Date(startTime); time <= endTime; time.setMinutes(time.getMinutes() + 30)) {
      slots.push(new Date(time));
    }
    return slots;
  }, [value]);

  const onChange = (value) => {
    setValue(value);
  };

  const tileDisabled = ({ date, view }) => {
    if (view === 'month') {
      return date < new Date(new Date().setHours(0, 0, 0, 0));
    }
  };

  const isTimeAvailable = (time) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const timeDate = new Date(time.getFullYear(), time.getMonth(), time.getDate());

    if (timeDate.getTime() === today.getTime() && time < now) {
      return false;
    }

    const formattedTime = time.toTimeString().split(' ')[0];
    return !selectedDateReservations.some(reservation => {
      const reservationTime = new Date(`1970-01-01T${reservation.appointment_time}`).toTimeString().split(' ')[0];
      return reservationTime === formattedTime;
    });
  };

  const handleReserveClick = async () => {
    if (selectedTime) {
      const formattedDate = formatDateToLocal(value);
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
      <Navbar/>
      <ContentWrapper>
        <CalendarWrapper>
          <ConsultationCalendar
            value={value}
            onChange={onChange}
            tileDisabled={tileDisabled}
          />
          <TimeSlot
            timeSlots={timeSlots}
            isTimeAvailable={isTimeAvailable}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            loading={loading}
          />
        </CalendarWrapper>
        <ButtonWrapper>
          <CommonButton onClick={handleReserveClick} text="상담 신청"/>
        </ButtonWrapper>
      </ContentWrapper>
    </>
  );
};

export default ConsulationRequestPage;