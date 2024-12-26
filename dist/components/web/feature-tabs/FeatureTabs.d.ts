import React from 'react';
type ItemType = {
    icon?: string;
    label?: string;
    title?: string;
    subtitle?: string;
    image?: string;
};
export type FeatureTabsProps = {
    items: ItemType[];
    enableGradient?: boolean;
    enableOverlay?: boolean;
    direction?: 'row' | 'column';
    enableDots?: boolean;
    enableArrows?: boolean;
};
declare const FeatureTabs: React.FC<FeatureTabsProps>;
export default FeatureTabs;
