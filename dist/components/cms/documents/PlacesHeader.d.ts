import React from 'react';
import { SortOptionType, SearchFilterOptionType } from '../../../types';
export type GeoHeaderProps = {
    query: any;
    url: string;
    enableSearch?: boolean;
    enableFilters?: boolean;
    enableSorting?: boolean;
    filterOptions?: SearchFilterOptionType[];
    sortOptions?: SortOptionType[];
};
declare const GeoHeader: React.FC<GeoHeaderProps>;
export default GeoHeader;
