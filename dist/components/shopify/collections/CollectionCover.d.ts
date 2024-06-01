import React from 'react';
import { CollectionType } from 'frontend-shopify';
export type CollectionCoverProps = {
    shopifyCollection: CollectionType;
    editing?: boolean;
    height?: number;
    width?: number;
    alignItems?: 'flex-start' | 'center' | 'flex-end';
    alt?: string;
    handleClick?: () => void;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    opacity?: number;
    overlayColor?: string;
    href?: string;
};
declare const CollectionCover: React.FC<CollectionCoverProps>;
export default CollectionCover;
