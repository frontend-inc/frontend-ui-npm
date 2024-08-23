import React from 'react';
export type DataFormProps = {
    loading: boolean;
    errors: any;
    resource: any;
    handleChange: (ev: any) => void;
    handleRemove: (field: any) => void;
    handleSubmit: () => void;
    fields: any[];
};
declare const DataForm: React.FC<DataFormProps>;
export default DataForm;
