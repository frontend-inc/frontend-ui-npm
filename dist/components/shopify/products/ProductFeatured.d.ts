import React from 'react';
export type ProductFeaturedProps = {
    handle: string;
    flexDirection?: 'row' | 'row-reverse';
    handleClick?: () => void;
    buttonText?: string;
    quickShopButtonText?: string;
    height?: number;
    width?: number;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuantity?: boolean;
    enableQuickShop?: boolean;
};
declare const ProductFeatured: React.FC<ProductFeaturedProps>;
export default ProductFeatured;
