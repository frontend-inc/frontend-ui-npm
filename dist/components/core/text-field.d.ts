import React from 'react';
interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'type'> {
    label?: string;
    helperText?: string;
    error?: boolean;
    fullWidth?: boolean;
    name: string;
    value: string;
    placeholder?: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: 'text' | 'number' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local';
}
declare function TextField({ label, helperText, error, fullWidth, className, id, name, value, handleChange, placeholder, type, ...props }: TextFieldProps): React.JSX.Element;
export { TextField };
