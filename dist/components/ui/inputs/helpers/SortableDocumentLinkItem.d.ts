import React from 'react';
type SortableListItemProps = {
    image?: string;
    title: string;
    subtitle?: string;
    isDragging?: boolean;
    handleDelete: () => void;
    handleEdit: () => void;
};
declare const SortableDoccumentLinkItem: React.FC<SortableListItemProps>;
export default SortableDoccumentLinkItem;
