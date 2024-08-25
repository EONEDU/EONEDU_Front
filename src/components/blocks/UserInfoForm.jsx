import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TextField from '../atoms/TextField';
import PhoneNumberButtonTextField from '../atoms/PhoneNumberButtonTextField';
import SizeValue from '../ui/SizeValue';
import ColorPalette from '../ui/ColorPalette';
import CodeButtonTextField from '../atoms/CodeButtonTextField';
import useFetchData from '../../hooks/useFetchData';
import formatPhoneNumber from '../../util/formatPhoneNumber';

const TextFieldWrapper = styled.div`
  margin-top: ${SizeValue.space.lg};
  margin-bottom: ${SizeValue.space.xl5};
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${SizeValue.space.md};
  width: 100%;
`;

function UserInfoForm({ 
  name, 
  setName,
  phoneNumber,
  setPhoneNumber,
  code,
  setCode,
  setVerified,
}) {
  const [isPhoneButtonDisabled, setIsPhoneButtonDisabled] = useState(false);
  const [isCodeButtonDisabled, setIsCodeButtonDisabled] = useState(false);
  const [isPhoneTextFieldDisabled, setIsPhoneTextFieldDisabled] = useState(false);
  const [isCodeTextFieldDisabled, setIsCodeTextFieldDisabled] = useState(false);
  const [codeGenerateRequestConfig, setCodeGenerateRequestConfig] = useState(null);
  const [codeVerifyRequestConfig, setCodeVerifyRequestConfig] = useState(null);

  const { loading: codeLoading, data: codeData, error: codeError } = useFetchData(codeGenerateRequestConfig);
  const { loading: verifyLoading, data: verifyResult, error: verifyError } = useFetchData(codeVerifyRequestConfig);

  useEffect(() => {
    if (phoneNumber.length === 13) {
      setIsPhoneButtonDisabled(false);
    } else {
      setIsPhoneButtonDisabled(true);
    }
  }, [phoneNumber]);

  useEffect(() => {
    if (code.length === 6) {
      setIsCodeButtonDisabled(false);
    } else {
      setIsCodeButtonDisabled(true);
    }
  }, [code]);

  useEffect(() => {
    if (verifyResult) {
      console.log('verifyResult:', verifyResult);
      if (verifyResult && verifyResult.isValid) {
        alert("인증이 성공적으로 완료되었습니다.");
        setIsCodeButtonDisabled(true);
        setIsCodeTextFieldDisabled(true);
        setVerified(true);
      } else if (!verifyResult.isValid) {
        const errorMessage = verifyResult.message || "인증에 실패했습니다. 다시 시도해 주세요.";
        alert(errorMessage);
        setIsCodeButtonDisabled(false);
        setIsCodeTextFieldDisabled(false);
      }
    }
  }, [verifyResult]);


  useEffect(() => {
    if (codeData) {
      console.log('codeData:', codeData);
      if (codeData && codeData.isCreated) {
        alert("인증번호가 발송되었습니다.");
        setIsPhoneButtonDisabled(true);
        setIsPhoneTextFieldDisabled(true);
      } else if (!codeData.isCreated) {
        const errorMessage = codeData.message || "인증번호 발송에 실패했습니다. 다시 시도해 주세요.";
        alert(errorMessage);
        setIsPhoneButtonDisabled(false);
        setIsPhoneTextFieldDisabled(false);
      }
    }
  }, [codeData]);

  const handleGenerateCodeClick = () => {
    setCodeGenerateRequestConfig({
      url: `/devapi/v1/sms-verifications`,
      method: 'POST',
      data: { clientPhone: formatPhoneNumber(phoneNumber) },
    });
  };

  const handleVerifyCodeClick = () => {
    setCodeVerifyRequestConfig({
      url: `/devapi/v1/sms-verifications/verify`,
      method: 'POST',
      data: {
        clientPhone: formatPhoneNumber(phoneNumber),
        code: code,
      },
    });
    setIsCodeButtonDisabled(true);
  };

  return (
    <TextFieldWrapper>
      <TextField placeholder="이름" setTextValue={setName} textValue={name} />
      <PhoneNumberButtonTextField
        placeholder="전화번호"
        buttonText="인증 코드 받기"
        setTextValue={setPhoneNumber}
        onButtonClick={isPhoneButtonDisabled ? null : handleGenerateCodeClick}
        buttonBackgroundColor={isPhoneButtonDisabled ? ColorPalette.gray300 : ColorPalette.gray900}
        isButtonDisabled={isPhoneButtonDisabled}
        isTextFieldDisabled={isPhoneTextFieldDisabled}
        textValue={phoneNumber}
      />
      <CodeButtonTextField
        placeholder="인증번호"
        buttonText="코드 확인하기"
        setTextValue={setCode}
        onButtonClick={isCodeButtonDisabled ? null : handleVerifyCodeClick}
        buttonBackgroundColor={isCodeButtonDisabled ? ColorPalette.gray300 : ColorPalette.gray900}
        isButtonDisabled={isCodeButtonDisabled}
        isTextFieldDisabled={isCodeTextFieldDisabled}
        textValue={code}
      />
    </TextFieldWrapper>
  );
}

export default UserInfoForm;