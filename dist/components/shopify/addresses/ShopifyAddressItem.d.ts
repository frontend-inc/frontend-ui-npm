import React from 'react';
import { ShopifyAddressType } from 'frontend-shopify';
type ShopifyAddressItemProps = {
    address: ShopifyAddressType;
    handleClick: (id: string) => void;
    handleEdit: (id: string) => void;
    handleDelete: (address: ShopifyAddressType) => void;
    disableActions?: boolean;
};
declare const ShopifyAddressItem: React.FC<ShopifyAddressItemProps>;
export default ShopifyAddressItem;
