import React from 'react';
import { ProductType } from 'frontend-shopify';
type ColorVariantsOptionsProps = {
    product: ProductType;
    name: string;
    values: any;
    selected: string;
    handleChange: any;
    styles?: any;
};
declare const ColorVariantsOptions: React.FC<ColorVariantsOptionsProps>;
export default ColorVariantsOptions;
