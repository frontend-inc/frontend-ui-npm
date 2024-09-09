import React from 'react';
import { ShopifyProductType, ShopifyImageType } from 'frontend-shopify';
type ShopifyProductImagesProps = {
    product: ShopifyProductType;
    image: ShopifyImageType;
    images: ShopifyImageType[];
    handleClick: (img: ShopifyImageType) => void;
};
declare const ShopifyProductImages: React.FC<ShopifyProductImagesProps>;
export default ShopifyProductImages;
