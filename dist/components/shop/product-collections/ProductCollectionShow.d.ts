import React from 'react';
export type ProductCollectionShowProps = {
    handle?: string;
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableSharing?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const ProductCollectionShow: React.FC<ProductCollectionShowProps>;
export default ProductCollectionShow;
