import type { ReactNode } from 'react';

type SelectableListProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
  onSelect: (item: T) => void;
  selected: T | null;
  className?: string;
};

function SelectableList<T>({ items, renderItem, onSelect, selected, className }: SelectableListProps<T>) {
  return (
    <ul className={`divide-y ${className || ''}`}>
      {items.map((item, index) => (
        <li
          key={index}
          onClick={() => onSelect(item)}
          className={`cursor-pointer p-2 hover:bg-gray-100 ${
            selected === item ? 'bg-blue-50' : ''
          }`}
        >
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

export { SelectableList };
