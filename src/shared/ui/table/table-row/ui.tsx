import styled from '@emotion/styled';
import React from 'react';
// eslint-disable-next-line @conarti/feature-sliced/absolute-relative
import { User } from '@/shared/api';
import { TableRowCell } from '../table-cell';
import { ColumnKey, ColumnsType, SelectedRow, SortOrder } from '../types';

type TableRowProps<T> = {
  columns: ColumnsType<T>;
  dataSource: T[];
  sortOrder: SortOrder;
  sortedColumn: ColumnKey<T> | null;
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

export const TableRow: React.FC<TableRowProps<any>> = ({
  dataSource,
  columns,
  sortedColumn,
  sortOrder,
  selectedRow,
}) => {
  const sortedData = React.useMemo(() => {
    return dataSource.slice().sort((a, b) => {
      if (sortedColumn) {
        const column = columns.find((col) => col.dataIndex === sortedColumn);
        if (column && column.sorter) {
          return sortOrder === 'asc' ? column.sorter(a, b) : -column.sorter(a, b);
        }
      }
      return 0;
    });
  }, [dataSource, columns, sortedColumn, sortOrder]);

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
      {sortedData.map((row, rowIndex) => (
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
