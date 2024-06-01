import React from 'react';
export type CollectionFormProps = {
    handle: string;
    resource?: any;
    href?: string;
    buttonText?: string;
    variant?: 'contained' | 'outlined' | 'text';
    fields: any[];
    url: string;
    onSuccessMessage?: string;
};
declare const CollectionForm: React.FC<CollectionFormProps>;
export default CollectionForm;
