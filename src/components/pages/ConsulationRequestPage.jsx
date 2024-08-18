import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import useFetchData from '../../hooks/useFetchData';
import ConsultationCalendar from '../atoms/ConsultationCalendar';
import TimeSlot from '../blocks/TimeSlot';
import SizeValue from '../ui/SizeValue';
import HighlightText from '../atoms/HighlightText';
import FontStyle from '../ui/FontStyle';
import ColorPalette from '../ui/ColorPalette';
import Button from '../atoms/Button';
import ConsultationStep from '../blocks/ConsultationStep';
import Layout from '../blocks/Layout';
import ToggleButton from '../blocks/ToggleButton';
import TextField from '../atoms/TextField';
import ButtonTextField from '../atoms/ButtonTextField';
import { useMediaQuery } from 'react-responsive';
import LoadingOverlay from '../atoms/LoadingOverlay';

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
`;

const CalendarWrapper = styled.div`
  width: 100%;
  gap: ${SizeValue.space.lg};
  margin-top: ${SizeValue.space.lg};
  margin-bottom: ${SizeValue.space.xl5};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin-bottom: ${SizeValue.space.xl};
  display: flex;
  justify-content: center;
  align-self: center;
`;

const TitleWrapper = styled.div`
  margin: ${SizeValue.space.xl5} 0;
  display: flex;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const TitleText = styled.div`
  ${FontStyle.display3Bold}
  white-space: nowrap;

  @media (max-width: 768px) {
    ${FontStyle.display1Bold}
  }
`;

const TextFieldWrapper = styled.div`
  margin-top: ${SizeValue.space.lg};
  margin-bottom: ${SizeValue.space.xl5};
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${SizeValue.space.md};
  width: 100%;
`;

function formatDateToLocal(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function ConsultationRequestPage() {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedType, setSelectedType] = useState(0);
  const [selectedBranch, setSelectedBranch] = useState(0);
  const [codeGenerateRequestConfig, setCodeGenerateRequestConfig] = useState(null);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [timer, setTimer] = useState(300);

  const dateString = formatDateToLocal(selectedDate);

  const reservationsRequest = useMemo(() => ({
    url: `/devapi/v1/reservations?date=${dateString}&branch_id=${selectedBranch + 1}&counsel_type_id=${selectedType + 1}`,
    method: 'GET'
  }), [dateString, selectedBranch, selectedType]);
  const branchRequest = useMemo(() => ({ url: `/devapi/v1/branches`, method: 'GET' }), []);
  const counselTypeRequest = useMemo(() => ({ url: `/devapi/v1/counsel-types`, method: 'GET' }), []);
  const codeGenerate = useMemo(() => ({ url: `/devapi/v1/sms-verifications`, method: 'POST', data: { clientPhone: phoneNumber } }), [phoneNumber]);
  const codeVerificate = useMemo(() => ({ url: `/devapi/v1/sms-verifications/verify`, method: 'POST', data: { clientPhone: phoneNumber, code } }), [phoneNumber, code]);

  const { loading: reservationLoading, data: reservationData, error } = useFetchData(reservationsRequest);
  const { loading: branchLoading, data: branchData, error: branchError } = useFetchData(branchRequest);
  const { loading: counselTypeLoading, data: counselTypeData, error: counselTypeError } = useFetchData(counselTypeRequest);
  const { loading: codeLoading, data: codeData, error: codeError } = useFetchData(codeGenerateRequestConfig);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    let interval;
    if (isButtonDisabled && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsButtonDisabled(false);
      setTimer(300);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isButtonDisabled, timer]);

  if (reservationLoading || branchLoading || counselTypeLoading) {
    return <LoadingOverlay />;
  }

  if (error || branchError || counselTypeError)
    return <p>Error: {error?.message || branchError?.message || counselTypeError?.message}</p>;

  const typeToggleData = counselTypeData?.counselTypes.length > 0 ? counselTypeData.counselTypes : [
    { name: '방문 상담' },
    { name: '전화 상담' },
  ];

  const branchToggleData = branchData?.branches.length > 0 ? branchData.branches : [
    { name: '1호점' },
  ];

  const handleReserveClick = async () => {
    // 상담 예약 로직 추가
  };

  const handleGenerateCodeClick = () => {
    setCodeGenerateRequestConfig({
      url: `/devapi/v1/sms-verifications`,
      method: 'POST',
      data: { clientPhone: phoneNumber },
      headers: {
        'Content-Type': 'application/json', // 추가
      },
    });
    setIsCodeSent(true);
    setIsButtonDisabled(true);
  };

  return (
    <Layout>
      <ContentWrapper>
        <TitleWrapper>
          <TitleText>{`빠르게\u00A0`}</TitleText>
          <HighlightText text="상담 예약" fontStyle={isMobile ? FontStyle.display1Bold : FontStyle.display3Bold} />
          <TitleText>{`을 도와드릴게요!`}</TitleText>
        </TitleWrapper>
        <ConsultationStep stepTitle="1. 상담 종류" stepDescription="원하시는 상담 시간을 선택해주세요.">
          <ToggleButton toggleButtons={typeToggleData} selected={selectedType} setSelected={setSelectedType} />
        </ConsultationStep>
        <ConsultationStep stepTitle="2. 지점" stepDescription="상담 지점을 선택해주세요.">
          <ToggleButton toggleButtons={branchToggleData} selected={selectedBranch} setSelected={setSelectedBranch} />
        </ConsultationStep>
        <ConsultationStep stepTitle="3. 상담 날짜" stepDescription="대충 상담 날짜">
          <CalendarWrapper>
            <ConsultationCalendar value={selectedDate} onChange={setSelectedDate} />
            <TimeSlot
              selectedDate={selectedDate}
              selectedDateReservations={reservationData.unavailableTimes}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
              loading={reservationLoading}
            />
          </CalendarWrapper>
        </ConsultationStep>
        <ConsultationStep stepTitle="4. 예약자 정보" stepDescription="이름과 전화번호를 입력해주세요.">
          <TextFieldWrapper>
            <TextField placeholder="이름" setTextValue={setName} />
            <ButtonTextField
              placeholder="전화번호"
              buttonText={isButtonDisabled ? `${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, '0')}` : "인증 번호 받기"}
              setTextValue={setPhoneNumber}
              onButtonClick={handleGenerateCodeClick}
              disabled={isButtonDisabled}
            />
            <TextField placeholder="인증번호" setTextValue={setCode} />
          </TextFieldWrapper>
        </ConsultationStep>
        <ButtonWrapper>
          <Button
            buttonText="상담 신청하기"
            height={SizeValue.height.button}
            backgroundColor={ColorPalette.gray900}
            textColor={ColorPalette.white}
            available={true}
            onClick={handleReserveClick}
          />
        </ButtonWrapper>
      </ContentWrapper>
    </Layout>
  );
}

export default ConsultationRequestPage;