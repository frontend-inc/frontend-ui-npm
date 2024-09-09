import React from 'react';
type ShopifyProductImageGridProps = {
    images: any;
    loading?: boolean;
    handleClick: any;
    itemWidth?: number;
    itemHeight?: number;
    numSkeletons?: number;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
};
declare const ShopifyProductImageGrid: React.FC<ShopifyProductImageGridProps>;
export default ShopifyProductImageGrid;
