import styled from "styled-components";
import Layout from "../blocks/Layout";
import NoticeTable from "../blocks/NoticeTable";

const PageContent = styled.div`
  width: 100%;
  max-width: 1150px;
`;

const data = [
    { id: 1, title: 'Lorem ipsum dolor sit amet consectetuer', date: '2024.07.31' },
    { id: 2, title: 'Lorem ipsum dolor sit amet consectetuer', date: '2024.07.31' },
    { id: 3, title: 'Lorem ipsum dolor sit amet consectetuer', date: '2024.07.31' },
  ];

function NoticeTablePage() {
  const handleRowClick = (id) => {
    alert(`게시글 ${id}을(를) 클릭했습니다.`);
  };
  
  return (
    <Layout>
      <PageContent>
        <NoticeTable data={data} onClick={handleRowClick} />
      </PageContent>
    </Layout>
  );
}

export default NoticeTablePage;