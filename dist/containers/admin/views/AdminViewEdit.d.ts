import React from 'react';
import { SyntheticEventType } from 'frontend-js';
type AdminViewEditProps = {
    loading: boolean;
    errors: any;
    open: boolean;
    view: any;
    handleClose: () => void;
    handleChange: (ev: SyntheticEventType) => void;
    handleSubmit: () => void;
};
declare const AdminViewEdit: React.FC<AdminViewEditProps>;
export default AdminViewEdit;
