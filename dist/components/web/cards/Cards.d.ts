import React from 'react';
type CardType = {
    label?: string;
    title: string;
    description: string;
    image: string;
    buttonText?: string;
    path?: string;
    url?: string;
};
export type CardsProps = {
    style?: 'card' | 'cover';
    items: CardType[];
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const Cards: React.FC<CardsProps>;
export default Cards;
