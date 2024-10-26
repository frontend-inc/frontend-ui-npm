import React from 'react';
type ProductArrayProps = {
    href?: string;
    handles: string[];
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuickShop?: boolean;
    enableQuantity?: boolean;
    enableOkendoStarRating?: boolean;
    buttonText?: string;
};
declare const ProductArray: React.FC<ProductArrayProps>;
export default ProductArray;
