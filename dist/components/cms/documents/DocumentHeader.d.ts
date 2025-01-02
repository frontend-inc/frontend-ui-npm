import React from 'react';
import { SortOptionType, SearchFilterOptionType } from '../../../types';
export type DocumentHeaderProps = {
    query: any;
    url: string;
    enableSearch?: boolean;
    enableFilters?: boolean;
    enableSorting?: boolean;
    filterOptions?: SearchFilterOptionType[];
    sortOptions?: SortOptionType[];
    enableCreate?: boolean;
    buttonText?: string;
    handleAdd?: () => void;
};
declare const DocumentHeader: React.FC<DocumentHeaderProps>;
export default DocumentHeader;
