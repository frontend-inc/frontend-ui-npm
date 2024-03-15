import React from 'react';
type CarouselProps = {
    editing?: boolean;
    children: React.ReactNode;
    enableAutoPlay?: boolean;
    enableArrows?: boolean;
    enableDots?: boolean;
    responsive?: any;
    styles?: any;
};
declare const ReactCarousel: React.FC<CarouselProps>;
export default ReactCarousel;
