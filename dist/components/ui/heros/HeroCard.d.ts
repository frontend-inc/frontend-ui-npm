import React from 'react';
export type HeroCardProps = {
    label?: string;
    image: string;
    title: string;
    subtitle?: string;
    description?: string;
    actions?: React.ReactNode;
    secondaryAction?: React.ReactNode;
    children?: React.ReactNode;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const HeroCard: React.FC<HeroCardProps>;
export default HeroCard;
