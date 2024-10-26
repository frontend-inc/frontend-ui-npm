import React from 'react';
type ShopifyQuickShopButtonProps = {
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary';
    buttonText?: string;
    quickShopButtonText?: string;
    product?: any;
    enableQuantity?: boolean;
};
declare const ShopifyQuickShopButton: React.FC<ShopifyQuickShopButtonProps>;
export default ShopifyQuickShopButton;
