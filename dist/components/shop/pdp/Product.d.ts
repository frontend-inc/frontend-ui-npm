import React from 'react';
import { ProductDetailsProps } from './ProductDetails';
import { FormFieldType } from '../../../types';
export type ProductProps = ProductDetailsProps & {
    url?: string;
    foreignUrl?: string;
    fields: FormFieldType[];
};
declare const Product: React.FC<ProductProps>;
export default Product;
