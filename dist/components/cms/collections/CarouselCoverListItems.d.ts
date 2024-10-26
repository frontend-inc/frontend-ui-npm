import React from 'react';
import { CoverProps } from '../../../components/web/covers/Cover';
export type CarouselCoverListItemsProps = CoverProps & {
    href?: string;
    height?: number;
    enableAutoPlay?: boolean;
    enableArrows?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const CarouselCoverListItems: React.FC<CarouselCoverListItemsProps>;
export default CarouselCoverListItems;
