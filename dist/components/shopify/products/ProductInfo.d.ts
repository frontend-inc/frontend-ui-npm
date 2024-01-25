import React from 'react';
import { Product } from 'frontend-shopify';
type ProductDetailsProps = {
    product?: Product;
    price?: number;
    compareAtPrice?: number;
    disableCompareAtPrice?: boolean;
    enableOkendoStarRating?: boolean;
};
declare const ProductDetails: React.FC<ProductDetailsProps>;
export default ProductDetails;
