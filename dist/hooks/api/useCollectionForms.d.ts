import React from 'react';
type CollectionFormParams = {
    parentResource?: any;
};
declare const useCollectionForms: (params?: CollectionFormParams) => {
    loading: any;
    errors: Record<string, any>;
    resource: any;
    setResource: (value: any) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleAdd: () => any;
    handleEdit: (resource: any) => any;
    handleDelete: () => Promise<any>;
    handleDeleteClick: (resource: any) => any;
    handleRemove: (name: any) => Promise<any>;
    handleShow: (resource: any) => void;
    handleSubmit: () => Promise<any>;
    openEdit: boolean;
    openDelete: boolean;
    openShow: boolean;
    openReferences: any;
    setOpenEdit: (value: boolean) => void;
    setOpenDelete: (value: boolean) => void;
    setOpenShow: (value: boolean) => void;
    setOpenReferences: any;
};
export default useCollectionForms;
