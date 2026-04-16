import type { ReactNode } from 'react';

type Column<T> = {
  accessor: keyof T;
  label: string;
  format?: (value: T[keyof T]) => ReactNode;
};

type SortableTableProps<T> = {
  data: T[];
  columns: Column<T>[];
  sortBy?: keyof T;
  sortDirection?: 'asc' | 'desc';
  onSort?: (field: keyof T) => void;
  className?: string;
};

function SortableTable<T>({ data, columns, sortBy, sortDirection, onSort, className }: SortableTableProps<T>) {
  return (
    <table className={`w-full border-collapse ${className || ''}`}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={String(col.accessor)}
              onClick={() => onSort?.(col.accessor)}
              className="cursor-pointer border-b p-2 text-left font-semibold hover:bg-gray-50"
            >
              {col.label}
              {sortBy === col.accessor && (
                <span className="ml-1">{sortDirection === 'asc' ? '▲' : '▼'}</span>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((col) => (
              <td key={String(col.accessor)} className="border-b p-2">
                {col.format
                  ? col.format(row[col.accessor])
                  : String(row[col.accessor])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export { SortableTable };
