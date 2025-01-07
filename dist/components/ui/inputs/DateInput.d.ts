import React from 'react';
import { DateValue } from '@internationalized/date';
import { SyntheticEventType } from '../../../types';
type DateInputProps = {
    errors?: any;
    direction?: 'row' | 'column';
    required?: boolean;
    label?: string;
    name: string;
    value?: DateValue;
    placeholder?: string;
    handleChange: (ev: SyntheticEventType) => void;
};
export default function DateInput(props: DateInputProps): React.JSX.Element;
export {};
