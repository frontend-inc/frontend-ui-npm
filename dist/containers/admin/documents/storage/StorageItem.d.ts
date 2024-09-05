import React from 'react';
type StorageItemProps = {
    item?: any;
    size?: number;
    selected?: boolean;
    handleClick?: (item: any) => void;
    handleRemoveItem?: (item: any) => void;
};
declare const StorageItem: React.FC<StorageItemProps>;
export default StorageItem;
