import styled from '@emotion/styled';
import { ChevronDown as ChevronDownIcon } from 'lucide-react';
import React from 'react';
import { ColumnKey, ColumnsType, SortOrder } from '../types';

type TableHeaderProps<T> = {
  columns: ColumnsType<T>;
  sortOrder: SortOrder;
  sortedColumn: ColumnKey<T> | null;
  onSort: (column: ColumnKey<T>) => void;
};

const TableHeaderCell = styled.th({
  position: 'relative',
  cursor: 'pointer',
  backgroundColor: '#fafafa',
  padding: '20px 20px 20px 12px',
  textAlign: 'start',
  fontSize: 14,
  fontWeight: 'bold',
  transition: 'background-color .2s',
  ':hover': {
    backgroundColor: '#f0f0f0',
    transition: 'background-color .2s',
  },
  '&:first-of-type': {
    borderTopLeftRadius: 12,
  },
  '&:last-of-type': {
    borderTopRightRadius: 12,
    border: 'none',
  },
  '::before': {
    position: 'absolute',
    top: '50%',
    width: '1px',
    height: '1.6em',
    insetInlineEnd: 0,
    backgroundColor: '#f0f0f0',
    transform: 'translateY(-50%)',
    transition: 'background-color .2s',
    content: '""',
  },
});

const TableHeaderContent = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const ChevronDown = styled(ChevronDownIcon)`
  width: 14px;
  height: 14px;
`;

export const TableHeader: React.FC<TableHeaderProps<any>> = ({
  columns,
  sortOrder,
  sortedColumn,
  onSort,
}) => {
  const handleSort = (column: ColumnKey<any>) => {
    onSort(column);
  };

  return (
    <tr>
      {columns.map((column) => (
        <TableHeaderCell
          key={`table-head-cell-${column.key}`}
          onClick={() => column.sorter && handleSort(column.dataIndex)}
        >
          <TableHeaderContent>
            {column.title}
            {column.sorter && (
              <>
                {sortedColumn === column.dataIndex &&
                  (sortOrder === 'asc' ? (
                    <ChevronDown transform={'rotate(180)'} />
                  ) : (
                    <ChevronDown />
                  ))}
              </>
            )}
          </TableHeaderContent>
        </TableHeaderCell>
      ))}
    </tr>
  );
};
