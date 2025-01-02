import React from 'react';
type GradientProps = {
    disableBorderRadius?: boolean;
    height?: number;
    onClick?: () => void;
};
type NoImageProps = GradientProps & {
    onClick?: () => void;
    aspectRatio?: number;
};
declare const NoImage: React.FC<NoImageProps>;
export default NoImage;
