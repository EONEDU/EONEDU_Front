import React from 'react';
import styled from 'styled-components';
import ColorPalette from '../ui/ColorPalette';
import FontStyle from '../ui/FontStyle';
import SizeValue from '../ui/SizeValue';

const TableContainer = styled.div`
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
  overflow-x: auto;
  border-top: 2px solid ${ColorPalette.black};
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Th = styled.th`
  ${FontStyle.headlineBold}
  border-bottom: 1px solid ${ColorPalette.black};
  padding: ${SizeValue.space.lg};
  background-color: ${ColorPalette.transparent};
  text-align: left;

  &:first-child {
    width: 10%;
    padding-left: 0;
    text-align: center;
  }

  &:nth-child(2) {
    text-align: center;
  }

  &:last-child {
    width: 15%;
    text-align: center;
    padding-right: 0;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Td = styled.td`
  ${FontStyle.body2Medium}
  border-bottom: 1px solid ${ColorPalette.gray400};
  padding: ${SizeValue.space.lg};
  text-align: left;
  box-sizing: border-box;
  width: 100%;

  &:first-child {
    width: 10%;
    padding-left: 0;
    text-align: center;
  }

  &:nth-child(2) {
    width: 75%;
    text-align: left;
  }

  &:last-child {
    width: 15%;
    text-align: center;
    padding-right: 0;
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    padding-left: ${SizeValue.space.lg};
    border-bottom: none;

    &:first-child {
      padding: 0;
      padding-bottom: ${SizeValue.space.md};
      width: 100%;
      text-align: left;
      ${FontStyle.subhead2Bold}
      color: ${ColorPalette.gray500};
    }

    &:nth-child(2) {
      padding: 0;
      padding-bottom: ${SizeValue.space.md};
      width: 100%;
      text-align: left;
      ${FontStyle.headlineSemiBold}
    }

    &:last-child {
      padding: 0;
      padding-bottom: ${SizeValue.space.sm};
      width: 100%;
      text-align: left;
    }

    &:first-child::after {
      content: "번";
      padding-right: ${SizeValue.space.sm};
    }

    &:nth-child(2)::before {
      ${FontStyle.headlineBold}
      content: "제목 ";
      padding-right: ${SizeValue.space.lg};
    }

    &:last-child::before {
      content: "작성일";
      padding-right: ${SizeValue.space.lg};
      font-weight: bold;
    }
  }
`;

const Tr = styled.tr`
  cursor: pointer;
  width: 100%;
  display: table-row;
  
  &:hover {
    background-color: ${ColorPalette.gray050};
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid ${ColorPalette.gray400};
    margin-bottom: ${SizeValue.space.md};
    padding: ${SizeValue.space.lg};
    box-sizing: border-box;
  }
`;

const TableHeaderRow = styled.tr`
  pointer-events: none;
  display: table-row;
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