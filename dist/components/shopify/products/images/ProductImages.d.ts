import React from 'react';
import { ProductType, ImageType } from 'frontend-shopify';
type ProductImagesProps = {
    product: ProductType;
    image: ImageType;
    images: ImageType[];
    handleClick: (img: ImageType) => void;
};
declare const ProductImages: React.FC<ProductImagesProps>;
export default ProductImages;
