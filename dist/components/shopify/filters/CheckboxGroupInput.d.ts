import React from 'react';
import { SearchFilterOptionType, SearchFilterType } from 'frontend-shopify';
type CheckboxFilterListProps = {
    filters: SearchFilterType[];
    option: SearchFilterOptionType;
    handleClick: (filter: SearchFilterType) => void;
};
declare const CheckboxFilterList: React.FC<CheckboxFilterListProps>;
export default CheckboxFilterList;
