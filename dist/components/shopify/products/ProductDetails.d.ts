import React from 'react';
import { ShopifyMetafieldType, ProductType } from 'frontend-shopify';
export type ProductDetailsProps = {
    shopifyProduct: ProductType;
    buttonText?: string;
    metafields?: ShopifyMetafieldType[];
    enableQuantity?: boolean;
    enableFavorites?: boolean;
    enableSubscription?: boolean;
    enableOkendoStarRating?: boolean;
};
declare const ProductDetails: React.FC<ProductDetailsProps>;
export default ProductDetails;
