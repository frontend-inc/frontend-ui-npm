import React from 'react';
import { SortOptionType, SearchFilterOptionType } from '../../../types';
export type ToolbarProps = {
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
declare const ListToolbar: React.FC<ToolbarProps>;
export default ListToolbar;
