import React from 'react';
import { Product } from 'webstudio-shopify';
type SwipeableProductImagesProps = {
    product: Product;
    height?: number;
    width?: number;
    handleClick?: () => void;
    objectFit?: 'contain' | 'cover';
    responsiveHeight?: boolean;
};
declare const SwipeableProductImages: React.FC<SwipeableProductImagesProps>;
export default SwipeableProductImages;
