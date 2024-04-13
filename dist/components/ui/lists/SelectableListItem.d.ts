import React from 'react';
type SelectableListItemProps = {
    selected?: boolean;
    title: string;
    description?: string;
    icon?: string;
    color?: string;
    handleClick?: () => void;
};
declare const SelectableListItem: React.FC<SelectableListItemProps>;
export default SelectableListItem;
