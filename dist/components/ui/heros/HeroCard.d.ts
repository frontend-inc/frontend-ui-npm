import React from 'react';
export type HeroCardProps = {
    label?: string;
    image: string;
    primary: string | React.ReactNode;
    secondary?: React.ReactNode;
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
