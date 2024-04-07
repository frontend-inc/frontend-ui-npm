import React from 'react';
type ImageProps = {
    src?: string;
    height: number;
    width?: number;
    objectFit?: 'cover' | 'contain';
    alt?: string;
    bgcolor?: string;
    opacity?: number;
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    disableBorderRadius?: boolean;
};
declare const Image: React.FC<ImageProps>;
export default Image;
