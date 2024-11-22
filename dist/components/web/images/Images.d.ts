import React from 'react';
type ImageType = {
    label?: string;
    title: string;
    subtitle?: string;
    image: string;
};
export type ImagesProps = {
    style?: 'card' | 'cover';
    items: ImageType[];
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const Images: React.FC<ImagesProps>;
export default Images;
