import React from 'react';
import { ProductDetailsProps } from './ProductDetails';
import { FormFieldType } from '../../../types';
export type ProductContainerProps = ProductDetailsProps & {
    url: string;
    foreignUrl?: string;
    fields: FormFieldType[];
};
declare const ProductContainer: React.FC<ProductContainerProps>;
export default ProductContainer;
