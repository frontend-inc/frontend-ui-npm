import React from 'react';
export type AvatarImageProps = {
    src: string;
    alt: string;
    size?: number;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const AvatarImage: React.FC<AvatarImageProps>;
export default AvatarImage;
