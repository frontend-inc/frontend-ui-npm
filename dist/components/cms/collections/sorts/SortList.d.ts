import React from 'react';
import { SortOptionType } from '../../../../types';
type SortListProps = {
    sortOptions: SortOptionType[];
    sortBy: string;
    sortDirection: 'asc' | 'desc';
    handleSortBy: (sortBy: string) => void;
    handleSortDirection: (sortDirection: 'asc' | 'desc') => void;
};
declare const SortList: React.FC<SortListProps>;
export default SortList;
