import React from 'react';
export type ProductCollectionCoverProps = {
    height?: number;
    alignItems?: 'items-center' | 'items-start' | 'items-end';
    alt?: string;
    handleClick?: () => void;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    productCollectionId: string | number;
};
declare const ProductCollectionCover: React.FC<ProductCollectionCoverProps>;
export default ProductCollectionCover;
