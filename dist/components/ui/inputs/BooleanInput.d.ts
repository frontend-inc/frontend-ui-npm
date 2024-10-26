import React from 'react';
import { SyntheticEventType } from '../../../types';
type BooleanInputProps = {
    value: boolean;
    name: string;
    handleChange: (ev: SyntheticEventType) => void;
    label?: string;
    info?: string;
};
declare const BooleanInput: React.FC<BooleanInputProps>;
export default BooleanInput;
