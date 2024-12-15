import React from 'react';
export type FeatureCardsProps = {
    layout?: 'grid' | 'carousel';
    items: {
        icon?: string;
        label?: string;
        title?: string;
        subtitle?: string;
        image?: string;
        buttonText?: string;
        path?: string;
        url?: string;
    }[];
    enableGradient?: boolean;
    enableOverlay?: boolean;
    variant?: 'default' | 'fill' | 'outline';
};
declare const FeatureCards: React.FC<FeatureCardsProps>;
export default FeatureCards;
