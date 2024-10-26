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
export default function SortButton({ sortOptions, sortBy, sortDirection, handleSortBy, handleSortDirection, }: SortButtonProps): React.JSX.Element;
export {};
