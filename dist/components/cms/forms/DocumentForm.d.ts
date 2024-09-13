import React from 'react';
export type DocumentFormProps = {
    loading?: boolean;
    resource: any;
    parentResource?: any;
    url: string;
    href?: string;
    buttonText?: string;
    fields: any[];
    onSuccessMessage?: string;
    handleSuccess?: (resource: any) => void;
    inputOptions?: Record<string, React.FC>;
    inputParams?: Record<string, any>;
};
declare const DocumentForm: React.FC<DocumentFormProps>;
export default DocumentForm;
