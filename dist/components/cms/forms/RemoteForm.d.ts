import React from 'react';
export type RemoteFormProps = {
    loading?: boolean;
    resource: any;
    parentResource?: any;
    url: string;
    href?: string;
    buttonText?: string;
    onSuccessMessage?: string;
    handleSuccess?: (resource: any) => void;
};
declare const RemoteForm: React.FC<RemoteFormProps>;
export default RemoteForm;
