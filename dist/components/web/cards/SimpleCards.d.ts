import React from 'react';
type CardType = {
    label?: string;
    title?: string;
    description: string;
    image: string;
    buttonText?: string;
    url?: string;
};
export type SimpleCardsProps = {
    style?: 'card' | 'cover';
    items: CardType[];
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const SimpleCards: React.FC<SimpleCardsProps>;
export default SimpleCards;
