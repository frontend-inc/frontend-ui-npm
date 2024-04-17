import React from 'react';
import { SyntheticEventType } from '../../../types';
type CheckboxInputProps = {
    name: string;
    value: boolean;
    placeholder: string;
    label?: string;
    handleChange: (e: SyntheticEventType) => void;
    disableBorder?: boolean;
};
declare const CheckboxInput: React.FC<CheckboxInputProps>;
export default CheckboxInput;
