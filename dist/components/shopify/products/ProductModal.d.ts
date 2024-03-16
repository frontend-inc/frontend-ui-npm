import React from 'react';
import { ProductType } from 'frontend-shopify';
type ProductModalProps = {
    shopifyProduct: ProductType;
    enableQuantity?: boolean;
    open?: boolean;
    buttonText?: string;
    handleClose: () => void;
};
declare const ProductModal: React.FC<ProductModalProps>;
export default ProductModal;
