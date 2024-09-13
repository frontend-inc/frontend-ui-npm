import React from 'react';
type AdminOrderFormProps = {
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
    inputOptions?: Record<string, React.FC>;
    inputParams?: Record<string, any>;
};
declare const AdminOrderForm: React.FC<AdminOrderFormProps>;
export default AdminOrderForm;
