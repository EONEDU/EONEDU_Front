import React, { useState } from 'react';
import styled from 'styled-components';
import ColorPalette from '../ui/ColorPalette';

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Select = styled.select`
  border: 1px solid ${ColorPalette.gray500};
  padding: 12px;
  font-size: 16px;
`;

function BirthdayPicker({ year, month, day, setYear, setMonth, setDay }) {

  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleDayChange = (e) => {
    setDay(e.target.value);
  };

  return (
    <Container>
      <Select value={year} onChange={handleYearChange}>
        <option value="">년</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </Select>
      <Select value={month} onChange={handleMonthChange}>
        <option value="">월</option>
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </Select>
      <Select value={day} onChange={handleDayChange}>
        <option value="">일</option>
        {days.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </Select>
    </Container>
  );
}

export default BirthdayPicker;