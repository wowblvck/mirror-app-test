export type ColumnKey<T> = keyof T;

export type Column<T> = {
  dataIndex: ColumnKey<T>;
  key: string;
  title: string;
  sorter?: (a: T, b: T) => number;
};

export type ColumnsType<T> = Column<T>[];

export type SortOrder = 'asc' | 'desc' | null;

export type SelectedRow<T> = (record: T, index?: number) => void;
