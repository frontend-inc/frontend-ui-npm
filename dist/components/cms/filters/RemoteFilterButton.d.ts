import React from 'react';
import { FilterOptionType } from '../../..';
import { FilterButtonProps } from './FilterButton';
type RemoteFilterButtonProps = FilterButtonProps & {
    url: string;
    filters?: FilterOptionType[];
    disableFilterCount?: boolean;
    handleFilter: (filter: FilterOptionType) => void;
    handleClear: () => void;
};
declare const RemoteFilterButton: React.FC<RemoteFilterButtonProps>;
export default RemoteFilterButton;
