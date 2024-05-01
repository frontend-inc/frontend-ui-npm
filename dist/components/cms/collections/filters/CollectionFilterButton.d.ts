import React from 'react';
import { FilterOptionType, SearchFilterOptionType } from '../../../..';
type CollectionFilterButtonProps = {
    filters?: FilterOptionType[];
    loading?: boolean;
    filterOptions?: SearchFilterOptionType[];
    disableFilterCount?: boolean;
    handleFilter: (filter: FilterOptionType) => void;
    handleClear: () => void;
};
declare const CollectionFilterButton: React.FC<CollectionFilterButtonProps>;
export default CollectionFilterButton;
