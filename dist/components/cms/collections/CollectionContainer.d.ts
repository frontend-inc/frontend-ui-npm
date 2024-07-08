import React from 'react';
import { DisplayFieldType, FormFieldType, SearchFilterOptionType, SortOptionType } from '../../../types';
export type CollectionContainerProps = {
    resource?: any;
    url: string;
    query?: any;
    filterUser?: boolean;
    filterTeam?: boolean;
    fields?: FormFieldType[];
    displayFields?: DisplayFieldType[];
    filterOptions?: SearchFilterOptionType[];
    sortOptions?: SortOptionType[];
    perPage?: number;
    enableSearch?: boolean;
    enableCreate?: boolean;
    children: React.ReactNode;
};
declare const CollectionContainer: React.FC<CollectionContainerProps>;
export default CollectionContainer;
