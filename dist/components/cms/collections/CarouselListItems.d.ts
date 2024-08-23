import React from 'react';
import { CollectionListItemsProps } from '../collections/CollectionListItems';
export type CarouselListItemsProps = CollectionListItemsProps & {
    enableAutoPlay?: boolean;
    enableArrows?: boolean;
    enableDots?: boolean;
};
declare const CarouselListItems: React.FC<CarouselListItemsProps>;
export default CarouselListItems;
