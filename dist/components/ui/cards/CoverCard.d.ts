import React from 'react';
type CoverCardProps = {
    label?: string;
    primary?: string;
    secondary?: string;
    actions?: React.ReactNode;
    secondaryAction?: React.ReactNode;
    handleClick: () => void;
    image: string;
    height?: number;
    slots?: {
        item?: any;
        image?: any;
    };
};
declare const CoverCard: React.FC<CoverCardProps>;
export default CoverCard;
