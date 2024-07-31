import React from 'react';
import styled from 'styled-components';
import TimeSlotButton from './TimeSlotButton';

const TimeSlotGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 0 20px;
`;

const TimeSlotGrid = ({ timeSlots, isTimeAvailable, selectedTime, setSelectedTime, loading }) => {
  const handleTimeSlotClick = (time) => {
    setSelectedTime(time);
  };

  return (
    <TimeSlotGridWrapper>
      {timeSlots.map((time, index) => {
        const isAvailable = isTimeAvailable(time);
        return (
          <TimeSlotButton
            key={index}
            time={time}
            isAvailable={isAvailable}
            isSelected={selectedTime && selectedTime.getTime() === time.getTime()}
            isLoading={loading}
            onClick={() => isAvailable && !loading && handleTimeSlotClick(time)}
          />
        );
      })}
    </TimeSlotGridWrapper>
  );
};

export default TimeSlotGrid;