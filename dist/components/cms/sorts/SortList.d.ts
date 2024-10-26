import React from 'react';
import { SortOptionType } from '../../../types';
type SortListProps = {
    sortOptions: SortOptionType[];
    sortBy: string;
    sortDirection: 'asc' | 'desc';
    handleSortBy: (field: SortOptionType) => void;
    handleSortDirection: (sortDirection: 'asc' | 'desc') => void;
};
export default function SortList({ sortOptions, sortBy, sortDirection, handleSortBy, handleSortDirection, }: SortListProps): React.JSX.Element;
export {};
