import React from 'react';
import { SyntheticEventType } from '../../../../types';
type FilterButtonProps = {
    loading: boolean;
    query: any;
    fields: any[];
    badgeCount?: number;
    handleChange: (ev: SyntheticEventType) => void;
    handleSearch: (query: any) => void;
    handleClear: () => void;
};
declare const FilterButtonInput: React.FC<FilterButtonProps>;
export default FilterButtonInput;
