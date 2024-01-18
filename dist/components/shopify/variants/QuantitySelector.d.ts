import React from 'react';
type QuantitySelectorProps = {
    quantity: number;
    size?: 'small' | 'medium' | 'large';
    handleAddQuantity: () => void;
    handleRemoveQuantity: () => void;
};
declare const QuantitySelector: React.FC<QuantitySelectorProps>;
export default QuantitySelector;
