import React from 'react';
import { ShopifyOrderType } from 'frontend-shopify';
type ShopifyOrderListProps = {
    orders: ShopifyOrderType[];
    handleClick: (id: string) => void;
    className?: string;
};
declare const ShopifyOrderList: React.FC<ShopifyOrderListProps>;
export default ShopifyOrderList;
