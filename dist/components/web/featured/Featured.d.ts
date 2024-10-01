import React from 'react';
export type FeaturedProps = {
    items: {
        icon?: string;
        label?: string;
        title?: string;
        description?: string;
        image?: string;
        buttonText?: string;
        path?: string;
        url?: string;
    }[];
    enableGradient?: boolean;
    enableOverlay?: boolean;
    enableBorder?: boolean;
};
declare const Featured: React.FC<FeaturedProps>;
export default Featured;
