import React from 'react';
export type CollectionFormProps = {
    handle: string;
    resource?: any;
    url: string;
    href?: string;
    buttonText?: string;
    variant?: 'contained' | 'outlined' | 'text';
    fields: any[];
    contentType: string;
    onSuccessMessage?: string;
};
declare const CollectionForm: React.FC<CollectionFormProps>;
export default CollectionForm;
