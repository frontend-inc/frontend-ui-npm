import React from 'react';
export type CollectionFormProps = {
    handle: string;
    url: string;
    buttonText?: string;
    variant?: 'contained' | 'outlined' | 'text';
    fields: any[];
    children?: React.ReactElement[];
};
declare const CollectionForm: React.FC<CollectionFormProps>;
export default CollectionForm;
