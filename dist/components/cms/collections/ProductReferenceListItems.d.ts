import React from 'react';
import { ButtonType, DisplayFieldType } from '../../../types';
export type ProductReferenceListItemsProps = {
    href?: string;
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
declare const ProductReferenceListItems: React.FC<ProductReferenceListItemsProps>;
export default ProductReferenceListItems;
