import React from 'react';
export type ProductCardProps = {
    ref?: any;
    avatar?: React.ReactNode;
    image: string;
    label?: string;
    primary: string;
    secondary?: string | React.ReactNode;
    actions?: React.ReactNode;
    secondaryAction?: React.ReactNode;
    price: string;
    compareAtPrice?: string;
    handleClick?: () => void;
    height?: number;
    addToCart?: React.ReactNode;
    slots?: {
        item?: any;
        image?: any;
    };
};
declare const ProductCard: React.FC<ProductCardProps>;
export default ProductCard;
