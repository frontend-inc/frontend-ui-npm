import React from 'react';
type AddToCartButtonProps = {
    size?: 'small' | 'medium' | 'large';
    productId: string;
    availableForSale?: boolean;
};
declare const AddToCartButton: (props: AddToCartButtonProps) => React.JSX.Element;
export default AddToCartButton;
