import React from 'react';
import { DocumentType } from '../../../types';
type CarouselViewProps = {
    items: DocumentType[];
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
