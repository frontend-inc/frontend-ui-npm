import React from 'react';
type ShopifyQuantitySelectorProps = {
    size?: 'sm' | 'md' | 'lg';
    quantity: number;
    handleAddQuantity: () => void;
    handleRemoveQuantity: () => void;
};
export default function ShopifyQuantitySelector(props: ShopifyQuantitySelectorProps): React.JSX.Element;
export {};
