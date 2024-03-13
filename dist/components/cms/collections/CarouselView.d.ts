import React from 'react';
type CarouselViewProps = {
    items: any;
    editing?: boolean;
    defaultQuery?: any;
    buttonText?: string;
    handleClick?: (item: any) => void;
    component?: any;
    autoPlay?: boolean;
    arrows?: boolean;
    showDots?: boolean;
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const CarouselView: React.FC<CarouselViewProps>;
export default CarouselView;
