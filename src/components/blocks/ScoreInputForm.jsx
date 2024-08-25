import React, { useState } from 'react';
import styled from 'styled-components';
import ColorPalette from '../ui/ColorPalette';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Label = styled.label`
  min-width: 80px;
  font-weight: bold;
`;

const Select = styled.select`
  padding: 8px;
  width: 150px;
  border: 1px solid ${ColorPalette.gray600};
`;

const Input = styled.input`
  padding: 8px;
  width: 80px;
  border: 1px solid ${ColorPalette.gray600};
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const RadioButton = styled.input.attrs({ type: 'radio' })``;

const RadioLabel = styled.label`
  margin-right: 15px;
	align-self: center;
`;

function ScoreInputForm() {
  const [subjectScores, setSubjectScores] = useState({
    korean: '',
    math: '',
    english: '',
    inquiry1: '',
    inquiry2: '',
    history: '',
    foreignLang: ''
  });

  const [scienceType, setScienceType] = useState({
    inquiry1: 'social',
    inquiry2: 'social'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if ((name === 'english' || name === 'history') && (value === '' || /^[0-9]$/.test(value))) {
      setSubjectScores({ ...subjectScores, [name]: value });
    } else if (name !== 'english' && name !== 'history') {
      setSubjectScores({ ...subjectScores, [name]: value });
    }
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setScienceType({ ...scienceType, [name]: value });
  };

  return (
    <FormContainer>
      <FormRow>
        <Label>국어</Label>
        <Select name="korean" onChange={handleInputChange}>
          <option value="화작">화작</option>
          <option value="언매">언매</option>
        </Select>
        <Input type="text" name="koreanScore" placeholder="표준점수" onChange={handleInputChange} />
      </FormRow>

      <FormRow>
        <Label>수학</Label>
        <Select name="math" onChange={handleInputChange}>
          <option value="확통">확통</option>
          <option value="미적">미적</option>
          <option value="기하">기하</option>
        </Select>
        <Input type="text" name="mathScore" placeholder="표준점수" onChange={handleInputChange} />
      </FormRow>

      <FormRow>
        <Label>영어</Label>
        <Input
          type="text"
          name="english"
          placeholder="등급"
          value={subjectScores.english}
          onChange={handleInputChange}
        />
      </FormRow>

      <FormRow>
        <Label>탐구 1</Label>
        <RadioGroup>
          <RadioLabel>
            <RadioButton
              name="inquiry1"
              value="social"
              checked={scienceType.inquiry1 === 'social'}
              onChange={handleRadioChange}
            />
            사회
          </RadioLabel>
          <RadioLabel>
            <RadioButton
              name="inquiry1"
              value="science"
              checked={scienceType.inquiry1 === 'science'}
              onChange={handleRadioChange}
            />
            과학
          </RadioLabel>
        </RadioGroup>
        <Select name="inquiry1" onChange={handleInputChange}>
          <option value="">탐구 1 선택</option>
          {scienceType.inquiry1 === 'social' ? (
            <>
              <option value="사회1">사회 1</option>
              <option value="사회2">사회 2</option>
            </>
          ) : (
            <>
              <option value="과학1">과학 1</option>
              <option value="과학2">과학 2</option>
            </>
          )}
        </Select>
        <Input type="text" name="inquiry1Score" placeholder="표준점수" onChange={handleInputChange} />
      </FormRow>

      <FormRow>
        <Label>탐구 2</Label>
        <RadioGroup>
          <RadioLabel>
            <RadioButton
              name="inquiry2"
              value="social"
              checked={scienceType.inquiry2 === 'social'}
              onChange={handleRadioChange}
            />
            사회
          </RadioLabel>
          <RadioLabel>
            <RadioButton
              name="inquiry2"
              value="science"
              checked={scienceType.inquiry2 === 'science'}
              onChange={handleRadioChange}
            />
            과학
          </RadioLabel>
        </RadioGroup>
        <Select name="inquiry2" onChange={handleInputChange}>
          <option value="">탐구 2 선택</option>
          {scienceType.inquiry2 === 'social' ? (
            <>
              <option value="사회1">사회 1</option>
              <option value="사회2">사회 2</option>
            </>
          ) : (
            <>
              <option value="과학1">과학 1</option>
              <option value="과학2">과학 2</option>
            </>
          )}
        </Select>
        <Input type="text" name="inquiry2Score" placeholder="표준점수" onChange={handleInputChange} />
      </FormRow>

      <FormRow>
        <Label>한국사</Label>
        <Input
          type="text"
          name="history"
          placeholder="등급"
          value={subjectScores.history}
          onChange={handleInputChange}
        />
      </FormRow>

      <FormRow>
        <Label>제2외국어</Label>
        <Select name="foreignLang" onChange={handleInputChange}>
          <option value="응시안함">응시안함</option>
          <option value="일본어">일본어</option>
          <option value="중국어">중국어</option>
        </Select>
        <Input type="text" name="foreignLangScore" placeholder="등급" onChange={handleInputChange} />
      </FormRow>
    </FormContainer>
  );
}

export default ScoreInputForm;