import React from 'react';
type AddToCartButtonProps = {
    size?: 'sm' | 'default' | 'lg';
    productId: string | number;
    fullWidth?: boolean;
    buttonText?: string;
    availableForSale?: boolean;
    price?: string;
    className?: string;
};
declare const AddToCartButton: (props: AddToCartButtonProps) => React.JSX.Element;
export default AddToCartButton;
