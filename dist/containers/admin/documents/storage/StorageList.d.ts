import React from 'react';
type StorageItemListProps = {
    selectedIds: number[];
    handleSelect: (item: any) => void;
};
declare const StorageItemList: React.FC<StorageItemListProps>;
export default StorageItemList;
