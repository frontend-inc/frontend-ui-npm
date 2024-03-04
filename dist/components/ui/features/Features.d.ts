import React from 'react';
type FeaturesProps = {
    title?: string;
    features: {
        icon?: any;
        title?: string;
        description?: string;
        filled?: boolean;
    }[];
};
declare const Features: React.FC<FeaturesProps>;
export default Features;
