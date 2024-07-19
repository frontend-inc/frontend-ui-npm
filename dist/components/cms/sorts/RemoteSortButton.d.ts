import React from 'react';
import { SortOptionType } from '../../..';
type RemoteSortButtonProps = {
    url: string;
    sortBy: string;
    sortDirection: 'asc' | 'desc';
    handleSortBy: (field: SortOptionType) => void;
    handleSortDirection: (sortDirection: 'asc' | 'desc') => void;
};
declare const RemoteSortButton: React.FC<RemoteSortButtonProps>;
export default RemoteSortButton;
