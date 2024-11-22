import React from 'react';
type ProductLikeButtonProps = {
    product: any;
    size?: 'small' | 'large';
    color?: string;
    numLikes?: number;
};
export default function ProductLikeButton(props: ProductLikeButtonProps): React.JSX.Element;
export {};
