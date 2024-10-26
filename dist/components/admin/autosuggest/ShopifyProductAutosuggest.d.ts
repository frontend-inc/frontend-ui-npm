import React from 'react';
import { SyntheticEventType } from '../../../types';
type AutosuggestProps = {
    value?: any;
    name?: string;
    label?: string;
    placeholder?: string;
    handleChange: (e: SyntheticEventType) => void;
    enableDelete?: boolean;
};
declare const ShopifyProductAutosuggest: React.FC<AutosuggestProps>;
export default ShopifyProductAutosuggest;
