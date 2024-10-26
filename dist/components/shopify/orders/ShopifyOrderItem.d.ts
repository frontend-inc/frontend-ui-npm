import React from 'react';
import { ShopifyOrderType } from 'frontend-shopify';
type ShopifyOrderItemProps = {
    order: ShopifyOrderType;
    handleClick: (order: ShopifyOrderType) => void;
    className?: string;
};
declare const ShopifyOrderItem: React.FC<ShopifyOrderItemProps>;
export default ShopifyOrderItem;
