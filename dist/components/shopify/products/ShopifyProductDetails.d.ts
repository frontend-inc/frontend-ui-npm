import React from 'react';
import { ShopifyMetafieldType, ShopifyProductType } from 'frontend-shopify';
export type ShopifyProductDetailsProps = {
    shopifyProduct: ShopifyProductType;
    buttonText?: string;
    metafields?: ShopifyMetafieldType[];
    enableQuantity?: boolean;
    enableFavorites?: boolean;
    enableSubscription?: boolean;
    enableOkendoStarRating?: boolean;
};
declare const ShopifyProductDetails: React.FC<ShopifyProductDetailsProps>;
export default ShopifyProductDetails;
