import React from 'react';
type CoverImageCarouselProps = {
    items: {
        title?: string;
        description?: string;
        image?: string;
        buttonText?: string;
        url?: string;
    }[];
    editing?: boolean;
    autoPlay?: boolean;
    arrows?: boolean;
    showDots?: boolean;
    enableOverlay?: boolean;
    enableGradient?: boolean;
    enableBorder?: boolean;
    enableArrows?: boolean;
    overlayColor?: string;
    opacity?: number;
    alignItems?: 'flex-start' | 'center' | 'flex-end';
};
declare const CoverImageCarousel: React.FC<CoverImageCarouselProps>;
export default CoverImageCarousel;
