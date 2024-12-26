import React from 'react';
export type ResourceFormProps = {
    title?: string;
    open: boolean;
    handleClose: () => void;
    loading: boolean;
    errors: any;
    resource: any;
    setResource: (resource: any) => void;
    handleChange: (ev: any) => void;
    handleRemove?: (string: any) => void;
    handleAddAttachment?: (name: string, attachmentId: number) => void;
    handleRemoveAttachment?: (name: string) => void;
    handleSubmit: () => void;
    handleReload: () => void;
    inputOptions?: any;
    inputParams?: any;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};
export type FormProps = ResourceFormProps & {
    fields: any[];
};
declare const ResourceForm: React.FC<FormProps>;
export default ResourceForm;
