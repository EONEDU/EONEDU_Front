import React from 'react';
import styled from 'styled-components';
import FontStyle from '../ui/FontStyle';
import SizeValue from '../ui/SizeValue';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
`;

const Title = styled.div`
  ${FontStyle.subhead3Bold}
  flex: 0 0 150px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ContentTitle = styled.div`
  ${FontStyle.subhead3SemiBold}
  padding-bottom: ${SizeValue.space.md};
`;

function ApplyItemWrapper({ title = '제목', contentTitle, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        {contentTitle && <ContentTitle>{contentTitle}</ContentTitle>}
        {children}
      </Content>
    </Container>
  );
}

export default ApplyItemWrapper;