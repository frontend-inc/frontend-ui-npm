import React from 'react';
type ProductVariantOptionsProps = {
    name: string;
    values: string[];
    selected: string;
    handleChange: (name: string, value: string) => void;
};
declare const ProductVariantOptions: React.FC<ProductVariantOptionsProps>;
export default ProductVariantOptions;
