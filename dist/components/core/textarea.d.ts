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
declare function TextArea(props: TextAreaProps): React.JSX.Element;
export { TextArea };
