import React from 'react';
import { SortOptionType, SearchFilterOptionType } from '../../../types';
export type ProductHeaderProps = {
    query: any;
    url: string;
    enableSearch?: boolean;
    enableFilters?: boolean;
    enableSorting?: boolean;
    enableGeoSearch?: boolean;
    filterOptions?: SearchFilterOptionType[];
    sortOptions?: SortOptionType[];
    enableCreate?: boolean;
    buttonText?: string;
    handleAdd?: () => void;
};
declare const ProductHeader: React.FC<ProductHeaderProps>;
export default ProductHeader;
