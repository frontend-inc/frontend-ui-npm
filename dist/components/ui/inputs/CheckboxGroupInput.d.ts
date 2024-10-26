import React from 'react';
import { OptionType, SyntheticEventType } from '../../../types';
type CheckboxGroupInputProps = {
    errors: any;
    name: string;
    label: string;
    value?: string[];
    options: OptionType[];
    info?: string;
    handleChange: (e: SyntheticEventType) => void;
};
export default function CheckboxGroupInput({ errors, label, name, value: values, options, handleChange, info, }: CheckboxGroupInputProps): React.JSX.Element;
export {};
