import React from 'react';
interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    required?: boolean;
    error?: boolean;
    disabled?: boolean;
}
declare const FormLabel: React.ForwardRefExoticComponent<FormLabelProps & React.RefAttributes<HTMLLabelElement>>;
export { FormLabel };
