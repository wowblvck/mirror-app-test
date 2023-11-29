import styled from '@emotion/styled';
import React from 'react';
// eslint-disable-next-line @conarti/feature-sliced/absolute-relative
import { Spin } from '@/shared/ui';
import { useSortableTable } from '../lib';
import { ColumnsType, SelectedRow } from '../types.ts';
import { TableHeader } from './table-header';
import { TableRow } from './table-row';

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

const SpinWrapper = styled.div({
  marginTop: '30px',
  textAlign: 'center',
});

const NotFound = styled.p({
  textAlign: 'center',
});

const TableContainer = styled.div({
  display: 'block',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
});

const TableRef = <T,>(
  { columns, dataSource, loading, onRow, ...props }: TableProps<T>,
  ref: React.ForwardedRef<HTMLTableElement>
) => {
  const { sortedColumn, sortOrder, handleSort, sortedData } = useSortableTable<any>(
    dataSource,
    columns
  );

  if (!dataSource.length && !loading) return <NotFound>Nothing found!</NotFound>;

  if (loading)
    return (
      <SpinWrapper>
        <Spin size={32} />
      </SpinWrapper>
    );
  return (
    <TableContainer>
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
          <TableRow columns={columns} dataSource={sortedData} selectedRow={onRow} />
        </tbody>
      </TableWrapper>
    </TableContainer>
  );
};

export const Table = React.forwardRef(TableRef) as <T>(
  props: TableProps<T> & { ref?: React.ForwardedRef<HTMLTableElement> }
) => ReturnType<typeof TableRef>;
