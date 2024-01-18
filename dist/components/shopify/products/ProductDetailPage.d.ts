import React from 'react';
type ProductDetailPageProps = {
    handle: string | string[];
    buttonText?: string;
    enableQuantity?: boolean;
    enableLikes?: boolean;
    enableShares?: boolean;
    enableFavorites?: boolean;
    enableSubscription?: boolean;
    enableOkendoStarRating?: boolean;
};
declare const ProductDetailPage: React.FC<ProductDetailPageProps>;
export default ProductDetailPage;
