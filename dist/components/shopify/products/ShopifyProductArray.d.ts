import React from 'react';
export type ShopifyProductArrayProps = {
    handles: string[];
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuantity?: boolean;
};
declare const ShopifyProductArray: React.FC<ShopifyProductArrayProps>;
export default ShopifyProductArray;
