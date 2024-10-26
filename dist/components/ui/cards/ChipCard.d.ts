import React from 'react';
export interface CardProps {
    primary: string;
    secondary?: string;
    secondaryAction?: React.ReactNode;
    handleClick?: () => void;
    image: string;
}
declare const ChipCard: React.FC<CardProps>;
export default ChipCard;
