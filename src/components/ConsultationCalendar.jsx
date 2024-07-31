import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import { FontStyle } from './ui/FontStyle';
import ColorPalette from './ui/ColorPalette';

const CalendarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .react-calendar {
    width: 450px;
    border: solid 1.5px ${ColorPalette.gray700};
    border-radius: 6px;
    padding: 20px;
  }

  .react-calendar__tile {
    aspect-ratio: 1 / 1;
    background: none;
    ${FontStyle.subhead3SemiBold}
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-calendar__tile:disabled {
    background: none;
    color: ${ColorPalette.gray300};
  }

  .react-calendar__tile:enabled:hover {
    background: none;
  }
  
  .react-calendar__tile:enabled:focus {
    background: ${ColorPalette.transparent};
    border-radius: 50px;
  }

  .react-calendar__tile--now {
    background: none;
    font-weight: bold;
  }
  
  .react-calendar__tile--active {
    background: ${ColorPalette.transparent};
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    color: ${ColorPalette.white};
  }

  .react-calendar__tile--disabled {
    color: ${ColorPalette.white};
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
  }

  .react-calendar__navigation__label {
    ${FontStyle.headlineBold}
    color: ${ColorPalette.black};
    pointer-events: none;
  }

  .react-calendar__navigation__arrow {
    flex-grow: 0;
    font-size: 3.6rem;
    font-family: 'SUIT';
    font-weight: 700;
    color: ${ColorPalette.black};
    padding: 0 10px;
    background-color: transparent;
  }

  .react-calendar__navigation__arrow {
    background: none !important;
  }
  
  .react-calendar__month-view__weekdays__weekday {
    margin: 20px 0;
  }

  .react-calendar__month-view__weekdays__weekday > abbr {
    ${FontStyle.subhead3Bold}
    color: ${ColorPalette.black};
    text-decoration: none;
  }

  .circle-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .circle {
    width: 40px;
    height: 40px;
    background-color: ${ColorPalette.primary};
    border-radius: 50%;
    position: absolute;
    align-items: center;
  }
`;

const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${ColorPalette.gray900};
  border-radius: 50%;
  position: absolute;
  align-items: center;
`;

const CircleText = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ConsultationCalendar = ({ value, onChange, tileDisabled }) => {
  const tileContent = ({ date, view }) => {
    if (view === 'month' && value && date.toDateString() === value.toDateString()) {
      return (
        <CircleContainer>
          <Circle />
          <CircleText>{date.getDate()}</CircleText>
        </CircleContainer>
      );
    }
    return <CircleText>{date.getDate()}</CircleText>;
  };

  return (
    <CalendarWrapper>
      <Calendar
        onChange={onChange}
        value={value}
        tileContent={tileContent}
        tileDisabled={tileDisabled}
        showNeighboringMonth={false}
        formatDay={() => ''}
        navigationLabel={({ date, label, view }) => {
          if (view === 'month') {
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