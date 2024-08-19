import React, { useMemo, useEffect, useState } from 'react';
import styled from 'styled-components';
import useFetchData from '../../hooks/useFetchData';
import useConsultationStore from '../../store/consultationStore';
import useTimer from '../../hooks/useTimer';
import ConsultationCalendar from '../atoms/ConsultationCalendar';
import TimeSlot from '../blocks/TimeSlot';
import Button from '../atoms/Button';
import ConsultationStep from '../blocks/ConsultationStep';
import Layout from '../blocks/Layout';
import ToggleButton from '../blocks/ToggleButton';
import TextField from '../atoms/TextField';
import ButtonTextField from '../atoms/ButtonTextField';
import { useMediaQuery } from 'react-responsive';
import LoadingOverlay from '../atoms/LoadingOverlay';
import HighlightText from '../atoms/HighlightText';
import FontStyle from '../ui/FontStyle';
import SizeValue from '../ui/SizeValue';
import ColorPalette from '../ui/ColorPalette';

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

function formatToTime(isoString) {
  const date = new Date(isoString);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

function ConsultationRequestPage() {
  const [initialLoading, setInitialLoading] = useState(true);
  const {
    selectedDate, selectedTime, selectedType, selectedBranch,
    name, phoneNumber, code, isButtonDisabled, timer,
    codeGenerateRequestConfig,consultationRequestConfig,
    setSelectedDate, setSelectedTime, setSelectedType,
    setSelectedBranch, setName, setPhoneNumber, setCode,
    setIsCodeSent, setIsButtonDisabled, setCodeGenerateRequestConfig,
    setConsultationRequestConfig
  } = useConsultationStore();

  useTimer();

  const dateString = formatDateToLocal(selectedDate);

  const reservationsRequest = useMemo(() => ({
    url: `/devapi/v1/reservations?date=${dateString}&branch_id=${selectedBranch + 1}&counsel_type_id=${selectedType + 1}`,
    method: 'GET'
  }), [dateString, selectedBranch, selectedType]);
  const branchRequest = useMemo(() => ({ url: `/devapi/v1/branches`, method: 'GET' }), []);
  const counselTypeRequest = useMemo(() => ({ url: `/devapi/v1/counsel-types`, method: 'GET' }), []);

  const { loading: reservationLoading, data: reservationData, error: reservationError } = useFetchData(reservationsRequest);
  const { loading: branchLoading, data: branchData, error: branchError } = useFetchData(branchRequest);
  const { loading: counselTypeLoading, data: counselTypeData, error: counselTypeError } = useFetchData(counselTypeRequest);
  const { loading: codeLoading, data: codeData, error: codeError } = useFetchData(codeGenerateRequestConfig);
  const { loading: consulatationLoading, data: consultationData, error: consultationError } = useFetchData(consultationRequestConfig);

  useEffect(() => {
    if (!reservationLoading && !branchLoading && !counselTypeLoading) {
      setInitialLoading(false);
    }
  }, [reservationLoading, branchLoading, counselTypeLoading]);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const combinedError = reservationError || branchError || counselTypeError;
  if (combinedError) {
    return <p>Error: {combinedError.message}</p>;
  }

  if (initialLoading) {
    return <LoadingOverlay />;
  }

  const typeToggleData = counselTypeData?.counselTypes.length > 0 ? counselTypeData.counselTypes : [
    { name: '방문 상담' },
    { name: '전화 상담' },
  ];

  const branchToggleData = branchData?.branches.length > 0 ? branchData.branches : [
    { name: '1호점' },
  ];

  const handleReserveClick = () => {
    setConsultationRequestConfig({
      url: `devapi/v1/reservations`,
      method: 'POST',
      data: {
        counselTypeId: selectedType + 1,
        branchId: selectedBranch + 1,
        clientName: name,
        clientPhone: phoneNumber,
        date: formatDateToLocal(selectedDate),
        time: formatToTime(selectedTime),
      }
    });
  };

  const handleGenerateCodeClick = () => {
    setCodeGenerateRequestConfig({
      url: `/devapi/v1/sms-verifications`,
      method: 'POST',
      data: { clientPhone: phoneNumber },
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
        <ConsultationStep stepTitle="3. 상담 날짜" stepDescription="상담 날짜를 선택해주세요.">
          <CalendarWrapper>
            <ConsultationCalendar value={selectedDate} onChange={setSelectedDate} />
            <TimeSlot
              selectedDate={selectedDate}
              selectedDateReservations={reservationData?.unavailableTimes || []}
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