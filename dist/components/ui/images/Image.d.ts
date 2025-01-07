import React from 'react';
export type ImageCardProps = {
    src: string;
    alt?: string;
    label?: string;
    handleClick?: () => void;
    height?: number;
    width?: number;
    fullWidth?: boolean;
    isBlurred?: boolean;
    disableZoom?: boolean;
    disableBorderRadius?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    className?: string;
};
export type ImageProps = Omit<ImageCardProps, 'src'> & {
    src?: string;
    aspectRatio?: number;
};
declare const NextImage: React.FC<ImageProps>;
export default NextImage;
