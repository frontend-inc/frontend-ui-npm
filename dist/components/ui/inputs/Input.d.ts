import React from 'react';
import { OptionType } from 'frontend-js';
type InputVariantType = 'array' | 'attachment' | 'autocomplete' | 'boolean' | 'checkboxGroup' | 'checkbox' | 'color' | 'date' | 'email' | 'error' | 'file' | 'image' | 'jsonArray' | 'noSpace' | 'numberRange' | 'phone' | 'priceRange' | 'radio' | 'search' | 'select' | 'shopify_products' | 'switch' | 'tabs' | 'text' | 'url';
export type InputProps = any & {
    variant: InputVariantType;
    errors?: any;
    value?: any;
    handleChange: (e: any) => void;
    label?: string;
    info?: string;
    placeholder?: string;
    options: OptionType[];
};
declare const Input: React.FC<InputProps>;
export default Input;
