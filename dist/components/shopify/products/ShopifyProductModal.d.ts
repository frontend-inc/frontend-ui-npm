import React from 'react';
type ShopifyProductModalProps = {
    shopifyProduct: string;
    enableQuantity?: boolean;
    open?: boolean;
    buttonText?: string;
    handleClose: () => void;
};
declare const ShopifyProductModal: React.FC<ShopifyProductModalProps>;
export default ShopifyProductModal;
