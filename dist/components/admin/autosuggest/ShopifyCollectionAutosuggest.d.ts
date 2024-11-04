import React from 'react';
import { SyntheticEventType } from '../../../types';
type ShopifyAutosuggestProps = {
    value?: any;
    name?: string;
    label?: string;
    placeholder?: string;
    handleChange: (e: SyntheticEventType) => void;
    enableDelete?: boolean;
    direction?: 'row' | 'column';
};
declare const ShopifyCollectionAutosuggest: React.FC<ShopifyAutosuggestProps>;
export default ShopifyCollectionAutosuggest;
