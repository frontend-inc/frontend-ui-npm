import React from 'react';
import { ProductType } from '../../../types';
export type ProductDetailsProps = {
    handle?: string;
    direction?: 'row' | 'column';
    product: ProductType;
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
