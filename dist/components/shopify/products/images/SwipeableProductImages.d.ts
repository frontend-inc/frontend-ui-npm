import React from 'react';
import { ProductType } from 'frontend-shopify';
type SwipeableProductImagesProps = {
    product: ProductType;
    height?: number;
    width?: number;
    handleClick?: () => void;
    objectFit?: 'contain' | 'cover';
    responsiveHeight?: boolean;
};
declare const SwipeableProductImages: React.FC<SwipeableProductImagesProps>;
export default SwipeableProductImages;
