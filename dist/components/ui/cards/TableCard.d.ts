import React from 'react';
import { Image } from '../..';
export type CardProps = {
    label?: string;
    primary: string;
    secondary?: React.ReactNode;
    secondaryAction?: React.ReactNode;
    handleClick?: () => void;
    image?: string;
    height?: number;
    slots?: {
        item?: React.HTMLAttributes<HTMLDivElement>;
        image?: React.ComponentProps<typeof Image>;
    };
};
declare const TableCard: React.FC<CardProps>;
export default TableCard;
