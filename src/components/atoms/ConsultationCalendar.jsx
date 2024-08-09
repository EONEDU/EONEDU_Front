import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import FontStyle from "../ui/FontStyle";
import ColorPalette from "../ui/ColorPalette";
import SizeValue from "../ui/SizeValue";

const CalendarWrapper = styled.div`
  width: ${SizeValue.width.full};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 450px;
  }

  @media (max-width: 450px) {
    width: 350px;
  }

  .react-calendar {
    width: ${SizeValue.width.pageSmContent};
    border-radius: ${SizeValue.radius.md};
    padding: ${SizeValue.space.xl};
    border: none;
    box-shadow: 0 0 0 2px ${ColorPalette.gray600} inset;
  }

  .react-calendar__tile {
    ${FontStyle.subhead3SemiBold}
    aspect-ratio: 1 / 1;
    background: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-calendar__tile:disabled {
    color: ${ColorPalette.gray300};
    background: none;
  }

  .react-calendar__tile:enabled:hover {
    background: none;
  }

  .react-calendar__tile:enabled:focus {
    border-radius: ${SizeValue.radius.circular};
    background: ${ColorPalette.transparent};
  }

  .react-calendar__tile--active {
    border-radius: ${SizeValue.radius.circular};
    background: ${ColorPalette.transparent};
    color: ${ColorPalette.white};
    aspect-ratio: 1 / 1;
  }

  .react-calendar__tile--disabled {
    color: ${ColorPalette.white};
  }

  .react-calendar__navigation {
    margin: ${SizeValue.space.lg} 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .react-calendar__navigation__label {
    ${FontStyle.headlineBold}
    color: ${ColorPalette.black};
    pointer-events: none;
  }

  .react-calendar__navigation__arrow {
    ${FontStyle.display3Bold}
    padding: 0 ${SizeValue.space.md};
    color: ${ColorPalette.black};
    background-color: ${ColorPalette.transparent};
    flex-grow: 0;
  }

  .react-calendar__navigation__arrow {
    background: none !important;
  }

  .react-calendar__month-view__weekdays__weekday {
    margin: ${SizeValue.space.xl} 0;
  }

  .react-calendar__month-view__weekdays__weekday > abbr {
    ${FontStyle.subhead3Bold}
    color: ${ColorPalette.black};
    text-decoration: none;
  }

  .weekend {
    color: ${ColorPalette.black}; 
    background-color: ${ColorPalette.transparent};
  }

  .weekend-selected {
    color: ${ColorPalette.white} !important;
  }
`;

const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Circle = styled.div`
  width: ${SizeValue.icon.xl2};
  height: ${SizeValue.icon.xl2};
  border-radius: ${SizeValue.radius.circular};
  background-color: ${ColorPalette.gray900};
  position: absolute;
  align-items: center;
`;

const CircleText = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ConsultationCalendar = ({ value, onChange }) => {
  const tileContent = ({ date, view }) => {
    if (view === "month" && value && date.toDateString() === value.toDateString()) {
      return (
        <CircleContainer>
          <Circle />
          <CircleText>{date.getDate()}</CircleText>
        </CircleContainer>
      );
    }
    return <CircleText>{date.getDate()}</CircleText>;
  };

  const tileDisabled = ({ date, view }) => {
    if (view === 'month') {
      return date < new Date(new Date().setHours(0, 0, 0, 0));
    }
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const day = date.getDay();
      const isSelected = value && date.toDateString() === value.toDateString();
      if (day === 0 || day === 6) {
        return isSelected ? "weekend weekend-selected" : "weekend";
      }
    }
    return null;
  };

  return (
    <CalendarWrapper>
      <Calendar
        onChange={onChange}
        value={value}
        tileContent={tileContent}
        tileClassName={tileClassName}
        tileDisabled={tileDisabled}
        showNeighboringMonth={false}
        formatDay={() => ""}
        navigationLabel={({ date, label, view }) => {
          if (view === "month") {
            return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
          }
          return label;
        }}
        next2Label={null}
        prev2Label={null}
      />
    </CalendarWrapper>
  );
};

export default ConsultationCalendar;