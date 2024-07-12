import React from 'react';
type FormParams = {
    parentResource?: any;
};
declare const useForms: (params?: FormParams) => {
    loading: any;
    errors: Record<string, any>;
    resource: any;
    setResource: (value: any) => void;
    handleAdd: () => any;
    handleEdit: (item: any) => any;
    handleSubmit: () => Promise<any>;
    handleDelete: () => Promise<any>;
    handleDeleteClick: (item: any) => any;
    handleRemove: (name: any) => Promise<any>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    openEdit: boolean;
    setOpenEdit: (value: boolean) => void;
    openDelete: boolean;
    setOpenDelete: (value: boolean) => void;
};
export default useForms;
