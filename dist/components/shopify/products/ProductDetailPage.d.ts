import React from 'react';
import { MetafieldIdentifierType, ProductType } from 'frontend-shopify';
type ProductDetailPageProps = {
    shopifyProduct: ProductType;
    buttonText?: string;
    metafields?: MetafieldIdentifierType[];
    enableQuantity?: boolean;
    enableFavorites?: boolean;
    enableSubscription?: boolean;
    enableOkendoStarRating?: boolean;
};
declare const ProductDetailPage: React.FC<ProductDetailPageProps>;
export default ProductDetailPage;
