import React from 'react';
import { SyntheticEventType } from '../../../types';
type DateInputProps = {
    errors?: any;
    direction?: 'row' | 'column';
    required?: boolean;
    label?: string;
    name: string;
    value?: string | Date;
    placeholder?: string;
    info?: string;
    handleChange: (ev: SyntheticEventType) => void;
};
export default function DateInput({ errors, direction, required, label, info, name, value, handleChange, placeholder, }: DateInputProps): React.JSX.Element;
export {};
