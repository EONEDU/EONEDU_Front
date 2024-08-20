import React from 'react';
import styled from 'styled-components';
import ColorPalette from '../ui/ColorPalette';
import FontStyle from '../ui/FontStyle';
import SizeValue from '../ui/SizeValue';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${SizeValue.space.lg} 0;
`;

const PageNumber = styled.button`
  ${FontStyle.body2Medium}
  background-color: ${props => (props.active ? ColorPalette.black : 'transparent')};
  color: ${props => (props.active ? ColorPalette.white : ColorPalette.black)};
  border: none;
  border-radius: ${props => (props.active ? '50%' : '4px')};
  width: ${props => (props.active ? '36px' : 'auto')};
  height: ${props => (props.active ? '36px' : 'auto')};
  padding: 0 12px;
  margin: 0 ${SizeValue.space.sm};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${props => (props.active ? ColorPalette.black : ColorPalette.gray200)};
  }
`;

const ArrowButton = styled.button`
  ${FontStyle.body2Medium}
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 ${SizeValue.space.sm};
  color: ${props => (props.disabled ? ColorPalette.gray400 : ColorPalette.black)};
  
  &:disabled {
    cursor: not-allowed;
  }
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <PageNumber key={i} active={i === currentPage} onClick={() => onPageChange(i)}>
            {i}
          </PageNumber>
        );
      }
    } else {
      pages.push(
        <PageNumber key={1} active={currentPage === 1} onClick={() => onPageChange(1)}>
          1
        </PageNumber>
      );

      if (currentPage > 3) {
        pages.push(<PageNumber key="left-ellipsis" disabled>...</PageNumber>);
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <PageNumber key={i} active={i === currentPage} onClick={() => onPageChange(i)}>
            {i}
          </PageNumber>
        );
      }

      if (currentPage < totalPages - 2) {
        pages.push(<PageNumber key="right-ellipsis" disabled>...</PageNumber>);
      }

      pages.push(
        <PageNumber key={totalPages} active={currentPage === totalPages} onClick={() => onPageChange(totalPages)}>
          {totalPages}
        </PageNumber>
      );
    }

    return pages;
  };

  return (
    <PaginationContainer>
      <ArrowButton onClick={handlePrevious} disabled={currentPage === 1}>
        &lt;
      </ArrowButton>
      {renderPageNumbers()}
      <ArrowButton onClick={handleNext} disabled={currentPage === totalPages}>
        &gt;
      </ArrowButton>
    </PaginationContainer>
  );
};

export default Pagination;