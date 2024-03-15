import React from 'react';
import { SearchFilterType } from 'frontend-shopify';
type ProductFiltersListProps = {
    filters: SearchFilterType[];
    options: SearchFilterType[];
    handleFilter: (filter: SearchFilterType) => void;
    handleFilterArray: (filter: SearchFilterType) => void;
};
declare const ProductFiltersList: React.FC<ProductFiltersListProps>;
export default ProductFiltersList;
