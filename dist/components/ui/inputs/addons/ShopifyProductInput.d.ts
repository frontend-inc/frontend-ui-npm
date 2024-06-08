import React from 'react';
import { SyntheticEventType } from '../../../../types';
type AutosuggestProps = {
    value?: any;
    name?: string;
    label?: string;
    placeholder?: string;
    handleChange: (e: SyntheticEventType) => void;
    direction?: 'row' | 'column';
};
declare const ShopifyProductInput: React.FC<AutosuggestProps>;
export default ShopifyProductInput;
