import React from 'react';
import { ShopifyCollectionType } from 'frontend-shopify';
type ShopifyProductCollectionModalProps = {
    collection: ShopifyCollectionType;
    open?: boolean;
    handleClose: () => void;
    enableFilters?: boolean;
    enableSort?: boolean;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuantity?: boolean;
};
declare const ShopifyProductCollectionModal: React.FC<ShopifyProductCollectionModalProps>;
export default ShopifyProductCollectionModal;
