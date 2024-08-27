import React from 'react';
import styled from 'styled-components';
import ColorPalette from '../ui/ColorPalette';
import FontStyle from '../ui/FontStyle';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Label = styled.label`
  ${FontStyle.subhead2SemiBold}
  min-width: 80px;
`;

const Select = styled.select`
  ${FontStyle.subhead1SemiBold}
  padding: 10px;
  width: 150px;
  border: 1px solid ${ColorPalette.gray600};
`;

const Input = styled.input`
  padding: 10px;
  width: 80px;
  border: 1px solid ${ColorPalette.gray600};
`;

const VerticalAlignedRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const HorizontalGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const RadioGroup = styled.div`
  ${FontStyle.descriptionMedium}
  display: flex;
  gap: 20px;
`;

const RadioButton = styled.input.attrs({ type: 'radio' })``;

const RadioLabel = styled.label`
  align-self: center;
`;

function ScoreInputForm({
  subjectScores,
  scienceType,
  handleInputChange,
  handleRadioChange
}) {
  const handleNumericInputChange = (e) => {
    const { name, value } = e.target;
    if (/^\d*$/.test(value)) {
      handleInputChange(e);
    }
  };

	const handleSingleDigitInputChange = (e) => {
    const { name, value } = e.target;
    if (/^\d{0,1}$/.test(value)) {
      handleInputChange(e);
    }
  };

  return (
    <FormContainer>
<FormRow>
  <Label>국어</Label>
  <Select name="korean" value={subjectScores.korean} onChange={handleInputChange}>
    <option value="">국어 선택</option>
    <option value="화법과작문">화법과작문</option>
    <option value="언어와매체">언어와매체</option>
  </Select>
  <Input
    type="text"
    name="koreanScore"
    value={subjectScores.koreanScore}
    placeholder="표준점수"
    onChange={handleInputChange}
  />
</FormRow>

<FormRow>
  <Label>수학</Label>
  <Select name="math" value={subjectScores.math} onChange={handleInputChange}>
    <option value="">수학 선택</option>
    <option value="확률과통계">확률과통계</option>
    <option value="미적분">미적분</option>
    <option value="기하">기하</option>
  </Select>
  <Input
    type="text"
    name="mathScore"
    value={subjectScores.mathScore}
    placeholder="표준점수"
    onChange={handleInputChange}
  />
		</FormRow>

					<FormRow>
						<Label>영어</Label>
						<Input
							type="text"
							name="english"
							value={subjectScores.english}
							placeholder="등급"
							onChange={handleSingleDigitInputChange}
						/>
					</FormRow>

					<VerticalAlignedRow>
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
						</FormRow>
						<FormRow>
							<Label></Label>
							<HorizontalGroup>
							<Select name="inquiry1" value={subjectScores.inquiry1} onChange={handleInputChange}>
			<option value="">탐구 1 선택</option>
			{scienceType.inquiry1 === 'social' ? (
				<>
					<option value="생활과윤리">생활과윤리</option>
					<option value="윤리와사상">윤리와사상</option>
					<option value="한국지리">한국지리</option>
					<option value="세계지리">세계지리</option>
					<option value="동아시아사">동아시아사</option>
					<option value="세계사">세계사</option>
					<option value="경제">경제</option>
					<option value="사회문화">사회문화</option>
					<option value="정치와법">정치와법</option>
				</>
			) : (
				<>
					<option value="물리학1">물리학1</option>
					<option value="물리학2">물리학2</option>
					<option value="화학1">화학1</option>
					<option value="화학2">화학2</option>
					<option value="생명과학1">생명과학1</option>
					<option value="생명과학2">생명과학2</option>
					<option value="지구과학1">지구과학1</option>
					<option value="지구과학2">지구과학2</option>
				</>
			)}
		</Select>
		<Input
			type="text"
			name="inquiry1Score"
			value={subjectScores.inquiry1Score}
			placeholder="표준점수"
			onChange={handleInputChange}
		/>
          </HorizontalGroup>
        </FormRow>
      </VerticalAlignedRow>

      <VerticalAlignedRow>
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
        </FormRow>
        <FormRow>
          <Label></Label>
          <HorizontalGroup>
            <Select name="inquiry2" value={subjectScores.inquiry2} onChange={handleInputChange}>
              <option value="">탐구 2 선택</option>
              {scienceType.inquiry2 === 'social' ? (
								<>
									<option value="생활과윤리">생활과윤리</option>
									<option value="윤리와사상">윤리와사상</option>
									<option value="한국지리">한국지리</option>
									<option value="세계지리">세계지리</option>
									<option value="동아시아사">동아시아사</option>
									<option value="세계사">세계사</option>
									<option value="경제">경제</option>
									<option value="사회문화">사회문화</option>정치와법
									<option value="정치와법">정치와법</option>
								</>
              ) : (
                <>
                  <option value="물리학1">물리학1</option>
                  <option value="물리학2">물리학2</option>
									<option value="화학1">화학1</option>
									<option value="화학2">화학2</option>
									<option value="생명과학1">생명과학1</option>
									<option value="생명과학2">생명과학2</option>
									<option value="지구과학1">지구과학1</option>
									<option value="지구과학2">지구과학2</option>
                </>
              )}
            </Select>
            <Input
              type="text"
              name="inquiry2Score"
              value={subjectScores.inquiry2Score}
              placeholder="표준점수"
              onChange={handleNumericInputChange}
            />
          </HorizontalGroup>
        </FormRow>
      </VerticalAlignedRow>

      <FormRow>
        <Label>한국사</Label>
        <Input
          type="text"
          name="history"
          value={subjectScores.history}
          placeholder="등급"
          onChange={handleSingleDigitInputChange}
        />
      </FormRow>
			<FormRow>
				<Label>제2외국어</Label>
				<Select name="foreignLang" value={subjectScores.foreignLang} onChange={handleInputChange}>
					<option value="">제2외국어 선택</option>
					<option value="응시안함">응시안함</option>
					<option value="일본어">일본어</option>
					<option value="중국어">중국어</option>
				</Select>
				<Input
					type="text"
					name="foreignLangScore"
					value={subjectScores.foreignLangScore}
					placeholder="등급"
					onChange={handleSingleDigitInputChange}
				/>
			</FormRow>
    </FormContainer>
  );
}

export default ScoreInputForm;