import React from 'react';
type ShopifyOptionButtonProps = {
    value: string;
    name: string;
    active: boolean;
    handleClick: (name: string, value: string) => void;
    children: React.ReactNode;
    width?: number;
    justifyContent?: string;
};
declare const ShopifyOptionButton: React.FC<ShopifyOptionButtonProps>;
export default ShopifyOptionButton;
