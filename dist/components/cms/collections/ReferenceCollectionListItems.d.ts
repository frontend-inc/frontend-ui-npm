import React from 'react';
import { ButtonType, DisplayFieldType } from '../../../types';
export type ReferenceCollectionListItemsProps = {
    href?: string;
    grid?: boolean;
    style?: 'list' | 'avatar' | 'cover' | 'table' | 'text';
    buttons: ButtonType[];
    displayFields: DisplayFieldType[];
    handleClick?: (resource: any) => void;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    enableEdit?: boolean;
    enableDelete?: boolean;
    enableComments?: boolean;
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableRatings?: boolean;
    enableSharing?: boolean;
    enableUsers?: boolean;
    slots?: {
        list?: any;
        item?: any;
    };
};
declare const ReferenceCollectionListItems: React.FC<ReferenceCollectionListItemsProps>;
export default ReferenceCollectionListItems;
