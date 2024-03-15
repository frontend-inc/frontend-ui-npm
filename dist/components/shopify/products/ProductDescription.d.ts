import React from 'react';
import { ProductType } from 'frontend-shopify';
type ProductDescriptionProps = {
    product?: ProductType;
    color?: string;
};
declare const ProductDescription: React.FC<ProductDescriptionProps>;
export default ProductDescription;
