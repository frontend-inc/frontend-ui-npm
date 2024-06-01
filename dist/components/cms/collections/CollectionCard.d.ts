import React from 'react';
import { ActionType } from '../../../types';
type CardStyleTypes = 'card' | 'avatar' | 'cover' | 'chip' | 'image' | 'text';
type CollectionCardProps = {
    actions: ActionType[];
    variant: 'list' | 'grid';
    style: CardStyleTypes;
    resource: any & {
        label?: string;
        title?: string;
        image?: string;
        video?: string;
        description: string;
    };
    buttonText?: string;
    href?: string;
    handleClick: () => void;
    handleEdit?: (item: any) => void;
    handleDelete?: (item: any) => void;
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    enableEdit?: boolean;
    enableCreate?: boolean;
    enableDelete?: boolean;
    enableFavorites?: boolean;
};
declare const CollectionCard: React.FC<CollectionCardProps>;
export default CollectionCard;
