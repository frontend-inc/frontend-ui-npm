import React from 'react';
export type ShopifyProductDetailsProps = {
    shopifyProduct: string;
    buttonText?: string;
    enableQuantity?: boolean;
    enableFavorites?: boolean;
    enableSubscription?: boolean;
    disableZoom?: boolean;
};
declare const ShopifyProductDetails: React.FC<ShopifyProductDetailsProps>;
export default ShopifyProductDetails;
