import React from 'react';
export type SpotlightListProps = {
    label?: string;
    image?: string;
    logos?: {
        image: string;
        title: string;
    }[];
    primary?: string | React.ReactNode;
    secondary?: React.ReactNode;
    actions?: React.ReactNode;
    secondaryAction?: React.ReactNode;
    styles?: any;
    slots?: {
        image?: any;
        content?: any;
    };
};
declare const Spotlight: React.FC<SpotlightListProps>;
export default Spotlight;
