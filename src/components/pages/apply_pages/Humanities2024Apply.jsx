import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import SizeValue from "../../ui/SizeValue";
import Layout from "../../blocks/Layout";
import FontStyle from "../../ui/FontStyle";
import CheckboxGrid from "../../blocks/CheckBoxGrid";
import PhotoUploadButton from "../../atoms/PhotoUploadButton";
import FileUpload from "../../atoms/FileUpload";
import ApplyItemWrapper from "../../atoms/ApplyItemWrapper";
import Button from "../../atoms/Button";
import ColorPalette from "../../ui/ColorPalette";
import ApplyUserInfoForm from "../../blocks/ApplyUserInfoForm";
import TextField from "../../atoms/TextField";
import BirthdayPicker from "../../atoms/BirthdayPicker";
import PhoneTextField from "../../atoms/PhoneTextField";
import ScoreInputForm from "../../blocks/ScoreInputForm";
import ConsentForm from "../../blocks/ConsentForm";
import { useNavigate } from "react-router-dom";
import RoutePaths from "../../../constants/RoutePaths";
import useApplyStoreScience2024 from "../../../store/applyStoreScience2024";
import Title from "../../blocks/Title";

const MainContent = styled.div`
  padding-top: ${SizeValue.space.xl5};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  align-self: center;
  flex-shrink: 0;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: ${SizeValue.space.xl};
  display: flex;
  justify-content: center;
  align-self: center;
`;

const ErrorText = styled.p`
  color: red;
  text-align: center;
  margin-top: ${SizeValue.space.md};
`;

