import React from 'react';
import { CollectionListProps } from './CollectionList';
export type CarouselCoverListProps = CollectionListProps & {
    enableAutoPlay?: boolean;
    enableArrows?: boolean;
    buttonText?: string;
};
declare const CarouselCoverList: React.FC<CarouselCoverListProps>;
export default CarouselCoverList;
