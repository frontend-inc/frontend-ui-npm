import React from 'react';
import { SyntheticEventType, ProductType } from '../../../types';
type AutosuggestProps = {
    value?: ProductType[];
    name?: string;
    label?: string;
    placeholder?: string;
    handleChange: (e: SyntheticEventType) => void;
    handleAddProducts?: (productIds: string[] | number[]) => void;
    handleRemoveProducts?: (productIds: string[] | number[]) => void;
};
declare const ProductsInput: React.FC<AutosuggestProps>;
export default ProductsInput;
