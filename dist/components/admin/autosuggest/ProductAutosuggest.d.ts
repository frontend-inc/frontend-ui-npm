import React from 'react';
import { QueryParamsType, OptionType } from '../../../types';
export type ProductAutosuggestProps = {
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
declare const ProductAutosuggest: React.FC<ProductAutosuggestProps>;
export default ProductAutosuggest;
