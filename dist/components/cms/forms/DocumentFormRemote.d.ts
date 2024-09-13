import React from 'react';
export type DocumentFormRemoteProps = {
    loading?: boolean;
    resource: any;
    parentResource?: any;
    url: string;
    href?: string;
    buttonText?: string;
    onSuccessMessage?: string;
    handleSuccess?: (resource: any) => void;
};
declare const DocumentFormRemote: React.FC<DocumentFormRemoteProps>;
export default DocumentFormRemote;
