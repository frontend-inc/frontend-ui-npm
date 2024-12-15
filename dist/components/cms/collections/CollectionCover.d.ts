import React from 'react';
export type CollectionCoverProps = {
    height?: number;
    alignItems?: 'items-center' | 'items-start' | 'items-end';
    alt?: string;
    handleClick?: () => void;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    collectionId: string | number;
};
declare const CollectionCover: React.FC<CollectionCoverProps>;
export default CollectionCover;
