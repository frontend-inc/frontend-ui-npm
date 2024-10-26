import React from 'react';
type ColorInputProps = {
    label?: string;
    placeholder?: string;
    name: string;
    value: string;
    handleChange: (e: {
        target: {
            name: string;
            value: string;
        };
    }) => void;
    errors?: any;
    disableTone?: boolean;
    info?: string;
};
export default function ColorInput({ label, name, value, placeholder, disableTone, handleChange, info, }: ColorInputProps): React.JSX.Element;
export {};
