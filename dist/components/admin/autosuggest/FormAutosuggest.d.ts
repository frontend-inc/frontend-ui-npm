import React from 'react';
type FormAutosuggestProps = {
    errors?: any;
    value: any;
    name?: string;
    label?: string;
    handleChange: any;
    query?: any;
    direction?: 'row' | 'column';
    placeholder?: string;
};
declare const FormAutosuggest: React.FC<FormAutosuggestProps>;
export default FormAutosuggest;
