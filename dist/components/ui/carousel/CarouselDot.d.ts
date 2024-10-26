import React from 'react';
type CarouselDotProps = {
    onClick?: () => void;
    styles?: React.CSSProperties;
    index?: number;
    active?: boolean;
    onMove?: () => void;
    carouselState?: {
        currentSlide: number;
        deviceType: string;
    };
};
declare const CarouselDot: React.FC<CarouselDotProps>;
export default CarouselDot;
