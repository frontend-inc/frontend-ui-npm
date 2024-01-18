import React from 'react';
type CollectionProps = {
    title?: string;
    editing?: boolean;
    children: React.ReactNode;
    layout?: 'grid' | 'list' | 'carousel';
    style?: 'card' | 'list' | 'avatar' | 'cover';
    perPage?: number;
    buttonText?: string;
    autoPlay?: boolean;
    arrows?: boolean;
    showDots?: boolean;
    enableBorder?: boolean;
    enableGradient?: boolean;
};
declare const Collections: React.FC<CollectionProps>;
export default Collections;
