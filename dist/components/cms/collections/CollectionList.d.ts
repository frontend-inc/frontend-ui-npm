import React from 'react';
import { SearchFilterOptionType, SortOptionType } from '../../../types';
export type CollectionListProps = {
    url?: string;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    enableSearch?: boolean;
    enableFilters?: boolean;
    enableSorting?: boolean;
    filterOptions?: SearchFilterOptionType[];
    sortOptions?: SortOptionType[];
    loadMore?: boolean;
    list: React.FC<any>;
    component?: React.FC<any>;
    header?: React.FC<any>;
    empty?: React.FC<any>;
    slots?: {
        header?: any;
        list?: any;
        empty?: any;
        item?: any;
    };
    query?: any;
    resource: any;
};
declare const CollectionList: React.FC<CollectionListProps>;
export default CollectionList;
