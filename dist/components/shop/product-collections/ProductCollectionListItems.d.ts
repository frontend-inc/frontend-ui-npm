import React from 'react';
import { ButtonType, DisplayFieldType } from '../../../types';
export type ProductCollectionListItemsProps = {
    grid?: boolean;
    href?: string;
    style?: 'list' | 'card' | 'avatar' | 'cover' | 'text';
    buttons: ButtonType[];
    displayFields: DisplayFieldType[];
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
declare const ProductCollectionListItems: React.FC<ProductCollectionListItemsProps>;
export default ProductCollectionListItems;
