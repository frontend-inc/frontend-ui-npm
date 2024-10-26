import React from 'react';
import { ButtonType, DisplayFieldType } from '../../../types';
export type ProductDetailsProps = {
    handle?: string;
    buttons: ButtonType[];
    displayFields: DisplayFieldType[];
    product: any;
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableSharing?: boolean;
    enableRatings?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    handleEdit?: (res: any) => void;
};
export type ProductProps = ProductDetailsProps & {
    slots?: {
        image?: any;
        content?: any;
    };
};
declare const ProductDetails: React.FC<ProductProps>;
export default ProductDetails;
