import styled from "styled-components";
import ColorPalette from "./ui/ColorPalette";
import TimeSlotGrid from "./TimeSlotGrid";
import Description from "./Description";
import { FontStyle } from "./ui/FontStyle";

const TimeSlotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0 1.5px ${ColorPalette.gray700} inset; 
  border-radius: 6px;
  display: flex;
  width: 450px;
`;

const AmPmText = styled.text`
  ${FontStyle.display1Bold}
  padding: 20px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
  justify-content: flex-end;
`;

function TimeSlot({ timeSlots, isTimeAvailable, selectedTime, setSelectedTime, loading }) {
  return (
    <TimeSlotWrapper>
      <AmPmText>오전</AmPmText>
      <TimeSlotGrid
          timeSlots={timeSlots}
          isTimeAvailable={isTimeAvailable}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          loading={loading}
      />
      <AmPmText>오후</AmPmText>
      <TimeSlotGrid
          timeSlots={timeSlots}
          isTimeAvailable={isTimeAvailable}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          loading={loading}
      />
      <DescriptionWrapper>
        <Description text="선택" color={ColorPalette.gray900} />
        <Description text="불가" color={ColorPalette.gray100} />
      </DescriptionWrapper>
    </TimeSlotWrapper>
  );
}

export default TimeSlot;