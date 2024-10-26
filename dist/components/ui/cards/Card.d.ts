import React from 'react';
export type CardProps = {
    ref?: React.Ref<HTMLDivElement>;
    sortable?: boolean;
    selectable?: boolean;
    selected?: boolean;
    avatar?: React.ReactNode;
    image?: string;
    label?: string;
    primary: string;
    secondary?: string | React.ReactNode;
    actions?: React.ReactNode;
    secondaryAction?: React.ReactNode;
    handleClick?: () => void;
    handleSelect?: () => void;
    size?: number;
    slots?: {
        item?: any;
        image?: any;
    };
};
declare const Card: React.FC<CardProps>;
export default Card;
