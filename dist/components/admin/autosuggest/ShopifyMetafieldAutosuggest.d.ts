import React from 'react';
import { QueryParamsType, OptionType } from '../../../types';
type ShopifyMetafieldAutosuggestProps = {
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
declare const ShopifyMetafieldAutosuggest: React.FC<ShopifyMetafieldAutosuggestProps>;
export default ShopifyMetafieldAutosuggest;
