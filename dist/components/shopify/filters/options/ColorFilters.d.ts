import React from 'react';
import { ProductCollectionFilter } from 'frontend-shopify';
type ColorFiltersProps = {
    filters: ProductCollectionFilter[];
    options: string[];
    handleClick: (value: string | number) => void;
};
declare const ColorFilters: React.FC<ColorFiltersProps>;
export default ColorFilters;
