import React from 'react';
import { ShopifyProductType } from 'frontend-shopify';
type ShopifyProductModalProps = {
    shopifyProduct: ShopifyProductType;
    enableQuantity?: boolean;
    open?: boolean;
    buttonText?: string;
    handleClose: () => void;
};
declare const ShopifyProductModal: React.FC<ShopifyProductModalProps>;
export default ShopifyProductModal;
