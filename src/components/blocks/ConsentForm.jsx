import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-weight: bold;
`;

const DescriptionBox = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

const RadioButton = styled.input.attrs({ type: 'radio' })``;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

function ConsentForm() {
  const [consent, setConsent] = useState(null);

  const handleRadioChange = (e) => {
    setConsent(e.target.value);
  };

  return (
    <Container>
      <DescriptionBox>

      </DescriptionBox>
      <RadioGroup>
        <RadioLabel>
          <RadioButton
            name="consent"
            value="agree"
            checked={consent === 'agree'}
            onChange={handleRadioChange}
          />
          동의합니다.
        </RadioLabel>
        <RadioLabel>
          <RadioButton
            name="consent"
            value="disagree"
            checked={consent === 'disagree'}
            onChange={handleRadioChange}
          />
          동의하지 않습니다.
        </RadioLabel>
      </RadioGroup>
    </Container>
  );
}

export default ConsentForm;