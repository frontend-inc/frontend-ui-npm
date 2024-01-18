import React from 'react';
type ImageViewProps = {
    loading?: boolean;
    items: any[];
    editing?: boolean;
    buttonText?: string;
    handleClick?: (item: any) => void;
    component?: any;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
};
declare const ImageView: React.FC<ImageViewProps>;
export default ImageView;
