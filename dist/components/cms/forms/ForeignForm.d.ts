import React from 'react';
type ForeignFormProps = {
    handle: string;
    title?: string;
    label?: string;
    url: string;
    foreignUrl?: string;
    buttonText?: string;
    variant?: 'contained' | 'outlined' | 'text';
    fields: any[];
    children?: React.ReactElement[];
};
declare const ForeignForm: React.FC<ForeignFormProps>;
export default ForeignForm;
