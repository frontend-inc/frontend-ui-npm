import React from 'react';
export type ForeignFormProps = {
    handle: string;
    url: string;
    foreignUrl?: string;
    navigateUrl?: string;
    buttonText?: string;
    variant?: 'contained' | 'outlined' | 'text';
    fields: any[];
    onSuccessMessage?: string;
};
declare const ForeignForm: React.FC<ForeignFormProps>;
export default ForeignForm;
