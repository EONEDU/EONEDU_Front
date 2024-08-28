import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../../blocks/Layout';
import NoticeTable from '../../blocks/NoticeTable';
import HighlightText from '../../atoms/HighlightText';
import { useMediaQuery } from 'react-responsive';
import FontStyle from '../../ui/FontStyle';
import SizeValue from '../../ui/SizeValue';
import Pagination from '../../blocks/Pagination';
import useFetchData from '../../../hooks/useFetchData';
import LoadingOverlay from '../../atoms/LoadingOverlay';
import { useNavigate } from 'react-router-dom';
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
  padding: ${SizeValue.space.xl5} 0;
`;

function NoticeTablePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const requestConfig = {
    url: `/devapi/v1/notices`,
    method: 'GET',
  };
  
  const { loading, data, error } = useFetchData(requestConfig);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  if (loading) return <LoadingOverlay />;
  if (error) return <div>오류가 발생했습니다: {error.message}</div>;

  const notices = data?.content || [];
  const totalPages = data?.totalPages || 1;

  console.log("data", data);

  return (
    <Layout>
      <Title text="공지사항" fontStyle={FontStyle.display2Bold} />
      <PageContent>
        <NoticeTable data={notices} onClick={(id) => {navigate(`/notice/${id}`);}} />
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </PageContent>
    </Layout>
  );
}

export default NoticeTablePage;