import React from 'react';
type ShopifyProductVariantOptionsProps = {
    name: string;
    values: string[];
    selected: string;
    handleChange: (name: string, value: string) => void;
};
declare const ShopifyProductVariantOptions: React.FC<ShopifyProductVariantOptionsProps>;
export default ShopifyProductVariantOptions;
