import React from 'react';
import { ProductCollectionFilter } from 'frontend-shopify';
type MaterialFiltersProps = {
    filters: ProductCollectionFilter[];
    options: string[];
    handleClick: (value: string) => void;
};
declare const MaterialFilters: React.FC<MaterialFiltersProps>;
export default MaterialFilters;
