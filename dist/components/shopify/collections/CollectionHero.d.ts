import React from 'react';
type CollectionHeroProps = {
    handle: string;
    editing?: boolean;
    height?: number;
    width?: number;
    objectFit?: 'cover' | 'contain';
    alignItems?: 'flex-start' | 'center' | 'flex-end';
    alt?: string;
    handleClick?: () => void;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    opacity?: number;
    overlayColor?: string;
    href?: string;
};
declare const CollectionHero: React.FC<CollectionHeroProps>;
export default CollectionHero;
