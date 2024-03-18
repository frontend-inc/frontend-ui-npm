import React from 'react';
import { SearchFilterType, SearchFilterOptionType, PriceOptionType } from 'frontend-shopify';
type ProductFiltersListProps = {
    filters: SearchFilterType[];
    options: SearchFilterOptionType[];
    priceOptions: PriceOptionType[];
    handleFilter: (filter: SearchFilterType) => void;
    handleFilterArray: (filter: SearchFilterType) => void;
};
declare const ProductFiltersList: React.FC<ProductFiltersListProps>;
export default ProductFiltersList;
