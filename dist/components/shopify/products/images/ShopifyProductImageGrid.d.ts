import React from 'react';
type ShopifyProductImageListProps = {
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
declare const ShopifyProductImageList: React.FC<ShopifyProductImageListProps>;
export default ShopifyProductImageList;
