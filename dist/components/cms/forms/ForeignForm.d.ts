import React from 'react';
export type ForeignFormProps = {
    handle: string;
    url: string;
    foreignUrl?: string;
    buttonText?: string;
    variant?: 'contained' | 'outlined' | 'text';
    fields: any[];
    children?: React.ReactElement[];
};
declare const ForeignForm: React.FC<ForeignFormProps>;
export default ForeignForm;
