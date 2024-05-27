import React from 'react';
export type CollectionsProps = {
    editing?: boolean;
    href: string;
    variant?: 'grid' | 'list';
    style?: 'card' | 'avatar' | 'cover';
    perPage?: number;
    buttonText?: string;
    autoPlay?: boolean;
    arrows?: boolean;
    showDots?: boolean;
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const Collections: React.FC<CollectionsProps>;
export default Collections;
