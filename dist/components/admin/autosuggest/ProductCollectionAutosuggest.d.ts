import React from 'react';
import { QueryParamsType, OptionType } from '../../../types';
export type ProductCollectionAutosuggestProps = {
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
declare const ProductCollectionAutosuggest: React.FC<ProductCollectionAutosuggestProps>;
export default ProductCollectionAutosuggest;
