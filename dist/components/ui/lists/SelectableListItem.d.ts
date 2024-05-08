import React from 'react';
type SelectableListItemProps = {
    selected?: boolean;
    title: string;
    description?: string;
    icon: string;
    color?: string;
    enableBorder?: boolean;
    secondaryActions?: React.ReactNode;
    handleClick?: () => void;
    handleEdit?: null | ((item: any) => void);
    handleDelete?: null | ((item: any) => void);
};
declare const SelectableListItem: React.FC<SelectableListItemProps>;
export default SelectableListItem;
