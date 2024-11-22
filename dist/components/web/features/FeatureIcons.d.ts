import React from 'react';
export type FeatureIconsProps = {
    fill?: boolean;
    border?: boolean;
    items: {
        icon?: any;
        title?: string;
        subtitle?: string;
    }[];
    direction?: 'column' | 'row';
};
declare const FeatureIcons: React.FC<FeatureIconsProps>;
export default FeatureIcons;
