import React from 'react';
import { ShopifyProductType } from 'frontend-shopify';
type ShopifyColorVariantsOptionsProps = {
    product: ShopifyProductType;
    name: string;
    values: any[];
    selected: string;
    handleChange: (name: string, value: string) => void;
    styles?: React.CSSProperties;
};
declare const ShopifyColorVariantsOptions: React.FC<ShopifyColorVariantsOptionsProps>;
export default ShopifyColorVariantsOptions;
