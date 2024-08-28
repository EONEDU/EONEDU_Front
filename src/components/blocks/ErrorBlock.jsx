import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button'; // 뒤로가기 버튼을 위한 버튼 컴포넌트
import { useNavigate } from 'react-router-dom';
import SizeValue from '../ui/SizeValue';
import FontStyle from '../ui/FontStyle';

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 화면 전체 높이에 맞춤 */
  text-align: center;
`;

const ErrorMessage = styled.h2`
  ${FontStyle.headlineBold}
  margin-bottom: ${SizeValue.space.md};
`;

function ErrorBlock() {
  const navigate = useNavigate();

  return (
    <ErrorWrapper>
      <ErrorMessage>해당 페이지에 문제가 발생했습니다.</ErrorMessage>
      <Button
        buttonText="뒤로가기"
        onClick={() => navigate(-1)}
        backgroundColor="#333"
        textColor="#fff"
      />
    </ErrorWrapper>
  );
}

export default ErrorBlock;