import React from 'react';
export type ShowCardProps = {
    label?: string;
    image?: string;
    primary?: string;
    secondary?: string;
    actions?: React.ReactNode;
    secondaryAction?: React.ReactNode;
    children?: React.ReactNode;
    slots?: {
        image?: any;
        content?: any;
    };
};
declare const ShowCard: React.FC<ShowCardProps>;
export default ShowCard;
