import React from 'react';
import { SyntheticEventType } from '../../../types';
type FilterMenuProps = {
    open: boolean;
    anchorEl: HTMLElement | null;
    fields: any;
    query: any;
    handleChange: (ev: SyntheticEventType) => void;
    handleClearFilters: () => void;
    handleSearch: () => void;
};
declare const FilterMenu: React.FC<FilterMenuProps>;
export default FilterMenu;
