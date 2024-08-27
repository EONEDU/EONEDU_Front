import React from 'react';
import styled from 'styled-components';
import FontStyle from '../ui/FontStyle';

const CheckboxGridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns */
  gap: 10px;
  flex-shrink: 0;
`;

const CheckboxItem = styled.label`
  ${FontStyle.body1Regular}
  display: flex;
  align-items: center;
`;

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 5px;
`;

function CheckboxGrid({  
  options = [], 
  selectedOptions = [], 
  setSelectedOptions, 
  maxSelection = null 
}) {
  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      if (maxSelection && selectedOptions.length >= maxSelection) {
        alert(`최대 ${maxSelection}개까지만 선택할 수 있습니다.`);
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    }
  };

  return (
    <CheckboxGridStyle>
      {options.map((option, index) => (
        <CheckboxItem key={index}>
          <CheckboxInput
            checked={selectedOptions.includes(option)}
            onChange={() => handleCheckboxChange(option)}
          />
          {option}
        </CheckboxItem>
      ))}
    </CheckboxGridStyle>
  );
}

export default CheckboxGrid;