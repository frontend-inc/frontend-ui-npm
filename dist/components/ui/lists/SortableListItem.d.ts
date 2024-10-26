import React from 'react';
type SortableListItemProps = {
    primary?: string | React.ReactNode;
    secondary?: string | React.ReactNode;
    isDragging?: boolean;
};
export default function SortableListItem({ primary, secondary, isDragging, }: SortableListItemProps): React.JSX.Element;
export {};
