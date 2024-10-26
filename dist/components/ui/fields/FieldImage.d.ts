import React from 'react';
import { FieldElementProps } from './Field';
type FieldImageProps = FieldElementProps & {
    height?: number;
    width?: number;
};
declare const FieldImage: React.FC<FieldImageProps>;
export default FieldImage;
