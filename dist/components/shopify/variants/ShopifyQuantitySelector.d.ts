import React from 'react';
type ShopifyQuantitySelectorProps = {
    quantity: number;
    size?: 'small' | 'medium' | 'large';
    handleAddQuantity: () => void;
    handleRemoveQuantity: () => void;
};
declare const ShopifyQuantitySelector: React.FC<ShopifyQuantitySelectorProps>;
export default ShopifyQuantitySelector;
