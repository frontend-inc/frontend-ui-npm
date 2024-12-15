import React from 'react';
import { ShopifyProductType } from 'frontend-shopify';
type ShopifyProductVariantSelectorProps = {
    product: ShopifyProductType;
    selectedOptions: any;
    handleOptionChange: any;
};
declare const ShopifyProductVariantSelector: React.FC<ShopifyProductVariantSelectorProps>;
export default ShopifyProductVariantSelector;
