import React from 'react';
export type FormProps = {
    loading?: boolean;
    resource: any;
    parentResource?: any;
    url: string;
    href?: string;
    buttonText?: string;
    fields: any[];
    onSuccessMessage?: string;
    handleSuccess?: (resource: any) => void;
};
declare const Form: React.FC<FormProps>;
export default Form;
