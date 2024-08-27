import React from 'react';
export type HeroCardProps = {
    label?: string;
    image?: string;
    primary?: string;
    secondary?: string;
    actions?: React.ReactNode;
    secondaryAction?: React.ReactNode;
    children?: React.ReactNode;
    slots?: {
        image?: any;
        content?: any;
    };
};
declare const HeroCard: React.FC<HeroCardProps>;
export default HeroCard;
