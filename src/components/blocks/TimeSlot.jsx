import styled from "styled-components";
import ColorPalette from "../ui/ColorPalette";
import FontStyle from "../ui/FontStyle";
import SizeValue from "../ui/SizeValue";
import TimeSlotGrid from "./TimeSlotGrid";
import TimeSlotDescription from "../atoms/TimeSlotDescription";
import { useMemo } from "react";

const TimeSlotWrapper = styled.div`
  width: 100%;
  //border-radius: ${SizeValue.radius.md};
  box-shadow: 0 0 0 2px ${ColorPalette.gray600} inset;
  display: flex;
  flex-direction: column;
`;

const AmPmText = styled.div`
  ${FontStyle.display1Bold}
  padding: ${SizeValue.space.xl};
`;

const DescriptionWrapper = styled.div`
  gap: ${SizeValue.space.md};
  padding: ${SizeValue.space.xl};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const calculateTimeSlots = (baseDate, startHour, endHour, endMinute) => {
  const startTime = new Date(baseDate);
  startTime.setHours(startHour, 0, 0);
  const endTime = new Date(baseDate);
  endTime.setHours(endHour, endMinute, 0);

  const slots = [];
  for (
    let time = new Date(startTime);
    time <= endTime;
    time.setMinutes(time.getMinutes() + 30)
  ) {
    slots.push(new Date(time));
  }
  return slots;
};

function TimeSlot({ selectedDate, selectedDateReservations, selectedTime, setSelectedTime, loading }) {
  const amSlots = useMemo(
    () => calculateTimeSlots(selectedDate, 10, 11, 30),
    [selectedDate]
  );
  const pmSlots = useMemo(
    () => calculateTimeSlots(selectedDate, 12, 18, 30),
    [selectedDate]
  );

  const isTimeAvailable = (time) => {
    const formattedTime = time.toTimeString().split(" ")[0].slice(0, 5);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const timeDate = new Date(
      time.getFullYear(),
      time.getMonth(),
      time.getDate()
    );
  
    if (timeDate.getTime() === today.getTime() && time < now) {
      return false;
    }
  
    if (!selectedDateReservations || selectedDateReservations.length === 0) {
      return true;
    }
  
    const isReserved = selectedDateReservations.some((reservationTime) => {
      return reservationTime === formattedTime;
    });
  
    return !isReserved;
  };

  return (
    <TimeSlotWrapper>
      <AmPmText>오전</AmPmText>
      <TimeSlotGrid
        timeSlots={amSlots}
        isTimeAvailable={isTimeAvailable}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        loading={loading}
      />
      <AmPmText>오후</AmPmText>
      <TimeSlotGrid
        timeSlots={pmSlots}
        isTimeAvailable={isTimeAvailable}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        loading={loading}
      />
      <DescriptionWrapper>
        <TimeSlotDescription text="선택" color={ColorPalette.gray900} />
        <TimeSlotDescription text="불가" color={ColorPalette.gray100} />
      </DescriptionWrapper>
    </TimeSlotWrapper>
  );
}

export default TimeSlot;