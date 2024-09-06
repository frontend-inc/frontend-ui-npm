import React from 'react';
type SortableReferenceItemProps = {
    item: any;
    handleEditItem: (item: any) => void;
    handleRemoveItem: (item: any) => void;
};
declare const SortableReferenceItem: React.FC<SortableReferenceItemProps>;
export default SortableReferenceItem;
