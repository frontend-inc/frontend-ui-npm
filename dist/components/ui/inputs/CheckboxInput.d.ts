import React from 'react';
import { SyntheticEventType } from '../../../types';
type CheckboxInputProps = {
    name: string;
    value: boolean;
    placeholder: string;
    label?: string;
    handleChange: (e: SyntheticEventType) => void;
    disableBorder?: boolean;
    info?: string;
};
export default function CheckboxInput(props: CheckboxInputProps): React.JSX.Element;
export {};