function Humanities2024ApplyPage() {
  const {
    year, month, day, photoFile, uploadedFile,
    name, phoneNumber, studentPhoneNumber, parentPhoneNumber, code, isButtonDisabled,
    setYear, setMonth, setDay, isVerified,
    selectedKoreanOptions, selectedMathOptions,
    selectedScienceOptions, selectedGenderOptions, selectedGraduationType,
    setName, setStudentPhoneNumber, setCode,
    setPhotoFile, setUploadedFile,
    setPhoneNumber, setParentPhoneNumber, setSelectedKoreanOptions,
    setSelectedMathOptions, setSelectedScienceOptions, setSelectedGenderOptions,
    setSelectedGraduationType, setIsVerified,
  } = useApplyStoreScience2024();

  const navigate = useNavigate();

  const [subjectScores, setSubjectScores] = useState({
    korean: '',
    koreanScore: '',
    math: '',
    mathScore: '',
    inquiry1: '',
    inquiry1Score: '',
    inquiry2: '',
    inquiry2Score: '',
    english: '',
    history: '',
    foreignLang: '',
    foreignLangScore: ''
  });

  const [scienceType, setScienceType] = useState({
    inquiry1: 'social',
    inquiry2: 'social'
  });

  const [isButtonAvailable, setIsButtonAvailable] = useState(false);
  const [missingFields, setMissingFields] = useState([]);
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const fields = [];

    // 조건 체크
    if (!name) fields.push("이름");
    if (!year || !month || !day) fields.push("생년월일");
    if (selectedKoreanOptions.length === 0) fields.push("국어과목 선택");
    if (selectedMathOptions.length === 0) fields.push("수학과목 선택");
    if (selectedScienceOptions.length < 2) fields.push("탐구과목 선택");
    if (!photoFile) fields.push("사진 파일 선택");
    if (!uploadedFile) fields.push("성적표 파일 선택");

    // 제2외국어가 "응시안함"이 아닐 때만 등급 입력을 검사
    const requiredScores = [
      'korean', 'koreanScore', 'math', 'mathScore',
      'inquiry1', 'inquiry1Score', 'inquiry2', 'inquiry2Score',
      'english', 'history'
    ];

    // Check other required scores
    for (const score of requiredScores) {
      if (!subjectScores[score]) {
        fields.push("성적표 입력");
        break; // 한 번만 메시지를 추가하기 위해 break
      }
    }

    // Check foreignLangScore only if foreignLang is not "응시안함"
    if (subjectScores.foreignLang !== "응시안함" && !subjectScores.foreignLangScore) {
      fields.push("제2외국어 등급 입력");
    }

    // 탐구 과목 점수가 100을 넘지 않도록 체크
    if (subjectScores.inquiry1Score > 100 || subjectScores.inquiry2Score > 100) {
      fields.push("탐구 과목 점수는 100을 넘을 수 없습니다.");
    }

    // 탐구 과목이 동일하지 않도록 체크
    if (subjectScores.inquiry1 === subjectScores.inquiry2) {
      fields.push("탐구 과목을 다르게 선택해야 합니다.");
    }

    if (!isVerified) fields.push("문자 인증");
    if (selectedGraduationType.length === 0) fields.push("재학 여부 선택");
    if (consent !== 'agree') fields.push("개인정보 처리 방침 동의");

    setMissingFields(fields);
    setIsButtonAvailable(fields.length === 0);
  }, [
    name, year, month, day, selectedKoreanOptions, selectedMathOptions,
    selectedScienceOptions, photoFile, uploadedFile, subjectScores, isVerified,
    selectedGraduationType, consent
  ]);

  const uploadTwoFiles = async () => {
    const [uploadedPhotoUrl, uploadedReportFileUrl] = await Promise.all([
      photoFile ? uploadFile(photoFile) : '',
      uploadedFile ? uploadFile(uploadedFile) : ''
    ]);

    console.log("Uploaded photo URL:", uploadedPhotoUrl);
    console.log("Uploaded report file URL:", uploadedReportFileUrl);

    return { uploadedPhotoUrl, uploadedReportFileUrl };
  };
  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/devapi/v1/files', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log("File upload response:", response.data);
      return response.data.data.url;
    } catch (error) {
      console.error("Error uploading file:", error);
      return null;
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    if (name.includes('Score')) {
      // 점수 입력일 경우
      const numericValue = parseInt(value, 10);
      setSubjectScores({ ...subjectScores, [name]: isNaN(numericValue) ? '' : numericValue });
    } else {
      // 과목 선택일 경우
      setSubjectScores({ ...subjectScores, [name]: value });
    }
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setScienceType({ ...scienceType, [name]: value });
  };

  const handleReserveClick = async () => {
    if (!isButtonAvailable) return;

    try {
      const { uploadedPhotoUrl, uploadedReportFileUrl } = await uploadTwoFiles();

      if (!uploadedPhotoUrl || !uploadedReportFileUrl) {
        console.error("Failed to upload files");
        return;
      }

      // 날짜를 4자리 연도, 2자리 월, 2자리 일로 포맷팅
      const formattedMonth = month.toString().padStart(2, '0');
      const formattedDay = day.toString().padStart(2, '0');
      const birthdate = `${year}-${formattedMonth}-${formattedDay}`;

      const requestBody = {
        branchId: 1,
        registrationType: "인문계/2024수능",
        clientInfo: {
          gender: selectedGenderOptions[0], 
          birthdate: birthdate,
          graduationType: selectedGraduationType[0],
          clientPhone: studentPhoneNumber,
          clientName: name,
          parentPhone: parentPhoneNumber,
        },
        subjects: {
          korean: selectedKoreanOptions[0],
          math: selectedMathOptions[0],
          electiveSubject1: selectedScienceOptions[0],
          electiveSubject2: selectedScienceOptions[1],
          secondLanguage: subjectScores.foreignLang,
        },
        previousGrade: {
          subjects: {
            korean: subjectScores.korean,
            math: subjectScores.math,
            electiveSubject1: subjectScores.inquiry1,
            electiveSubject2: subjectScores.inquiry2,
            secondLanguage: subjectScores.foreignLang,
          },
          score: {
            korean: parseInt(subjectScores.koreanScore, 10),
            math: parseInt(subjectScores.mathScore, 10),
            english: parseInt(subjectScores.english, 10),
            history: parseInt(subjectScores.history, 10),
            electiveSubject1: parseInt(subjectScores.inquiry1Score, 10),
            electiveSubject2: parseInt(subjectScores.inquiry2Score, 10),
            secondLanguage: subjectScores.foreignLang === "응시안함" ? 0 : parseInt(subjectScores.foreignLangScore, 10),
          },
        },
        profileImageUrl: uploadedPhotoUrl,
        reportFileUrl: uploadedReportFileUrl,
      };

      console.log(requestBody);

      const response = await axios.post("/devapi/v1/registrations", requestBody);

      console.log(response.data);

      navigate(RoutePaths.APPLY_RESULT.path, { state: response });

    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  return (
    <Layout>
    <Title text="인문계 신설시작반 (무시험전형) 원서접수 페이지" />
      <MainContent>
        
        <ApplyItemWrapper
          title="응시 예정 국어 *" 
          contentTitle="- 수능 응시(예정) 과목을 선택하세요. 접수 후 과목 변경 불가합니다." >
          <CheckboxGrid
            options={["화법과작문", "언어와매체"]} 
            selectedOptions={selectedKoreanOptions} 
            setSelectedOptions={setSelectedKoreanOptions} 
            maxSelection={1} 
          />
        </ApplyItemWrapper>
        <ApplyItemWrapper
          title="응시 예정 수학 *" 
          contentTitle="- 수능 응시(예정) 과목을 선택하세요. 접수 후 과목 변경 불가합니다." >
          <CheckboxGrid
            options={["미적분", "확률과통계", "기하"]}
            selectedOptions={selectedMathOptions}
            setSelectedOptions={setSelectedMathOptions}
            maxSelection={1}
          />
        </ApplyItemWrapper>
        <ApplyItemWrapper
          title="응시 예정 탐구 *" 
          contentTitle="- 수능 응시(예정) 과목을 선택하세요. 접수 후 과목 변경 불가합니다." >
          <CheckboxGrid
            options={[
                "물리학1", "화학1", "생명과학1", "지구과학1",
                "물리학2", "화학2", "생명과학2", "지구과학2",
                "생활과윤리", "윤리와사상", "한국지리", "세계지리",
                "동아시아사", "세계사",  "경제", "사회문화", "정치와법",
            ]}
            selectedOptions={selectedScienceOptions}
            setSelectedOptions={setSelectedScienceOptions}
            maxSelection={2}
          />
        </ApplyItemWrapper>
        <ApplyItemWrapper title="이름 *" >
          <TextField
            textValue={name}
            setTextValue={setName}
            placeholder="이름"
            isButtonDisabled={isButtonDisabled}
          />
        </ApplyItemWrapper>
        <ApplyItemWrapper
          title="사진 *" 
          contentTitle="3개월 이내의 컬러 증명사진, 3 * 4 크기의 이미지 파일 (jpg, png)" >
          <PhotoUploadButton onPhotoUpload={setPhotoFile} />
        </ApplyItemWrapper>
        <ApplyItemWrapper title="성별 *" >
          <CheckboxGrid
            options={["남자", "여자"]}
            selectedOptions={selectedGenderOptions}
            setSelectedOptions={setSelectedGenderOptions}
            maxSelection={1}
          />
        </ApplyItemWrapper>
        <ApplyItemWrapper title="생년월일 *" >
          <BirthdayPicker
            year={year}
            setYear={setYear}
            month={month}
            setMonth={setMonth}
            day={day}
            setDay={setDay}
          />
        </ApplyItemWrapper>
        <ApplyItemWrapper title="재학 구분 *" >
          <CheckboxGrid
            options={["고교졸업", "검정고시", "해외학교"]}
            selectedOptions={selectedGraduationType}
            setSelectedOptions={setSelectedGraduationType}
            maxSelection={1}
          />
        </ApplyItemWrapper>
        <ApplyItemWrapper title="휴대폰 인증 *" >
          <ApplyUserInfoForm
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            code={code}
            setCode={setCode}
            setVerified={setIsVerified}
          />
        </ApplyItemWrapper>
        <ApplyItemWrapper title="학부모 연락처 *" >
          <PhoneTextField
            textValue={parentPhoneNumber}
            setTextValue={setParentPhoneNumber}
            placeholder="학부모 연락처"
          />
        </ApplyItemWrapper>
        <ApplyItemWrapper title="학생 연락처 *" >
          <PhoneTextField
            textValue={studentPhoneNumber}
            setTextValue={setStudentPhoneNumber}
            placeholder="학생 연락처"
          />
        </ApplyItemWrapper>
        <ApplyItemWrapper
          title="성적표 *" 
          contentTitle="6월 평가원 성적표 사진" >
          <FileUpload onFileUpload={setUploadedFile} />
        </ApplyItemWrapper>
        <ApplyItemWrapper title="성적표 입력 *">
          <ScoreInputForm 
            subjectScores={subjectScores}
            scienceType={scienceType}
            handleInputChange={handleInputChange}
            handleRadioChange={handleRadioChange}
          />
        </ApplyItemWrapper>
        <ApplyItemWrapper title="개인정보 처리 *">
          <ConsentForm
            consent={consent}
            onConsentChange={setConsent}
          />
        </ApplyItemWrapper>
        <ButtonWrapper>
          <Button
            buttonText="원서 접수"
            height={SizeValue.height.button}
            backgroundColor={isButtonAvailable ? ColorPalette.gray900 : ColorPalette.gray300}
            textColor={ColorPalette.white}
            available={isButtonAvailable}
            onClick={handleReserveClick}
          />
        </ButtonWrapper>
        {!isButtonAvailable && (
          <ErrorText>
            {`입력되지 않은 항목: ${missingFields.join(', ')}`}
          </ErrorText>
        )}
      </MainContent>
    </Layout>
  );
}

export default Humanities2024ApplyPage;