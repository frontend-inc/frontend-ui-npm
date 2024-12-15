import React from 'react';
export type FeaturedCardProps = {
    direction?: 'column' | 'row' | 'row-reverse';
    label?: string;
    title?: string;
    subtitle?: string;
    image?: string;
    buttonText?: string;
    href?: string;
    handleClick?: () => void;
    objectFit?: 'cover' | 'contain';
    enableOverlay?: boolean;
    enableGradient?: boolean;
    variant?: 'default' | 'fill' | 'outline';
};
declare const FeaturedCard: React.FC<FeaturedCardProps>;
export default FeaturedCard;
