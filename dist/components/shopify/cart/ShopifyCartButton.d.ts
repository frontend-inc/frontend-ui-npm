import React from 'react';
type ShopifyCartButtonProps = {
    icon?: string;
    variant?: 'icon' | 'button';
    editing?: boolean;
    label?: string;
};
declare const ShopifyCartButton: React.FC<ShopifyCartButtonProps>;
export default ShopifyCartButton;
