import React from 'react';
import { ButtonType, DisplayFieldType } from '../../../types';
type ProductListItemProps = {
    buttons: ButtonType[];
    displayFields: DisplayFieldType[];
    resource: any;
    buttonText?: string;
    href?: string;
    handleClick: () => void;
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    enableUsers?: boolean;
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableRatings?: boolean;
};
declare const ProductListItem: React.FC<ProductListItemProps>;
export default ProductListItem;
