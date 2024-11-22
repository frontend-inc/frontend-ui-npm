import React from 'react';
export type FeaturedCardProps = {
    label?: string;
    title?: string;
    subtitle?: string;
    image?: string;
    buttonText?: string;
    href?: string;
    flexDirection?: 'row' | 'row-reverse';
    handleClick?: () => void;
    objectFit?: 'cover' | 'contain';
    enableOverlay?: boolean;
    enableGradient?: boolean;
    border?: boolean;
    fill?: boolean;
};
declare const FeaturedCard: React.FC<FeaturedCardProps>;
export default FeaturedCard;
