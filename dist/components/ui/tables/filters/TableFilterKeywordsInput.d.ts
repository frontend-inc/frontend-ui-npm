import React from 'react';
import { SyntheticEventType } from '../../../../types';
type FilterKeywordProps = {
    label?: string;
    handleSearch: () => void;
    handleChange: (e: SyntheticEventType) => void;
    value: string;
};
declare const FilterKeywordsInput: React.FC<FilterKeywordProps>;
export default FilterKeywordsInput;
