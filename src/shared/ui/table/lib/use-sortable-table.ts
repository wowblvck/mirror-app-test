import React from 'react';
import { ColumnKey, ColumnsType, SortOrder } from '../types.ts';

export const useSortableTable = <T>(initialDataSource: T[], columns: ColumnsType<T>) => {
  const [sortedColumn, setSortedColumn] = React.useState<ColumnKey<any> | null>(null);
  const [sortOrder, setSortOrder] = React.useState<SortOrder>(null);

  React.useEffect(() => {
    if (sortOrder === null) {
      setSortedColumn(null);
    }
  }, [sortOrder]);

  const handleSort = (column: ColumnKey<any>) => {
    if (sortedColumn === column) {
      setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : null));
    } else {
      setSortedColumn(column);
      setSortOrder('asc');
    }
  };

  const sortedData = React.useMemo(() => {
    return initialDataSource.slice().sort((a, b) => {
      if (sortedColumn) {
        const column = columns.find((col) => col.dataIndex === sortedColumn);
        if (column && column.sorter) {
          return sortOrder === 'asc' ? column.sorter(a, b) : -column.sorter(a, b);
        }
      }
      return 0;
    });
  }, [initialDataSource, columns, sortedColumn, sortOrder]);

  return { sortedColumn, sortOrder, handleSort, sortedData };
};
