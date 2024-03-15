import React from 'react';
import { ProductType } from 'frontend-shopify';
type ProductDetailsProps = {
    product?: ProductType;
    price?: number;
    compareAtPrice?: number;
    disableCompareAtPrice?: boolean;
    enableOkendoStarRating?: boolean;
};
declare const ProductDetails: React.FC<ProductDetailsProps>;
export default ProductDetails;
