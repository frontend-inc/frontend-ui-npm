import React from 'react';
export type CollectionFormProps = {
    resource: any;
    url: string;
    foreignUrl?: string;
    href?: string;
    buttonText?: string;
    variant?: 'contained' | 'outlined' | 'text';
    fields: any[];
    filterRelated?: boolean;
    onSuccessMessage?: string;
};
declare const CollectionForm: React.FC<CollectionFormProps>;
export default CollectionForm;
