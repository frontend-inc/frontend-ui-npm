import React from 'react';
import { SyntheticEventType } from 'frontend-js';
type AdminViewFormProps = {
    errors: any;
    view: any;
    handleChange: (ev: SyntheticEventType) => void;
};
declare const AdminViewForm: React.FC<AdminViewFormProps>;
export default AdminViewForm;
