import React from 'react';
import { SearchFilterOptionType, SearchFilterType } from 'frontend-shopify';
type ShopifyCheckboxFilterListProps = {
    filters: SearchFilterType[];
    option: SearchFilterOptionType;
    handleClick: (filter: SearchFilterType) => void;
};
declare const ShopifyCheckboxFilterList: React.FC<ShopifyCheckboxFilterListProps>;
export default ShopifyCheckboxFilterList;
