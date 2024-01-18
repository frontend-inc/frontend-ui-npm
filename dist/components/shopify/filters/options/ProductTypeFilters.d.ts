import React from 'react';
import { ProductCollectionFilter } from '@webstudio/shopify';
type ProductTypeFiltersProps = {
    filters: ProductCollectionFilter[];
    options: string[];
    handleClick: (value: string) => void;
};
declare const ProductTypeFilters: React.FC<ProductTypeFiltersProps>;
export default ProductTypeFilters;
