import React from 'react';
import { ListItemsProps } from './ListItems';
import { ListContainerProps } from './ListContainer';
export type CarouselListProps = ListItemsProps & ListContainerProps;
declare const CarouselList: React.FC<CarouselListProps>;
export default CarouselList;
