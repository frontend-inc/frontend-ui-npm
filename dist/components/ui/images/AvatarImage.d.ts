import React from 'react';
export type AvatarImageProps = {
    image: string;
    alt: string;
    height?: number;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const AvatarImage: React.FC<AvatarImageProps>;
export default AvatarImage;
