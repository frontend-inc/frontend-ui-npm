import React from 'react';
type SwipeableProps = {
    children: React.ReactNode[];
    enableAutoPlay?: boolean;
    enableArrows?: boolean;
    interval?: number;
    className?: string;
};
declare const Swipeable: React.FC<SwipeableProps>;
export default Swipeable;
