import React from 'react';
import { QueryParamsType, OptionType } from '../../../types';
export type MetafieldAutosuggestProps = {
    value: any;
    name?: string;
    query?: QueryParamsType;
    label?: string;
    placeholder?: string;
    handleChange: any;
    variants?: string[];
    valueParam?: string;
    direction?: 'column' | 'row';
    defaultOptions?: OptionType[];
};
declare const MetafieldAutosuggest: React.FC<MetafieldAutosuggestProps>;
export default MetafieldAutosuggest;
