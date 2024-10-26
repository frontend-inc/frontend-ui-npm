import React from 'react';
import { SyntheticEventType } from '../../../types';
type ArrayInputProps = {
    errors?: any;
    value?: string[];
    label?: string;
    name: string;
    placeholder?: string;
    handleChange: (e: SyntheticEventType) => void;
    direction?: 'row' | 'column';
    info?: string;
};
export default function ArrayInput({ errors, label, name, placeholder, handleChange, direction, info, value, }: ArrayInputProps): React.JSX.Element;
export {};
