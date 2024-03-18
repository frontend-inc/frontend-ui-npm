import React from 'react';
import { FilterOptionType, SearchFilterOptionType } from '../../../../types';
type CollectionFilterListInputProps = {
    filters: FilterOptionType[];
    filterOption: SearchFilterOptionType;
    handleFilter: (filter: FilterOptionType) => void;
};
declare const CollectionFilterListInput: React.FC<CollectionFilterListInputProps>;
export default CollectionFilterListInput;
