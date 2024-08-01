import styled from "styled-components";
import ColorPalette from "../ui/ColorPalette";
import TimeSlotGrid from "./TimeSlotGrid";
import Description from "./Description";
import FontStyle from "../ui/FontStyle";
import SizeValue from "../ui/SizeValue";

const TimeSlotWrapper = styled.div`
  width: ${SizeValue.width.pageSmContent};
  border-radius: ${SizeValue.radius.md};
  box-shadow: 0 0 0 2px ${ColorPalette.gray600} inset;
  display: flex;
  flex-direction: column;
  
  display: flex;
`;

const AmPmText = styled.text`
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