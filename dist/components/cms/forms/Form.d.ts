import React from 'react';
export type FormProps = {
    handle: string;
    url: string;
    buttonText?: string;
    variant?: 'contained' | 'outlined' | 'text';
    fields: any[];
    children?: React.ReactElement[];
};
declare const Form: React.FC<FormProps>;
export default Form;
