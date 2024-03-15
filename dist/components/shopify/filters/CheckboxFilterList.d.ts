import React from 'react';
import { SearchFilterType } from 'frontend-shopify';
type CheckboxFilterListProps = {
    filters: SearchFilterType[];
    options: SearchFilterType[];
    handleClick: (filter: SearchFilterType) => void;
};
declare const CheckboxFilterList: React.FC<CheckboxFilterListProps>;
export default CheckboxFilterList;
