import React from 'react';
type SortableListItemProps = {
    primary?: string | React.ReactNode;
    secondary?: string | React.ReactNode;
    isDragging?: boolean;
};
declare const SortableListItem: React.FC<SortableListItemProps>;
export default SortableListItem;
