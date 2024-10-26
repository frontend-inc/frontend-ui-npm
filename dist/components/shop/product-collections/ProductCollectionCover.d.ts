import React from 'react';
import { ProductCollectionType } from '../../../types';
export type ProductCollectionCoverProps = {
    productCollection: ProductCollectionType;
    editing?: boolean;
    height?: number;
    alignItems?: 'flex-start' | 'center' | 'flex-end';
    alt?: string;
    handleClick?: () => void;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    opacity?: number;
    href?: string;
};
declare const ProductCollectionCover: React.FC<ProductCollectionCoverProps>;
export default ProductCollectionCover;
