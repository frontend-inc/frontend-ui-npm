import React from 'react';
import { ButtonType, MetafieldType } from '../../../types';
export type CollectionListItemsProps = {
    layout?: 'list' | 'grid' | 'slider';
    style?: 'list' | 'card' | 'avatar' | 'cover' | 'text';
    buttons: ButtonType[];
    displayFields: MetafieldType[];
    handleClick?: (resource: any) => void;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableRatings?: boolean;
    enableSharing?: boolean;
    slots?: {
        list?: any;
        item?: any;
    };
};
declare const CollectionListItems: React.FC<CollectionListItemsProps>;
export default CollectionListItems;
