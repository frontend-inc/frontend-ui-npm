import React from 'react';
import { SyntheticEventType } from '../../../types';
type ArrayInputProps = {
    errors?: any;
    value?: any;
    label?: string;
    name: string;
    options?: any[];
    placeholder?: string;
    handleChange: (e: SyntheticEventType) => void;
    direction?: 'row' | 'column';
    freeSolo?: boolean;
};
declare const ArrayInput: React.FC<ArrayInputProps>;
export default ArrayInput;
export declare const sx: {
    root: {};
    textField: {
        '& .MuiOutlinedInput-root': {
            p: string;
            color: string;
            fontSize: (theme: any) => any;
            fontFamily: (theme: any) => any;
            borderRadius: number;
            bgcolor: string;
            border: (theme: any) => string;
            width: string;
            '& fieldset': {
                border: string;
            };
            '&:hover fieldset': {
                border: string;
            };
            '&.Mui-focused fieldset': {
                border: (theme: any) => string;
            };
        };
        root: {
            height: number;
        };
    };
    inputError: {
        '& .MuiOutlinedInput-root': {
            border: string;
            borderColor: string;
        };
    };
    icon: {
        height: number;
        width: number;
        color: string;
    };
    popper: {
        fontWeight: (theme: any) => any;
        fontFamily: (theme: any) => any;
    };
    chip: {
        pr: number;
    };
    label: {
        width: string;
    };
};
