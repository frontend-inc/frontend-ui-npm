import React from 'react';
export type CardProps = {
    ref?: any;
    avatar?: React.ReactNode;
    image: string;
    label?: string;
    primary: string;
    secondary?: string | React.ReactNode;
    actions?: React.ReactNode;
    secondaryAction?: React.ReactNode;
    handleClick?: () => void;
    height?: number;
    slots?: {
        item?: any;
        image?: any;
    };
};
declare const Card: React.FC<CardProps>;
export default Card;
