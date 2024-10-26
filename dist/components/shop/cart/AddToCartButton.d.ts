import React from 'react';
type AddToCartButtonProps = {
    size?: 'sm' | 'default' | 'lg';
    productId: string;
    fullWidth?: boolean;
    availableForSale?: boolean;
};
declare const AddToCartButton: (props: AddToCartButtonProps) => React.JSX.Element;
export default AddToCartButton;
