import React from 'react';
type Option = {
    value: string | number;
    label: string;
};
type SelectInputPropsType = {
    label: string;
    info?: string;
    name: string;
    value: string | number;
    options?: Option[];
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function RadioInput({ label, info, name, value, options, handleChange, }: SelectInputPropsType): React.JSX.Element;
export {};
