import React from 'react';
type SortableReferenceItemProps = {
    image?: string;
    title: string;
    isDragging?: boolean;
    handleDelete: () => void;
    handleEdit: () => void;
};
declare const SortableReferenceItem: React.FC<SortableReferenceItemProps>;
export default SortableReferenceItem;
