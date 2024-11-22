import React from 'react';
import { SyntheticEventType } from 'frontend-js';
type SelectInputPropsType = {
    errors?: any;
    label?: string;
    direction?: 'column' | 'row';
    name: string;
    value: string;
    placeholder?: string;
    options?: {
        value: string | number | boolean;
        label: string;
    }[];
    handleChange: (e: SyntheticEventType) => void;
    info?: string;
};
export default function SelectInput({ label, direction, name, value, options, handleChange, info, }: SelectInputPropsType): React.JSX.Element;
export {};
