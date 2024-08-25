import React, { useMemo, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
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
import LoadingOverlay from '../atoms/LoadingOverlay';
import HighlightText from '../atoms/HighlightText';
import FontStyle from '../ui/FontStyle';
import SizeValue from '../ui/SizeValue';
import UserInfoForm from '../blocks/UserInfoForm';
import ColorPalette from '../ui/ColorPalette';
import formatDateToLocal from '../../util/formatDateToLocal';
import formatToTime from '../../util/formatToTime';
import formatPhoneNumber from '../../util/formatPhoneNumber';

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  margin-bottom: ${SizeValue.space.xl5};
`;

const CalendarWrapper = styled.div`
  width: 100%;
  gap: ${SizeValue.space.lg};
  margin-top: ${SizeValue.space.xl3};
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
  ${FontStyle.display2Bold}
  white-space: nowrap;

  @media (max-width: 768px) {
    ${FontStyle.display1Bold}
  }
`;

function ConsultationRequestPage() {
  const [initialLoading, setInitialLoading] = useState(true);
  const {
    selectedDate, selectedTime, selectedType, selectedBranch,
    name, phoneNumber, code, isVerified,
    consultationRequestConfig,
    setSelectedDate, setSelectedTime, setSelectedType,
    setSelectedBranch, setName, setPhoneNumber, setCode,
    setConsultationRequestConfig, setIsVerified,
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
  const { loading: requestLoading, data: requestResult, error: requestError } = useFetchData(consultationRequestConfig);

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

  const isButtonAvailable = () => {
    return (
      selectedDate &&
      selectedTime &&
      selectedBranch !== null &&
      selectedType !== null &&
      name.trim() !== '' &&
      isVerified
    );
  };

  const handleReserveClick = () => {
    if (isButtonAvailable()) {
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
      console.log(requestResult);
    }
  };

  return (
    <Layout>
      <ContentWrapper>
        <TitleWrapper>
          <TitleText>{`빠르게\u00A0`}</TitleText>
          <HighlightText text="상담 예약" fontStyle={isMobile ? FontStyle.display1Bold : FontStyle.display2Bold} />
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
          <UserInfoForm
            name={name}
            setName={setName}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            code={code}
            setCode={setCode}
            setVerified={setIsVerified}
          />
        </ConsultationStep>
        <ButtonWrapper>
          <Button
            buttonText="상담 신청하기"
            height={SizeValue.height.button}
            backgroundColor={isButtonAvailable() ? ColorPalette.gray900 : ColorPalette.gray300}
            textColor={ColorPalette.white}
            available={isButtonAvailable()}
            onClick={handleReserveClick}
          />
        </ButtonWrapper>
      </ContentWrapper>
    </Layout>
  );
}

export default ConsultationRequestPage;