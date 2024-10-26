import React from 'react';
type CarouselImageProps = {
    children: React.ReactNode;
    enableAutoPlay?: boolean;
    enableArrows?: boolean;
    enableDots?: boolean;
    responsive?: any;
};
declare const CarouselImage: React.FC<CarouselImageProps>;
export default CarouselImage;
