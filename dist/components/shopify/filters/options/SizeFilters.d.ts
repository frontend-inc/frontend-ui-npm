import React from 'react';
import { ProductCollectionFilter } from 'frontend-shopify';
type SizeFiltersProps = {
    filters: ProductCollectionFilter[];
    options: string[];
    handleClick: (value: string) => void;
};
declare const SizeFilters: React.FC<SizeFiltersProps>;
export default SizeFilters;
