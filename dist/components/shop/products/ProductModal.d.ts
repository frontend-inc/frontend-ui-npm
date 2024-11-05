import React from 'react';
export type ProductModalProps = {
    open: boolean;
    handleClose: () => void;
    productId: string | number;
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableSharing?: boolean;
    enableRatings?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const Product: React.FC<ProductModalProps>;
export default Product;
