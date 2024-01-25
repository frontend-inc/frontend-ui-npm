import React from 'react';
import { Product, Image } from 'frontend-shopify';
type ProductImagesProps = {
    product: Product;
    image: Image;
    images: Image[];
    handleClick: (img: Image) => void;
};
declare const ProductImages: React.FC<ProductImagesProps>;
export default ProductImages;
