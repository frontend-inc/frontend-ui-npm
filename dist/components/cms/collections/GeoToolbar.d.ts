import React from 'react';
import { SortOptionType, SearchFilterOptionType } from '../../../types';
export type CollectionToolbarProps = {
    query: any;
    url: string;
    enableSearch?: boolean;
    enableFilters?: boolean;
    enableSorting?: boolean;
    filterOptions?: SearchFilterOptionType[];
    sortOptions?: SortOptionType[];
    enableCreate?: boolean;
    handleAdd?: () => void;
};
declare const GeoToolbar: React.FC<CollectionToolbarProps>;
export default GeoToolbar;
