import React from 'react';
type CardType = {
    title: string;
    description: string;
    image: string;
    buttonText?: string;
    url?: string;
};
type CardsProps = {
    title?: string;
    layout?: 'grid' | 'list';
    style?: 'avatar' | 'card' | 'cover';
    items: CardType[];
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const Cards: React.FC<CardsProps>;
export default Cards;
