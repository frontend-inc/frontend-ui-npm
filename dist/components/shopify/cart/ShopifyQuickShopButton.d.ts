import React from 'react';
type ShopifyQuickShopButtonProps = {
    size?: 'sm' | 'default' | 'lg';
    color?: 'primary' | 'secondary';
    buttonText?: string;
    quickShopButtonText?: string;
    product?: any;
    enableQuantity?: boolean;
};
declare const ShopifyQuickShopButton: React.FC<ShopifyQuickShopButtonProps>;
export default ShopifyQuickShopButton;
