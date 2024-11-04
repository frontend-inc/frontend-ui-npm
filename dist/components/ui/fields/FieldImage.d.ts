import React from 'react';
import { FieldElementProps } from './Field';
type FieldImageProps = FieldElementProps & {
    height?: number;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    className?: string;
};
declare const FieldImage: React.FC<FieldImageProps>;
export default FieldImage;
