import React from 'react';
import { MetafieldIdentifierType, ProductType } from 'frontend-shopify';
export type ProductDetailsProps = {
    shopifyProduct: ProductType;
    buttonText?: string;
    metafields?: MetafieldIdentifierType[];
    enableQuantity?: boolean;
    enableFavorites?: boolean;
    enableSubscription?: boolean;
    enableOkendoStarRating?: boolean;
};
declare const ProductDetails: React.FC<ProductDetailsProps>;
export default ProductDetails;
