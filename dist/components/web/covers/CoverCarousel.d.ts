import React from 'react';
export type CoverCarouselProps = {
    items: {
        title?: string;
        subtitle?: string;
        image: string;
        buttonText?: string;
        path?: string;
    }[];
    enableAutoPlay?: boolean;
    showDots?: boolean;
    enableOverlay?: boolean;
    enableGradient?: boolean;
    enableBorder?: boolean;
    enableArrows?: boolean;
    opacity?: number;
    alignItems?: 'items-center' | 'items-start' | 'items-end';
};
declare const CoverCarousel: React.FC<CoverCarouselProps>;
export default CoverCarousel;
