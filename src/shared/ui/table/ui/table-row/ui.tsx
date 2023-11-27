import styled from '@emotion/styled';
import React from 'react';
// eslint-disable-next-line @conarti/feature-sliced/absolute-relative
import { User } from '@/shared/api';
import { ColumnsType, SelectedRow } from '../../types';
import { TableRowCell } from '../table-cell';

type TableRowProps<T> = {
  columns: ColumnsType<T>;
  dataSource: T[];
  selectedRow?: SelectedRow<T>;
};

const TableRowItem = styled.tr({
  cursor: 'pointer',
  borderBottom: '1px solid #f0f0f0;',
  '&:last-of-type': {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  transition: '.2s background-color',
  ':hover': {
    backgroundColor: '#fafafa',
  },
});

export const TableRow: React.FC<TableRowProps<any>> = ({ dataSource, columns, selectedRow }) => {
  const memoizedSelectedRow = React.useCallback(
    (row: User, rowIndex: number) => {
      if (selectedRow) {
        selectedRow(row, rowIndex);
      }
    },
    [selectedRow]
  );

  return (
    <>
      {dataSource.map((row, rowIndex) => (
        <TableRowItem
          key={`table-row-${rowIndex}`}
          onClick={() => memoizedSelectedRow(row, rowIndex)}
        >
          {columns.map((column, columnIndex) => (
            <TableRowCell key={`table-cell-${columnIndex}`} item={row} column={column} />
          ))}
        </TableRowItem>
      ))}
    </>
  );
};
