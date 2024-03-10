import React from 'react';
import { OptionType } from '../../../../types';
type FilterListItemProps = {
    label?: string;
    option: OptionType;
    values?: any;
    handleClick: () => void;
};
declare const FilterListItem: React.FC<FilterListItemProps>;
export default FilterListItem;
