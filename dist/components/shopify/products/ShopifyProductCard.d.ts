import React from 'react';
import { ShopifyProductType } from 'frontend-shopify';
type ShopifyProductCardProps = {
    product: ShopifyProductType;
    handleClick?: () => void;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuantity?: boolean;
    className?: string;
};
export default function ShopifyProductCard(props: ShopifyProductCardProps): React.JSX.Element;
export {};
