import React from 'react';
export type CollectionFormProps = {
    handle: string;
    url: string;
    buttonText?: string;
    variant?: 'contained' | 'outlined' | 'text';
    fields: any[];
    onSuccessMessage?: string;
};
declare const CollectionForm: React.FC<CollectionFormProps>;
export default CollectionForm;
