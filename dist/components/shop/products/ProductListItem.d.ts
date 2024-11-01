import React from 'react';
import { DisplayFieldType } from '../../../types';
type ProductListItemProps = {
    displayFields: DisplayFieldType[];
    resource: any;
    buttonText?: string;
    handleClick: () => void;
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableRatings?: boolean;
    disableBorder?: boolean;
};
declare const ProductListItem: React.FC<ProductListItemProps>;
export default ProductListItem;
