import React from 'react';
import { SearchFilterType, SearchFilterOptionType } from 'frontend-shopify';
type ProductFiltersListProps = {
    filters: SearchFilterType[];
    options: SearchFilterOptionType[];
    handleFilter: (filter: SearchFilterType) => void;
    handleFilterArray: (filter: SearchFilterType) => void;
};
declare const ProductFiltersList: React.FC<ProductFiltersListProps>;
export default ProductFiltersList;
