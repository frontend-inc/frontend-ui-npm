import React from 'react';
import { SortOptionType, SearchFilterOptionType } from '../../../types';
export type CollectionToolbarProps = {
    query: any;
    url: string;
    filterUser: boolean;
    filterTeam: boolean;
    perPage: number;
    enableSearch?: boolean;
    filterOptions?: SearchFilterOptionType[];
    sortOptions?: SortOptionType[];
    enableCreate?: boolean;
    handleAdd?: () => void;
};
declare const CollectionToolbar: React.FC<CollectionToolbarProps>;
export default CollectionToolbar;
