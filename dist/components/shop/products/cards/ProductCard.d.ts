import React from 'react';
export type ProductCardProps = {
    ref?: React.Ref<HTMLDivElement>;
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
    disableBorder?: boolean;
    slots?: {
        item?: any;
        image?: any;
    };
};
declare const ProductCard: React.ForwardRefExoticComponent<Omit<ProductCardProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default ProductCard;
