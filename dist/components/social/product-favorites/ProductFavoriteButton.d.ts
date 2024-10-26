import React from 'react';
type ProductFavoriteButtonProps = {
    product: any;
    size?: 'small' | 'large';
    color?: string;
    numFavorites?: number;
};
export default function ProductFavoriteButton({ product, size, color, numFavorites, }: ProductFavoriteButtonProps): React.JSX.Element;
export {};
