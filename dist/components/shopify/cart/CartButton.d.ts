import React from 'react';
type CartButtonProps = {
    icon?: string;
    variant?: 'desktop' | 'mobile';
    editing?: boolean;
    label?: string;
};
declare const CartButton: React.FC<CartButtonProps>;
export default CartButton;
