import React from 'react';
import { SortOptionType, SearchFilterOptionType } from '../../../types';
export type DataToolbarProps = {
    query: any;
    url: string;
    enableSearch?: boolean;
    enableFilters?: boolean;
    enableSorting?: boolean;
    enableGeoSearch?: boolean;
    filterOptions?: SearchFilterOptionType[];
    sortOptions?: SortOptionType[];
    enableCreate?: boolean;
    handleAdd?: () => void;
};
declare const DataToolbar: React.FC<DataToolbarProps>;
export default DataToolbar;
