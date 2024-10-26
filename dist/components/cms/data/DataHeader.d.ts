import React from 'react';
import { SortOptionType, SearchFilterOptionType } from '../../../types';
export type DataHeaderProps = {
    query: any;
    url: string;
    enableSearch?: boolean;
    enableFilters?: boolean;
    enableSorting?: boolean;
    filterOptions?: SearchFilterOptionType[];
    sortOptions?: SortOptionType[];
    enableCreate?: boolean;
    handleAdd?: () => void;
    component?: React.FC<any>;
    buttonText?: string;
    secondaryAction?: React.ReactNode;
    slots?: {
        search?: any;
    };
};
declare const DataHeader: React.FC<DataHeaderProps>;
export default DataHeader;
