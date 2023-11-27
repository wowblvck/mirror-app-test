import styled from '@emotion/styled';
import React from 'react';
import { Column } from '../types';

interface TableCellProps<T> {
  item: T;
  column: Column<T>;
}

const TableCell = styled.td({
  padding: '16px 16px 16px 12px',
  fontSize: 14,
});

export const TableRowCell: React.FC<TableCellProps<any>> = ({ column, item }) => {
  return <TableCell>{item[column.dataIndex]}</TableCell>;
};
