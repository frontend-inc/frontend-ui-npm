import React from 'react';
type FormParams = {
    resource?: any;
};
declare const useForms: (params?: FormParams) => {
    loading: any;
    errors: Record<string, any>;
    resource: import("frontend-js").ResourceType;
    setResource: (value: import("frontend-js").ResourceType) => void;
    handleAdd: () => any;
    handleEdit: (item: any) => any;
    handleSubmit: () => Promise<any>;
    handleDelete: () => Promise<any>;
    handleDeleteClick: (item: any) => any;
    handleRemove: (name: any) => Promise<any>;
    handleDataChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
    openFormModal: any;
    setOpenFormModal: any;
    openDeleteModal: any;
    setOpenDeleteModal: any;
};
export default useForms;
