import React from 'react';
export type ProductCardProps = {
    label?: string;
    primary: string;
    image?: string;
    handleClick?: () => void;
    slots?: {
        image?: any;
    };
};
declare const ProductCollectionCard: React.FC<ProductCardProps>;
export default ProductCollectionCard;
