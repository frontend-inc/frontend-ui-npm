import React from 'react';
import { SortOptionType, SearchFilterOptionType } from '../../../types';
export type ProductHeaderProps = {
    query: any;
    url: string;
    enableSearch?: boolean;
    enableFilters?: boolean;
    enableSorting?: boolean;
    filterOptions?: SearchFilterOptionType[];
    sortOptions?: SortOptionType[];
};
declare const ProductHeader: React.FC<ProductHeaderProps>;
export default ProductHeader;
