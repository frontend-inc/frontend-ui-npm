import React from 'react';
type StorageListItemProps = {
    item?: any;
    handleClick?: () => void;
    selected?: boolean;
};
declare const StorageListItem: React.FC<StorageListItemProps>;
export default StorageListItem;
