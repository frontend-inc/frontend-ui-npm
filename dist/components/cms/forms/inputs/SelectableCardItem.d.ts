import React from 'react';
type SelectableCardItemProps = {
    title: string;
    description: string;
    image: string;
    handleClick: () => void;
    selected: boolean;
};
declare const SelectableCardItem: React.FC<SelectableCardItemProps>;
export default SelectableCardItem;
