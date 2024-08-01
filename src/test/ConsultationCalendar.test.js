import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ConsultationCalendar from '../components/ConsultationCalendar/ConsultationCalendar';

describe('ConsultationCalendar', () => {
  const mockDate = new Date(2024, 7, 1);
  const mockOnChange = jest.fn();

  const mockTileDisabled = ({ date, view }) => {
    return view === 'month' && (date.getDay() === 0 || date.getDay() === 6);
  };

  test('displays the correct month and year in navigation', () => {
    render(<ConsultationCalendar value={mockDate} onChange={mockOnChange} tileDisabled={mockTileDisabled} />);
    const navigationLabel = screen.getByText('2024년 8월');
    expect(navigationLabel).toBeInTheDocument();
  });

  test('renders the active date with a circle', () => {
    render(<ConsultationCalendar value={mockDate} onChange={mockOnChange} tileDisabled={mockTileDisabled} />);
    const activeTile = screen.getByText('1');
    expect(activeTile).toBeInTheDocument();
  });

  test('disables weekends correctly', () => {
    render(<ConsultationCalendar value={mockDate} onChange={mockOnChange} tileDisabled={mockTileDisabled} />);
    const sundayTile = screen.getByText('4');
    expect(sundayTile).toBeInTheDocument();
  });

  test('calls onChange handler when a date is clicked', () => {
    render(<ConsultationCalendar value={mockDate} onChange={mockOnChange} tileDisabled={mockTileDisabled} />);
    const dateTile = screen.getByText('2');
    fireEvent.click(dateTile);
    expect(mockOnChange).toHaveBeenCalled();
  });
});