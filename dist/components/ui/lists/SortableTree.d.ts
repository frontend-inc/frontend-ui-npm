import React from 'react';
interface Item {
    id: string;
    name: string;
    type: 'file' | 'folder';
    parent_id: string | null;
    isOpen?: boolean;
    position?: number;
}
interface SortableTreeProps {
    items: Item[];
    setItems: React.Dispatch<React.SetStateAction<Item[]>>;
    handleDelete: (id: string) => void;
    handleEdit: (id: string) => void;
    handleDrop: (item: Item, sorted: Item[]) => void;
}
export default function SortableTree(props: SortableTreeProps): React.JSX.Element;
export {};
