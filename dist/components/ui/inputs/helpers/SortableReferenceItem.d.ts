import React from 'react';
type SortableReferenceItemProps = {
    image: string;
    title: string;
    isDragging?: boolean;
    handleDelete: () => void;
    handleEdit: () => void;
};
export default function SortableReferenceItem({ image, title, isDragging, handleDelete, handleEdit, }: SortableReferenceItemProps): React.JSX.Element;
export {};
