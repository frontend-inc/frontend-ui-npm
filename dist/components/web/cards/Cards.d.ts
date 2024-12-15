import React from 'react';
type CardType = {
    label?: string;
    title: string;
    subtitle?: string;
    image: string;
    buttonText?: string;
    path: string;
    url?: string;
};
export type CardsProps = {
    style?: 'card' | 'cover';
    items: CardType[];
    enableGradient?: boolean;
    enableOverlay?: boolean;
    layout?: 'grid' | 'carousel';
};
declare const Cards: React.FC<CardsProps>;
export default Cards;
