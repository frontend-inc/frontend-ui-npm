import React from 'react';
export type CardProps = {
    collection?: any;
    href?: string;
    handleClick?: () => void;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const CollectionCard: React.FC<CardProps>;
export default CollectionCard;
