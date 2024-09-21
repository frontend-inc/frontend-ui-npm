import React from 'react';
import { ProductCollectionListProps } from './ProductCollectionList';
export type ProductCollectionCoverCarouselListProps = ProductCollectionListProps & {
    enableArrows?: boolean;
    enableAutoPlay?: boolean;
    buttonText?: string;
};
declare const ProductCollectionCoverCarouselList: React.FC<ProductCollectionCoverCarouselListProps>;
export default ProductCollectionCoverCarouselList;
