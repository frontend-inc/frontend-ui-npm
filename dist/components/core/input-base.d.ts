import React from 'react';
export interface InputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    fullWidth?: boolean;
}
declare const InputBase: React.ForwardRefExoticComponent<InputBaseProps & React.RefAttributes<HTMLInputElement>>;
export { InputBase };
