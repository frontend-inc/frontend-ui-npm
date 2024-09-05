import React from 'react';
type StorageDrawerProps = {
    open: boolean;
    handleClose: () => void;
    handleSubmit: (items: any[]) => void;
};
declare const StorageDrawer: React.FC<StorageDrawerProps>;
export default StorageDrawer;
