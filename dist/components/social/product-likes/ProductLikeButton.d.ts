import React from 'react';
type ProductLikeButtonProps = {
    product: any;
    size?: 'small' | 'large';
    color?: string;
    numLikes?: number;
};
export default function ProductLikeButton({ product, color, size, numLikes, }: ProductLikeButtonProps): React.JSX.Element;
export {};
