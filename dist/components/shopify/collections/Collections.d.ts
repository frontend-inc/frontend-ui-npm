import React from 'react';
export type CollectionsProps = {
    editing?: boolean;
    layout?: 'grid' | 'list';
    style?: 'card' | 'avatar' | 'cover';
    perPage?: number;
    buttonText?: string;
    autoPlay?: boolean;
    arrows?: boolean;
    showDots?: boolean;
    enableBorder?: boolean;
    enableGradient?: boolean;
};
declare const Collections: React.FC<CollectionsProps>;
export default Collections;
