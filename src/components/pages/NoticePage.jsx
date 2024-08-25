import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../blocks/Layout';
import NoticeTable from '../blocks/NoticeTable';
import HighlightText from '../atoms/HighlightText';
import { useMediaQuery } from 'react-responsive';
import FontStyle from '../ui/FontStyle';
import SizeValue from '../ui/SizeValue';
import Pagination from '../blocks/Pagination';
import useFetchData from '../../hooks/useFetchData';
import LoadingOverlay from '../atoms/LoadingOverlay';

const PageContent = styled.div`
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

function NoticePage() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const requestConfig = {
    url: `/devapi/v1/notices/${0}`,
    method: 'GET',
    params: {
      page: currentPage,
      size: 10,
    }
  };
  
  const { loading, data, error } = useFetchData(requestConfig);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRowClick = (id) => {
    alert(`게시글 ${id}을(를) 클릭했습니다.`);
  };

  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  if (loading) return <LoadingOverlay />;
  if (error) return <div>오류가 발생했습니다: {error.message}</div>;

  const notices = data?.content || [];
  const totalPages = data?.totalPages || 1;

  return (
    <Layout>
      <PageContent>
        <TitleText>
          <HighlightText text="공지사항" fontStyle={ isMobile ? FontStyle.display1Bold : FontStyle.display2Bold} />
        </TitleText>
        <NoticeTable data={notices} onClick={handleRowClick} />
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </PageContent>
    </Layout>
  );
}

export default NoticePage;