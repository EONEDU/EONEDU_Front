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

function ConsentForm({ consent, onConsentChange }) {
  const handleRadioChange = (e) => {
    onConsentChange(e.target.value);
  };

  return (
    <Container>
      <DescriptionBox>
        아카데미아 학원은 원활한 응시원서 확인 및 처리를 위해 아래와 같이 개인정보를 수집·이용하고자 합니다. 내용을 자 세히 읽으신 후 동의 여부를 결정하여 주십시오.<br />
        [수집항목] 이름, 생년월일, 연락처, 학교, 성적정보<br />
        [수집목적] 지원 내역 확인, 합격 안내 및 정보 제공 등에 사용<br />
        [개인정보의 보유 및 이용기간] 동의 후 2년<br /><br />
        * 개인정보 수집 및 이용 동의를 하지 않을 경우 관련 서비스의 제한이 있을 수 있습니다.
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