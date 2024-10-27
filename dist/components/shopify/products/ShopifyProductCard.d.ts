import React from 'react';
import { ShopifyProductType } from 'frontend-shopify';
type ShopifyProductCardProps = {
    product: ShopifyProductType;
    handleClick?: () => void;
    buttonText?: string;
    height?: number;
    width?: number;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuantity?: boolean;
    enableQuickShop?: boolean;
    enableOkendoStarRating?: boolean;
    disableBorder?: boolean;
    buttonVariant?: 'default' | 'secondary' | 'ghost';
};
export default function ShopifyProductCard({ product, handleClick, height, enableBorder, enableAddToCart, enableQuantity, enableQuickShop, enableOkendoStarRating, buttonVariant, buttonText, disableBorder, }: ShopifyProductCardProps): React.JSX.Element;
export {};
