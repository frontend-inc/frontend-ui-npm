import React from 'react';
type SortableListProps = {
    items: any[];
    droppableId?: string;
    renderItem: (item: any, index: number, props: any) => React.ReactNode;
    handleDrop: (items: any[]) => void;
};
export default function SortableList({ items, droppableId, renderItem, handleDrop, }: SortableListProps): React.JSX.Element;
export {};
