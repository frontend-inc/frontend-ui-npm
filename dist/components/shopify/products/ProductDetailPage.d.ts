import React from 'react';
import { MetafieldIdentifier } from 'frontend-shopify';
type ProductDetailPageProps = {
    handle: string | string[];
    buttonText?: string;
    metafields?: MetafieldIdentifier[];
    enableQuantity?: boolean;
    enableFavorites?: boolean;
    enableSubscription?: boolean;
    enableOkendoStarRating?: boolean;
};
declare const ProductDetailPage: React.FC<ProductDetailPageProps>;
export default ProductDetailPage;
