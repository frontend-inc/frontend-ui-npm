import React from 'react';
import { ProductType } from '../../../../types';
type ProductsInputProps = {
    document: any;
    handleUpdateProductPositions: (sorted: number[]) => void;
    handleAddProducts: (products: ProductType[]) => void;
    handleRemoveProducts: (products: ProductType[]) => void;
};
declare const ProductsInput: React.FC<ProductsInputProps>;
export default ProductsInput;
