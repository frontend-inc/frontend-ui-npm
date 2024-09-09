import React from 'react';
export type ResourceFormProps = {
    open: boolean;
    handleClose: () => void;
    loading: boolean;
    errors: any;
    resource: any;
    setResource: (resource: any) => void;
    handleChange: (ev: any) => void;
    handleRemove?: (string: any) => void;
    handleAddAttachment: (name: string, attachmentId: number) => void;
    handleRemoveAttachment: (name: string) => void;
    handleSubmit: () => void;
    handleReload: () => void;
    fields: any[];
};
declare const ResourceForm: React.FC<ResourceFormProps>;
export default ResourceForm;
