import React from 'react';
import { ProductListItemsProps } from '../products/ProductListItems';
export type ProductCarouselListItemsProps = ProductListItemsProps & {
    enableAutoPlay?: boolean;
    enableArrows?: boolean;
    enableDots?: boolean;
};
declare const ProductCarouselListItems: React.FC<ProductCarouselListItemsProps>;
export default ProductCarouselListItems;
