import React from 'react';
type CollectionCarouselProps = {
    title?: string;
    url: string;
    style: 'card' | 'avatar' | 'cover';
    fields?: any;
    editing?: boolean;
    navigateUrl: any;
    perPage?: number;
    query?: any;
    buttonText?: string;
    enableAutoPlay?: boolean;
    enableArrows?: boolean;
    enableBorder?: boolean;
    enableDots?: boolean;
    enableGradient?: boolean;
};
declare const CollectionCarousel: React.FC<CollectionCarouselProps>;
export default CollectionCarousel;
