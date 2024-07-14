import React from 'react';
import { ListItemsProps } from './ListItems';
export type CarouselListListProps = ListItemsProps & {
    enableAutoPlay?: boolean;
    enableArrows?: boolean;
    enableDots?: boolean;
};
declare const CarouselListList: React.FC<CarouselListListProps>;
export default CarouselListList;
