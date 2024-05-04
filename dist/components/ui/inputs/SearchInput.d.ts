import React from 'react';
import { SyntheticEventType } from '../../../types';
type SearchInputProps = {
    name?: string;
    label?: string;
    value: string;
    placeholder?: string;
    handleChange: (e: SyntheticEventType) => void;
    handleSearch?: (keywords: string) => void;
    styles?: any;
};
declare const SearchInput: React.FC<SearchInputProps>;
export default SearchInput;
