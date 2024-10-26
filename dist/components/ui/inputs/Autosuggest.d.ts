import React from 'react';
import { OptionType, SyntheticEventType } from 'frontend-js';
type AutosuggestProps = {
    errors?: any;
    label?: string;
    info?: string;
    name: string;
    value: string | number;
    placeholder?: string;
    handleChange: (ev: SyntheticEventType) => void;
    handleInputChange?: (value: string) => void;
    options: OptionType[];
    enableClear?: boolean;
};
declare const Autosuggest: React.FC<AutosuggestProps>;
export default Autosuggest;
