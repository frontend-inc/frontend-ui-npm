import React from 'react';
export type FeaturesProps = {
    items: {
        icon?: any;
        title?: string;
        subtitle?: string;
    }[];
};
declare const Features: React.FC<FeaturesProps>;
export default Features;
