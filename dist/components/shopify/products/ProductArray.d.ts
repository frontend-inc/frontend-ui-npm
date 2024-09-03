import React from 'react';
type ProductArrayProps = {
    handles: string[];
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuickShop?: boolean;
    enableQuantity?: boolean;
    enableOkendoStarRating?: boolean;
    buttonText?: string;
    handleClick: (product: any) => void;
};
declare const ProductArray: React.FC<ProductArrayProps>;
export default ProductArray;
