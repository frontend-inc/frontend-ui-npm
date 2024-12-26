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
export default function SelectInput(props: SelectInputPropsType): React.JSX.Element;
export {};
