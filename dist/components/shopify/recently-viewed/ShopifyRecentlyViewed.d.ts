import React from 'react';
export type ShopifyRecentlyViewedProps = {
    layout?: 'grid' | 'carousel';
    perPage?: string;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuantity?: boolean;
    emptyIcon?: string;
    emptyTitle?: string;
    emptyDescription?: string;
};
declare const ShopifyRecentlyViewed: React.FC<ShopifyRecentlyViewedProps>;
export default ShopifyRecentlyViewed;
