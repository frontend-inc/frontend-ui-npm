import React from 'react';
export type FeaturedCardProps = {
    title?: string;
    description?: string;
    image?: string;
    buttonText?: string;
    href?: string;
    flexDirection?: 'row' | 'row-reverse';
    handleClick?: () => void;
    objectFit?: 'cover' | 'contain';
    enableOverlay?: boolean;
    enableBorder?: boolean;
    enableGradient?: boolean;
};
declare const FeaturedCard: React.FC<FeaturedCardProps>;
export default FeaturedCard;
