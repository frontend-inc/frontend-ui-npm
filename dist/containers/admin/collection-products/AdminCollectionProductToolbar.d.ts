import React from 'react';
type AdminCollectionProductToolbarProps = {
    open: boolean;
    resource: any;
    url: string;
    handleClose: () => void;
    selectedIds: string[];
    handleReload: () => void;
};
declare const AdminProductToolbar: React.FC<AdminCollectionProductToolbarProps>;
export default AdminProductToolbar;
