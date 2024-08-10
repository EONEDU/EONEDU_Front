import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

const Th = styled.th`
  border-bottom: 2px solid #000;
  padding: 10px;
  text-align: left;
  font-weight: bold;
  background-color: #f4f4f4;
`;

const Td = styled.td`
  border-bottom: 1px solid #ddd;
  padding: 10px;
  text-align: left;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const TableHeaderRow = styled.tr`
  pointer-events: none;
`;

const NoticeTable = ({ data, onClick }) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <TableHeaderRow>
            <Th>번호</Th>
            <Th>제목</Th>
            <Th>작성일</Th>
          </TableHeaderRow>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <Tr key={index} onClick={() => onClick(item.id)}>
              <Td>{item.id}</Td>
              <Td>{item.title}</Td>
              <Td>{item.date}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default NoticeTable;