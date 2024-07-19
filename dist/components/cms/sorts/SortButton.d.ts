import React from 'react';
import { SortOptionType } from '../../../types';
type SortButtonProps = {
    loading?: boolean;
    sortOptions: SortOptionType[];
    sortBy: string;
    sortDirection: 'asc' | 'desc';
    handleSortBy: (field: SortOptionType) => void;
    handleSortDirection: (sortDirection: 'asc' | 'desc') => void;
};
declare const SortButton: React.FC<SortButtonProps>;
export default SortButton;
