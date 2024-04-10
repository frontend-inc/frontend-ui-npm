import React from 'react';
type CollectionCardProps = {
    layout: 'list' | 'grid';
    style: 'card' | 'avatar' | 'cover';
    label?: string;
    title?: string;
    image?: string;
    video?: string;
    description: string;
    buttonText?: string;
    href?: string;
    handleClick: () => void;
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const CollectionCard: React.FC<CollectionCardProps>;
export default CollectionCard;
