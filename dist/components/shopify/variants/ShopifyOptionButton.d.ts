import React from 'react';
type ShopifyOptionButtonProps = {
    value: string;
    name: string;
    active: boolean;
    handleClick: any;
    children: any;
    width?: number;
    justifyContent?: string;
};
declare const ShopifyOptionButton: React.FC<ShopifyOptionButtonProps>;
export default ShopifyOptionButton;
