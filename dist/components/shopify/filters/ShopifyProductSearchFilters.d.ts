import React from 'react';
import { SearchFilterType, SearchFilterOptionType, PriceOptionType } from 'frontend-shopify';
type ShopifyProductSearchFiltersProps = {
    filters: SearchFilterType[];
    options?: SearchFilterOptionType[];
    priceOptions?: PriceOptionType[];
    handleFilter: (filter: SearchFilterType) => void;
    handleFilterArray: (filter: SearchFilterType) => void;
};
declare const ShopifyProductSearchFilters: React.FC<ShopifyProductSearchFiltersProps>;
export default ShopifyProductSearchFilters;
