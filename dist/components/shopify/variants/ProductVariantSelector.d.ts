import React from 'react';
import { ProductType } from 'frontend-shopify';
type ProductVariantSelectorProps = {
    product: ProductType;
    selectedOptions: any;
    handleOptionChange: any;
};
declare const ProductVariantSelector: React.FC<ProductVariantSelectorProps>;
export default ProductVariantSelector;
