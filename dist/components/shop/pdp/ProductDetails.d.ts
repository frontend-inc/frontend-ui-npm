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
declare const ProductDetails: React.FC<ProductDetailsProps>;
export default ProductDetails;
