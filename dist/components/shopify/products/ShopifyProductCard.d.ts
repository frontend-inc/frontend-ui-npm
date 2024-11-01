import React from 'react';
import { ShopifyProductType } from 'frontend-shopify';
type ShopifyProductCardProps = {
    product: ShopifyProductType;
    handleClick?: () => void;
    buttonText?: string;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuantity?: boolean;
    enableQuickShop?: boolean;
    disableBorder?: boolean;
    buttonVariant?: 'default' | 'secondary' | 'ghost';
};
export default function ShopifyProductCard({ product, handleClick, enableBorder, enableAddToCart, enableQuantity, enableQuickShop, buttonVariant, buttonText, disableBorder, }: ShopifyProductCardProps): React.JSX.Element;
export {};
