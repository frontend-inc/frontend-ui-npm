import React from 'react';
import { Product } from 'webstudio-shopify';
type ProductDetailsProps = {
    product?: Product;
    price?: number;
    compareAtPrice?: number;
    disableCompareAtPrice?: boolean;
    enableOkendoStarRating?: boolean;
};
declare const ProductDetails: React.FC<ProductDetailsProps>;
export default ProductDetails;
