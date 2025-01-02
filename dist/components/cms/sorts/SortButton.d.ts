import React from 'react';
import { SortOptionType } from '../../../types';
type SortButtonProps = {
    loading?: boolean;
    sortOptions: SortOptionType[];
    sortBy: string;
    sortDirection: 'asc' | 'desc';
    handleSortBy: (sortBy: string) => void;
    handleSortDirection: (sortDirection: 'asc' | 'desc') => void;
};
export default function SortButton(props: SortButtonProps): React.JSX.Element;
export {};
