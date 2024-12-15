import React from 'react';
import { HeadingProps } from '../../../types';
export type FeatureItemProps = HeadingProps & {
    direction?: 'row' | 'row-reverse';
    items: {
        icon?: string;
        title?: string;
        subtitle?: string;
    }[];
    image?: string;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    buttonText?: string;
    path?: string;
    url?: string;
};
declare const FeatureItem: React.FC<FeatureItemProps>;
export default FeatureItem;
