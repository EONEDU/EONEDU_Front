import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import SizeValue from "../ui/SizeValue";
import Layout from "../blocks/Layout";
import HighlightText from "../atoms/HighlightText";
import FontStyle from "../ui/FontStyle";
import CheckboxGrid from "../blocks/CheckBoxGrid";
import { useState } from "react";
import PhotoUploadButton from "../atoms/PhotoUploadButton";
import FileUpload from "../atoms/FileUpload";
import UserInfoForm from "../blocks/UserInfoForm";
import useApplyStore from "../../store/applyStore";
import ApplyItemWrapper from "../atoms/ApplyItemWrapper";
import Button from "../atoms/Button";
import ColorPalette from "../ui/ColorPalette";
import ApplyUserInfoForm from "../blocks/ApplyUserInfoForm";
import TextField from "../atoms/TextField";
import BirthdayPicker from "../atoms/BirthdayPicker";
import PhoneTextField from "../atoms/PhoneTextField";
import ScoreInputForm from "../blocks/ScoreInputForm";
import ConsentForm from "../blocks/ConsentForm";

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  align-self: center;
`;

const TitleWrapper = styled.div`
  ${FontStyle.display2Bold}
  margin: ${SizeValue.space.xl5} 0;
  display: flex;
  white-space: nowrap;
  align-self: center;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: ${SizeValue.space.xl};
  display: flex;
  justify-content: center;
  align-self: center;
`;

function ApplyPage() {
  const {
    year, month, day, photoFile, uploadedFile,
    name, phoneNumber, studentPhoneNumber, parentPhoneNumber, code, isButtonDisabled,
    setYear, setMonth, setDay,
    selectedKoreanOptions, selectedMathOptions,
    selectedScienceOptions, selectedGenderOptions,
    setName, setStudentPhoneNumber, setCode,
    setPhotoFile, setUploadedFile,
    setPhoneNumber, setParentPhoneNumber, setSelectedKoreanOptions,
    setSelectedMathOptions, setSelectedScienceOptions, setSelectedGenderOptions,
  } = useApplyStore();

  const handleReserveClick = () => {
    // if (isButtonAvailable()) {
    //   setConsultationRequestConfig({
    //     url: `devapi/v1/reservations`,
    //     method: 'POST',
    //     data: {
    //       counselTypeId: selectedType + 1,
    //       branchId: selectedBranch + 1,
    //       clientName: name,
    //       clientPhone: phoneNumber,
    //       date: formatDateToLocal(selectedDate),
    //       time: formatToTime(selectedTime),
    //     }
    //   });
    // }
  };

  const koreanOptions = [
    "국어(화작)", "국어(언매)" 
  ];

  const mathOption = [
    "수학(미적)", "수학(기하)" 
  ];

  const genderOption = [
    "남자", "여자" 
  ];

  const scienceOption = [
    "물리학 I", "화학 I", "생명과학 I", "지구과학 I",
    "물리학 II", "화학 II", "생명과학 II", "지구과학 II",
  ];

  return (
    <Layout>
      <MainContent>
        <TitleWrapper>
          <HighlightText text="원서 접수" fontStyle={FontStyle.display2Bold} />
        </TitleWrapper>
        <ApplyItemWrapper
          title="응시 예정 국어 *" 
          contentTitle="- 수능 응시(예정) 과목을 선택하세요. 접수 후 과목 변경 불가합니다." >
          <CheckboxGrid
            options={koreanOptions} 
            selectedOptions={selectedKoreanOptions} 
            setSelectedOptions={setSelectedKoreanOptions} 
            maxSelection={1} 
          />
        </ ApplyItemWrapper >
        <ApplyItemWrapper
          title="응시 예정 수학 *" 
          contentTitle="- 수능 응시(예정) 과목을 선택하세요. 접수 후 과목 변경 불가합니다." >
          <CheckboxGrid
            options={mathOption}
            selectedOptions={selectedMathOptions}
            setSelectedOptions={setSelectedMathOptions}
            maxSelection={1}
          />
        </ ApplyItemWrapper >
        <ApplyItemWrapper
          title="응시 예정 탐구 *" 
          contentTitle="- 수능 응시(예정) 과목을 선택하세요. 접수 후 과목 변경 불가합니다." >
          <CheckboxGrid
            options={scienceOption}
            selectedOptions={selectedScienceOptions}
            setSelectedOptions={setSelectedScienceOptions}
            maxSelection={2}
          />
        </ ApplyItemWrapper >
        <ApplyItemWrapper title="이름 *" >
          <TextField
            textValue={name}
            setTextValue={setName}
            placeholder="이름"
            isButtonDisabled={isButtonDisabled}
          />
        </ ApplyItemWrapper >
        <ApplyItemWrapper
          title="사진 *" 
          contentTitle="3개월 이내의 컬러 증명사진, 3 * 4 크기의 이미지 파일 (jpg, png)" >
          <PhotoUploadButton onPhotoUpload={setPhotoFile} />
        </ ApplyItemWrapper >
        <ApplyItemWrapper title="성별 *" >
          <CheckboxGrid
            options={genderOption}
            selectedOptions={selectedGenderOptions}
            setSelectedOptions={setSelectedGenderOptions}
            maxSelection={1}
          />
        </ ApplyItemWrapper >
        <ApplyItemWrapper title="생년월일 *" >
          <BirthdayPicker
            year={year}
            setYear={setYear}
            month={month}
            setMonth={setMonth}
            day={day}
            setDay={setDay}
          />
        </ ApplyItemWrapper >
        <ApplyItemWrapper title="재학 구분 *" >
          <CheckboxGrid
            options={genderOption}
            selectedOptions={selectedGenderOptions}
            setSelectedOptions={setSelectedGenderOptions}
            maxSelection={1}
          />
        </ ApplyItemWrapper >

        <ApplyItemWrapper title="휴대폰 인증 *" >
          <ApplyUserInfoForm
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            code={code}
            setCode={setCode}
            isButtonDisabled={isButtonDisabled}
            onButtonClick={null}
          />
        </ ApplyItemWrapper >
        <ApplyItemWrapper title="학부모 연락처 *" >
          <PhoneTextField
            textValue={parentPhoneNumber}
            setTextValue={setParentPhoneNumber}
            placeholder="학부모 연락처"
          />
        </ ApplyItemWrapper >
        <ApplyItemWrapper title="학생 연락처 *" >
          <PhoneTextField
            textValue={studentPhoneNumber}
            setTextValue={setStudentPhoneNumber}
            placeholder="학생 연락처"
          />
        </ ApplyItemWrapper >
        <ApplyItemWrapper
          title="성적표 *" 
          contentTitle="6월 평가원 성적표 사진" >
        <FileUpload onFileUpload={setUploadedFile} />
        </ ApplyItemWrapper >
        <ApplyItemWrapper title="성적표 입력 *">
          <ScoreInputForm></ScoreInputForm>
        </ApplyItemWrapper>
        <ApplyItemWrapper title="개인정보 처리 *">
          <ConsentForm />
        </ApplyItemWrapper>
        <ButtonWrapper>
          <Button
            buttonText="원서 접수"
            height={SizeValue.height.button}
            backgroundColor={true ? ColorPalette.gray900 : ColorPalette.gray300}
            textColor={ColorPalette.white}
            available={true}
            onClick={handleReserveClick}
          />
        </ButtonWrapper>
      </MainContent>
    </Layout>
  );
}

export default ApplyPage;