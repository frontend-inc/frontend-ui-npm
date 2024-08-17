import React from 'react';
import { DataListItemsProps } from './DataListItems';
export type CarouselListListProps = DataListItemsProps & {
    enableAutoPlay?: boolean;
    enableArrows?: boolean;
    enableDots?: boolean;
};
declare const CarouselListList: React.FC<CarouselListListProps>;
export default CarouselListList;
