import React from 'react';
type ShopifySearchTagsProps = {
    tags?: string[];
    handleClick: (tag: string) => void;
    handleClearAll: () => void;
};
declare const ShopifySearchTags: React.FC<ShopifySearchTagsProps>;
export default ShopifySearchTags;
