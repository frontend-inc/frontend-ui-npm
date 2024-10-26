import React from 'react';
export type FeaturesProps = {
    items: {
        icon?: any;
        title?: string;
        description?: string;
    }[];
};
declare const Features: React.FC<FeaturesProps>;
export default Features;
