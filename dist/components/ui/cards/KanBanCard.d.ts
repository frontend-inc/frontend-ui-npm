import React from 'react';
import { Image } from '../../../components';
export type CardProps = {
    id: string;
    loading?: boolean;
    label?: string;
    primary: string;
    secondary?: string;
    secondaryAction?: React.ReactNode;
    handleClick?: () => void;
    image?: string;
    actions?: React.ReactNode;
    enableDragging?: boolean;
    height?: number;
    slots?: {
        item?: React.HTMLAttributes<HTMLDivElement>;
        image?: React.ComponentProps<typeof Image>;
    };
};
declare const KanBanCard: React.FC<CardProps>;
export default KanBanCard;
