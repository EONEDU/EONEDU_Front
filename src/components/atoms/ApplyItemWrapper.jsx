import React from 'react';
import styled from 'styled-components';
import FontStyle from '../ui/FontStyle';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
`;

const Title = styled.div`
  ${FontStyle.subhead2Bold}
  flex: 0 0 150px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ContentTitle = styled.div`
  ${FontStyle.subhead2Bold}
  padding-bottom: 10px;
`;

function ApplyItemWrapper({ title = 'File Upload', contentTitle = 'Choose a file', children }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <ContentTitle>{contentTitle}</ContentTitle>
        {children}
      </Content>
    </Container>
  );
}

export default ApplyItemWrapper;