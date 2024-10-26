import React from 'react';
import { SearchFilterType, SearchFilterOptionType, PriceOptionType } from 'frontend-shopify';
type ShopifyProductFilterButtonProps = {
    filters: SearchFilterType[];
    options: SearchFilterOptionType[];
    priceOptions: PriceOptionType[];
    handleFilter: (filter: SearchFilterType) => void;
    handleFilterArray: (filter: SearchFilterType) => void;
};
declare const ShopifyProductFilterButton: React.FC<ShopifyProductFilterButtonProps>;
export default ShopifyProductFilterButton;
