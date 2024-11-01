import React from 'react';
export type CoverCarouselProps = {
    items: {
        title?: string;
        description?: string;
        image: string;
        buttonText?: string;
        path?: string;
    }[];
    editing?: boolean;
    enableAutoPlay?: boolean;
    showDots?: boolean;
    enableOverlay?: boolean;
    enableGradient?: boolean;
    enableBorder?: boolean;
    enableArrows?: boolean;
    opacity?: number;
    alignItems?: 'flex-start' | 'center' | 'flex-end';
};
declare const CoverCarousel: React.FC<CoverCarouselProps>;
export default CoverCarousel;
