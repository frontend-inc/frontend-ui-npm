import React from 'react';
import { ImageType } from 'frontend-shopify';
type ProductImageSliderProps = {
    image: ImageType;
    images: ImageType[];
    handleClick: (img: ImageType) => void;
    height?: number;
    width?: number;
    thumbnailSize?: number;
};
declare const ProductImageSlider: React.FC<ProductImageSliderProps>;
export default ProductImageSlider;
