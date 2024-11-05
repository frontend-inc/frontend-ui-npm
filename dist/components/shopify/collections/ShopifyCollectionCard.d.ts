import React from 'react';
import { ShopifyCollectionType } from 'frontend-shopify';
export type ShopifyCollectionCardProps = {
    collection: ShopifyCollectionType;
    buttonText?: string;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    enableAddToCart?: boolean;
    enableQuantity?: boolean;
    enableSorting?: boolean;
};
export default function ShopifyCollectionCard(props: ShopifyCollectionCardProps): React.JSX.Element;
