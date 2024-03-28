import React from 'react';
type FormProps = {
    handle: string;
    title?: string;
    url: string;
    buttonText?: string;
    variant?: 'contained' | 'outlined' | 'text';
    fields: any[];
    children?: React.ReactElement[];
};
declare const Form: React.FC<FormProps>;
export default Form;
