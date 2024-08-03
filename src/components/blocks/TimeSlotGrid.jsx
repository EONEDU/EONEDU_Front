import React from 'react';
import styled from 'styled-components';
import SizeValue from '../ui/SizeValue';
import TimeSlotButton from '../atoms/TimeSlotButton';

const TimeSlotGridWrapper = styled.div`
  gap: ${SizeValue.space.md};
  padding: 0 ${SizeValue.space.xl};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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