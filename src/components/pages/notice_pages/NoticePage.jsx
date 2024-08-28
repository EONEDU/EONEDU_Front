import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../../blocks/Layout';
import HighlightText from '../../atoms/HighlightText';
import { useMediaQuery } from 'react-responsive';
import FontStyle from '../../ui/FontStyle';
import SizeValue from '../../ui/SizeValue';
import useFetchData from '../../../hooks/useFetchData';
import LoadingOverlay from '../../atoms/LoadingOverlay';
import { useParams } from 'react-router-dom';
import Title from '../../blocks/Title';

const PageContent = styled.div`
  padding-top: ${SizeValue.space.xl5};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1150px;
  align-self: center;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.div`
  padding-top: ${SizeValue.space.xl5};
  padding-bottom: ${SizeValue.space.xl5};
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Divider = styled.hr`
  width: 100%;
  border: 0;
  height: 1px;
  background-color: #ccc;
  margin: ${SizeValue.space.md} 0;
`;

const Content = styled.div`
  ${FontStyle.body2Regular}
  width: 100%;
  padding-top: ${SizeValue.space.md};
  max-width: 1150px;
  text-align: left;
  line-height: 1.6;
  font-size: 16px;
  color: #333;
`;

function NoticePage() {
  const { id } = useParams();
  
  const requestConfig = {
    url: `/devapi/v1/notices/${id}`,
    method: 'GET',
  };
  
  const { loading, data, error } = useFetchData(requestConfig);

  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  if (loading) return <LoadingOverlay />;
  if (error) return <div>오류가 발생했습니다: {error.message}</div>;

  return (
    <Layout>
      <Title text={data.title} fontStyle={FontStyle.display2Bold} />
      <PageContent>
        <Divider />
        <Content>
          {data.content}
        </Content>
      </PageContent>
    </Layout>
  );
}

export default NoticePage;