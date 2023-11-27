import styled from '@emotion/styled';
import React from 'react';
import { TableHeader } from './table-header';
import { TableRow } from './table-row';
import { ColumnKey, ColumnsType, SelectedRow, SortOrder } from './types';

type TableProps<T> = React.HTMLAttributes<HTMLTableElement> & {
  columns: ColumnsType<T>;
  dataSource: T[];
  loading?: boolean;
  onRow?: SelectedRow<T>;
};

const TableWrapper = styled.table({
  border: 'none',
  borderCollapse: 'collapse',
  width: '100%',
});

const TableRef = <T,>(
  { columns, dataSource, loading, onRow, ...props }: TableProps<T>,
  ref: React.ForwardedRef<HTMLTableElement>
) => {
  const [sortedColumn, setSortedColumn] = React.useState<ColumnKey<any> | null>(null);
  const [sortOrder, setSortOrder] = React.useState<SortOrder>(null);

  const handleSort = (column: ColumnKey<any>) => {
    if (sortedColumn === column) {
      setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortedColumn(column);
      setSortOrder('asc');
    }
  };

  if (!dataSource.length && !loading) return <p>Ничего не найдено!</p>;

  if (loading) return <p>Загрузка таблицы</p>;
  return (
    <TableWrapper ref={ref} {...props}>
      <thead>
        <TableHeader
          columns={columns}
          sortOrder={sortOrder}
          sortedColumn={sortedColumn}
          onSort={handleSort}
        />
      </thead>
      <tbody>
        <TableRow
          columns={columns}
          dataSource={dataSource}
          sortOrder={sortOrder}
          sortedColumn={sortedColumn}
          selectedRow={onRow}
        />
      </tbody>
    </TableWrapper>
  );
};

export const Table = React.forwardRef(TableRef) as <T>(
  props: TableProps<T> & { ref?: React.ForwardedRef<HTMLTableElement> }
) => ReturnType<typeof TableRef>;
