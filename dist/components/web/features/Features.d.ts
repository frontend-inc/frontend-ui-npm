import React from 'react';
type FeaturesProps = {
    title?: string;
    items: {
        icon?: any;
        title?: string;
        description?: string;
    }[];
};
declare const Features: React.FC<FeaturesProps>;
export default Features;
