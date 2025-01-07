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
export default function CheckboxGroupInput(props: CheckboxGroupInputProps): React.JSX.Element;
export {};
