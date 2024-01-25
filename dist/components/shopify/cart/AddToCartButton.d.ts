import React from 'react';
import { Product, ProductVariant } from 'frontend-shopify';
type AddToCartButtonProps = {
    product: Product;
    variant: ProductVariant;
    buttonVariant?: 'contained' | 'outlined' | 'text';
    label?: string;
    enableQuantity?: boolean;
    enableSubscription?: boolean;
    enableFavorites?: boolean;
    size?: 'small' | 'medium' | 'large';
};
declare const AddToCartButton: React.FC<AddToCartButtonProps>;
export default AddToCartButton;
