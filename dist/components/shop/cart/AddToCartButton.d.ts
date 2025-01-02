import React from 'react';
type AddToCartButtonProps = {
    size?: 'sm' | 'md' | 'lg';
    productId: string | number;
    fullWidth?: boolean;
    buttonText?: string;
    availableForSale?: boolean;
    className?: string;
};
declare const AddToCartButton: (props: AddToCartButtonProps) => React.JSX.Element;
export default AddToCartButton;
