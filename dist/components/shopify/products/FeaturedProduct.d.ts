import React from 'react';
type FeaturedProductProps = {
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
declare const FeaturedProduct: React.FC<FeaturedProductProps>;
export default FeaturedProduct;
