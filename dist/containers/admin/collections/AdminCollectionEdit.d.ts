import React from 'react';
type AdminCollectionEditProps = {
    loading: boolean;
    errors: any;
    open: boolean;
    collection: any;
    handleClose: () => void;
    handleChange: (e: any) => void;
    handleSubmit: (collection: any) => void;
    handleClick: (template: any) => void;
};
declare const AdminCollectionEdit: React.FC<AdminCollectionEditProps>;
export default AdminCollectionEdit;
