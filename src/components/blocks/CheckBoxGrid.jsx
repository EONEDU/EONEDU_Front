import React from 'react';
import styled from 'styled-components';
import FontStyle from '../ui/FontStyle';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.div`
  ${FontStyle.subhead2Bold}
  flex: 0 0 150px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ContentTitle = styled.div`
  ${FontStyle.subhead2Bold}
  padding-bottom: 10px;
`;

const CheckboxGridStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const CheckboxItem = styled.label`
  ${FontStyle.body1Regular}
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 5px;
`;

function CheckboxGrid({ options = [], selectedOptions = [], setSelectedOptions, maxSelection = null }) {
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
    <Container>
      <Title>Title</Title>
      <Content>
        <ContentTitle>Content goes here</ContentTitle>
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
      </Content>
    </Container>
  );
}

export default CheckboxGrid;