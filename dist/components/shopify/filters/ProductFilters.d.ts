import React from 'react';
import { SearchFilterType } from 'frontend-shopify';
type ProductFilterButtonProps = {
    filters: SearchFilterType[];
    options: SearchFilterType[];
    handleFilter: (filter: SearchFilterType) => void;
    handleFilterArray: (filter: SearchFilterType) => void;
};
declare const ProductFilterButton: React.FC<ProductFilterButtonProps>;
export default ProductFilterButton;
