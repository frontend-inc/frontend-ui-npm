import React from 'react';
import { ShopifyImageType } from 'frontend-shopify';
type ShopifyProductImageSliderProps = {
    disableZoom?: boolean;
    image: ShopifyImageType;
    images: ShopifyImageType[];
    handleClick: (img: ShopifyImageType) => void;
};
declare const ShopifyProductImageSlider: React.FC<ShopifyProductImageSliderProps>;
export default ShopifyProductImageSlider;
