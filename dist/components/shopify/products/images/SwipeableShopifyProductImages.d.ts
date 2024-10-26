import React from 'react';
import { ShopifyProductType } from 'frontend-shopify';
type SwipeableShopifyProductImagesProps = {
    product: ShopifyProductType;
    height?: number;
    width?: number;
    handleClick?: () => void;
    objectFit?: 'contain' | 'cover';
    responsiveHeight?: boolean;
    disableBorderRadius?: boolean;
};
export default function SwipeableShopifyProductImages({ product, height, handleClick, disableBorderRadius, }: SwipeableShopifyProductImagesProps): React.JSX.Element;
export {};
