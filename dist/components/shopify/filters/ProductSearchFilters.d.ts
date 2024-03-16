import React from 'react';
import { SearchFilterType, SearchFilterOptionType } from 'frontend-shopify';
type ProductFilterButtonProps = {
    filters: SearchFilterType[];
    options: SearchFilterOptionType[];
    handleFilter: (filter: SearchFilterType) => void;
    handleFilterArray: (filter: SearchFilterType) => void;
};
declare const ProductSearchFilters: React.FC<ProductFilterButtonProps>;
export default ProductSearchFilters;
