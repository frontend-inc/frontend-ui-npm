import React from 'react';
type CarouselImageProps = {
    children: React.ReactNode;
    autoPlay?: boolean;
    arrows?: boolean;
    showDots?: boolean;
    responsive?: any;
};
declare const CarouselImage: React.FC<CarouselImageProps>;
export default CarouselImage;
