import React from 'react';
import { ProductCollectionListProps } from './ProductCollectionList';
export type ProductCollectionCarouselCoverListProps = ProductCollectionListProps & {
    enableArrows?: boolean;
    enableAutoPlay?: boolean;
    buttonText?: string;
};
declare const ProductCollectionCarouselCoverList: React.FC<ProductCollectionCarouselCoverListProps>;
export default ProductCollectionCarouselCoverList;
