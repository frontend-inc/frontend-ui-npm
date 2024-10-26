import React from 'react';
interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'> {
    label?: string;
    helperText?: string;
    error?: boolean;
    fullWidth?: boolean;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
declare function TextArea({ label, helperText, error, fullWidth, className, id, name, value, onChange, ...props }: TextAreaProps): React.JSX.Element;
export { TextArea };
