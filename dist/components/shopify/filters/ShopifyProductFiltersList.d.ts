import React from 'react';
import { SearchFilterType, SearchFilterOptionType, PriceOptionType } from 'frontend-shopify';
type ShopifyProductFiltersListProps = {
    filters: SearchFilterType[];
    options: SearchFilterOptionType[];
    priceOptions: PriceOptionType[];
    handleFilter: (filter: SearchFilterType) => void;
    handleFilterArray: (filter: SearchFilterType) => void;
};
declare const ShopifyProductFiltersList: React.FC<ShopifyProductFiltersListProps>;
export default ShopifyProductFiltersList;
