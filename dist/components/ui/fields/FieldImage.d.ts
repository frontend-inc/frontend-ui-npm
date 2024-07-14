import React from 'react';
type FieldImageProps = {
    value?: any;
    label?: string;
    rest?: any;
    height?: number;
    width?: number;
    handleClick?: () => void;
    color?: string;
};
declare const FieldImage: React.FC<FieldImageProps>;
export default FieldImage;
