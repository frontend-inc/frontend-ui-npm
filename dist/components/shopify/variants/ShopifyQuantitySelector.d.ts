import React from 'react';
type ShopifyQuantitySelectorProps = {
    quantity: number;
    handleAddQuantity: () => void;
    handleRemoveQuantity: () => void;
};
export default function ShopifyQuantitySelector({ quantity, handleAddQuantity, handleRemoveQuantity, }: ShopifyQuantitySelectorProps): React.JSX.Element;
export {};
