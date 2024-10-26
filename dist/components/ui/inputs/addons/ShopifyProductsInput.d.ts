import React from 'react';
type AutosuggestProps = {
    value?: string[];
    name?: string;
    label?: string;
    placeholder?: string;
    handleChange: (e: {
        target: {
            name: string;
            value: string[];
        };
    }) => void;
    direction?: 'row' | 'column';
    height?: number;
    width?: number;
};
declare const ShopifyProductsInput: React.FC<AutosuggestProps>;
export default ShopifyProductsInput;
