import React from 'react';
import { QueryParamsType, OptionType } from '../../../types';
type FieldAutosuggestProps = {
    value: any;
    name?: string;
    query?: QueryParamsType;
    collectionId: string | number;
    label?: string;
    placeholder?: string;
    handleChange: any;
    variants?: string[];
    valueParam?: string;
    direction?: 'column' | 'row';
    defaultOptions?: OptionType[];
};
declare const FieldAutosuggest: React.FC<FieldAutosuggestProps>;
export default FieldAutosuggest;
