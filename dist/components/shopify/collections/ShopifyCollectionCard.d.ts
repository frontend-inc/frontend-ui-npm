import React from 'react';
import { ShopifyCollectionType } from 'frontend-shopify';
export type ShopifyCollectionCardProps = {
    collection: ShopifyCollectionType;
    buttonText?: string;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
export default function ShopifyCollectionCard({ collection, buttonText, enableGradient, enableOverlay, }: ShopifyCollectionCardProps): React.JSX.Element;
