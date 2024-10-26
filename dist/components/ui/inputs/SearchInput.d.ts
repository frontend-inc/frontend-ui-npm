import React from 'react';
import { SyntheticEventType } from '../../../types';
type SearchInputProps = {
    name?: string;
    label?: string;
    value: string;
    placeholder?: string;
    fullWidth?: boolean;
    handleChange: (e: SyntheticEventType) => void;
    handleSearch: (keywords: string) => void;
};
declare const SearchInput: React.FC<SearchInputProps>;
export default SearchInput;
