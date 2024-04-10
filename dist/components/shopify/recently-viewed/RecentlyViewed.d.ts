import React from 'react';
export type RecentlyViewedProps = {
    editing?: boolean;
    layout?: 'grid' | 'carousel';
    perPage?: string;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuantity?: boolean;
    enableQuickShop?: boolean;
    buttonText?: string;
    emptyIcon?: string;
    emptyTitle?: string;
    emptyDescription?: string;
};
declare const RecentlyViewed: React.FC<RecentlyViewedProps>;
export default RecentlyViewed;
