import React from 'react';
export type ResourceFormProps = {
    open: boolean;
    handleClose: () => void;
    loading: boolean;
    errors: any;
    resource: any;
    setResource: (resource: any) => void;
    handleChange: (ev: any) => void;
    handleRemove: (field: any) => void;
    handleSubmit: () => void;
    fields: any[];
};
declare const ResourceForm: React.FC<ResourceFormProps>;
export default ResourceForm;
