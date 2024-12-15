import React from 'react';
type SwipeableProps = {
    children: React.ReactNode[];
    enableDots?: boolean;
    enableArrows?: boolean;
    enableAutoPlay?: boolean;
    interval?: number;
    itemsPerSlide?: 1 | 2 | 3 | 4 | 5 | 6;
    arrowHeight?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
    className?: string;
};
declare const Swipeable: React.FC<SwipeableProps>;
export default Swipeable;
