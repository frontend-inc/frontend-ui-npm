import React from 'react';
type CollectionCardProps = {
    layout: 'list' | 'grid';
    style: 'card' | 'avatar' | 'cover';
    title?: string;
    image?: string;
    video?: string;
    description: string;
    buttonText?: string;
    handleClick: () => void;
    enableBorder?: boolean;
    enableGradient?: boolean;
};
declare const CollectionCard: React.FC<CollectionCardProps>;
export default CollectionCard;
