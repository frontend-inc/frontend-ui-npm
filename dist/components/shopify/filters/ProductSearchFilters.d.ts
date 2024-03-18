import React from 'react';
import { SearchFilterType, SearchFilterOptionType, PriceOptionType } from 'frontend-shopify';
type ProductFilterButtonProps = {
    filters: SearchFilterType[];
    options?: SearchFilterOptionType[];
    priceOptions?: PriceOptionType[];
    handleFilter: (filter: SearchFilterType) => void;
    handleFilterArray: (filter: SearchFilterType) => void;
};
declare const ProductSearchFilters: React.FC<ProductFilterButtonProps>;
export default ProductSearchFilters;
