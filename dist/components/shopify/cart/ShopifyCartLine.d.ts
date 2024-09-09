import React from 'react';
import { CartLineType } from 'frontend-shopify';
type ShopifyCartLineProps = {
    line: CartLineType;
};
declare const ShopifyCartLine: React.FC<ShopifyCartLineProps>;
export default ShopifyCartLine;
