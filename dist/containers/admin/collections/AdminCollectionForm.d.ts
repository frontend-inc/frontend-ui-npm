import React from 'react';
type AdminCollectionFormProps = {
    collection: any;
    handleChange: (e: any) => void;
    handleClick: (template: any) => void;
    errors: any;
};
declare const AdminCollectionForm: React.FC<AdminCollectionFormProps>;
export default AdminCollectionForm;
