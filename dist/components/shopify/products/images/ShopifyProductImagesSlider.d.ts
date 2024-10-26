import React from 'react';
import { ShopifyImageType } from 'frontend-shopify';
type ShopifyProductImageSliderProps = {
    image: ShopifyImageType;
    images: ShopifyImageType[];
    handleClick: (img: ShopifyImageType) => void;
    height?: number;
    width?: number;
    thumbnailSize?: number;
};
declare const ShopifyProductImageSlider: React.FC<ShopifyProductImageSliderProps>;
export default ShopifyProductImageSlider;
