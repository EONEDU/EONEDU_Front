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

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  max-width: 800px;
  align-items: flex-start;
  margin: 40px auto;
  padding: 0 20px;
`;

const TitleWrapper = styled.div`
  ${FontStyle.display2Bold}
  margin: ${SizeValue.space.xl5} 0;
  display: flex;
  white-space: nowrap;
  align-self: center;
`;

function ApplyPage() {
  const {
    name, phoneNumber, code, isButtonDisabled, timer,
     setName, setPhoneNumber, setCode,
  } = useApplyStore();

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedMathOptions, setSelectedMathOptions] = useState([]);
  const [photoFile, setPhotoFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handlePhotoUpload = (file) => {
    setPhotoFile(file);
  };

  const handleFileUpload = (file) => {
    setUploadedFile(file);
  };

  const options = [
    'Custom Option 1', 'Custom Option 2', 'Custom Option 3', 
    'Custom Option 4', 'Custom Option 5', 'Custom Option 6'
  ];

  const mathOption = [
    'Custom Option 1', 'Custom Option 2', 'Custom Option 3', 
    'Custom Option 4', 'Custom Option 5', 'Custom Option 6'
  ];

  return (
    <Layout>
      <MainContent>
        <TitleWrapper>
          <HighlightText text="원서 접수" fontStyle={FontStyle.display2Bold} />
        </TitleWrapper>
        <ApplyItemWrapper
          title="설문 조사" 
          contentTitle="관심 있는 주제를 선택하세요" >
          <CheckboxGrid 

            options={options} 
            selectedOptions={selectedOptions} 
            setSelectedOptions={setSelectedOptions} 
            maxSelection={3} 
          />
        </ ApplyItemWrapper >
        <ApplyItemWrapper
          title="설문 조사" 
          contentTitle="관심 있는 주제를 선택하세요" >
          <CheckboxGrid
            title="설문 조사" 
            contentTitle="관심 있는 주제를 선택하세요"
            options={mathOption}
            selectedOptions={selectedMathOptions}
            setSelectedOptions={setSelectedMathOptions}
            maxSelection={3}
          />
        </ ApplyItemWrapper >
        <ApplyItemWrapper
          title="설문 조사" 
          contentTitle="관심 있는 주제를 선택하세요" >
        <PhotoUploadButton onPhotoUpload={handlePhotoUpload} />
        </ ApplyItemWrapper >
        <ApplyItemWrapper
          title="설문 조사" 
          contentTitle="관심 있는 주제를 선택하세요" >
        <FileUpload onFileUpload={handleFileUpload} />
        </ ApplyItemWrapper >
        <ApplyItemWrapper
          title="설문 조사" 
          contentTitle="관심 있는 주제를 선택하세요" >
        <UserInfoForm
            name={name}
            setName={setName}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            code={code}
            setCode={setCode}
            isButtonDisabled={isButtonDisabled}
            timer={timer}
            onButtonClick={null}
          />
          </ ApplyItemWrapper >
      </MainContent>
    </Layout>
  );
}

export default ApplyPage;