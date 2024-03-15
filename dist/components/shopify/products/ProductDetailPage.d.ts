import React from 'react';
import { MetafieldIdentifierType } from 'frontend-shopify';
type ProductDetailPageProps = {
    handle: string | string[];
    buttonText?: string;
    metafields?: MetafieldIdentifierType[];
    enableQuantity?: boolean;
    enableFavorites?: boolean;
    enableSubscription?: boolean;
    enableOkendoStarRating?: boolean;
};
declare const ProductDetailPage: React.FC<ProductDetailPageProps>;
export default ProductDetailPage;
