import React from 'react';
import { ShopifyProductType } from 'frontend-shopify';
type ShopifyProductCardProps = {
    product: ShopifyProductType;
    handleClick?: () => void;
    buttonText?: string;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuantity?: boolean;
    disableBorder?: boolean;
    buttonVariant?: 'default' | 'secondary' | 'ghost';
};
export default function ShopifyProductCard({ product, handleClick, enableBorder, enableAddToCart, enableQuantity, buttonVariant, buttonText, disableBorder, }: ShopifyProductCardProps): React.JSX.Element;
export {};
