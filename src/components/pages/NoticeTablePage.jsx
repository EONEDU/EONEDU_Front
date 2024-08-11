import styled from "styled-components";
import Layout from "../blocks/Layout";
import NoticeTable from "../blocks/NoticeTable";
import HighlightText from "../atoms/HighlightText";
import { useMediaQuery } from "react-responsive";
import FontStyle from "../ui/FontStyle";
import SizeValue from "../ui/SizeValue";

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

const data = [
    { id: 1, title: 'Lorem ipsum dolor sit amet consectetuer', date: '2024.07.31' },
    { id: 2, title: 'Lorem ipsum dolor sit amet consectetuer', date: '2024.07.31' },
    { id: 3, title: 'Lorem ipsum dolor sit amet consectetuer', date: '2024.07.31' },
  ];

function NoticeTablePage() {
  const handleRowClick = (id) => {
    alert(`게시글 ${id}을(를) 클릭했습니다.`);
  };

  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  return (
    <Layout>
      <PageContent>
        <TitleText>
          <HighlightText text="공지사항" fontStyle={ isMobile ? FontStyle.display1Bold : FontStyle.display3Bold} />
        </TitleText>
        <NoticeTable data={data} onClick={handleRowClick} />
      </PageContent>
    </Layout>
  );
}

export default NoticeTablePage;