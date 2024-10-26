import React from 'react';
type ProductCollectionListItemProps = {
    resource: any;
    href?: string;
    handleClick: () => void;
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const ProductCollectionListItem: React.FC<ProductCollectionListItemProps>;
export default ProductCollectionListItem;
