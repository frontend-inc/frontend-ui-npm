import React from 'react';
import { SyntheticEventType } from '../../../../types';
type AutosuggestProps = {
    value?: any;
    name?: string;
    label?: string;
    placeholder?: string;
    handleChange: (e: SyntheticEventType) => void;
    direction?: 'row' | 'column';
    height?: number;
    width?: number;
};
declare const ShopifyProductsInput: React.FC<AutosuggestProps>;
export default ShopifyProductsInput;
