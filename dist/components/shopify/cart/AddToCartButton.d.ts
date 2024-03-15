import React from 'react';
import { ProductType, ProductVariantType } from 'frontend-shopify';
type AddToCartButtonProps = {
    product: ProductType;
    variant: ProductVariantType;
    buttonVariant?: 'contained' | 'outlined' | 'text';
    label?: string;
    enableQuantity?: boolean;
    enableSubscription?: boolean;
    enableFavorites?: boolean;
    size?: 'small' | 'medium' | 'large';
};
declare const AddToCartButton: React.FC<AddToCartButtonProps>;
export default AddToCartButton;
