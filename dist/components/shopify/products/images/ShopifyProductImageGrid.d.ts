import React from 'react';
type ShopifyProductImageListProps = {
    images: any[];
    loading?: boolean;
    handleClick: (index: number) => void;
};
declare const ShopifyProductImageList: React.FC<ShopifyProductImageListProps>;
export default ShopifyProductImageList;
