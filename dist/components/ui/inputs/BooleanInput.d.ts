import React from 'react';
import { SyntheticEventType } from '../../../types';
type BooleanInputProps = {
    value: boolean;
    name: string;
    handleChange: (ev: SyntheticEventType) => void;
    disableBorder?: boolean;
    disablePadding?: boolean;
    label?: string;
    direction?: 'row' | 'column';
    size?: 'small' | 'large';
    info?: string;
};
declare const BooleanInput: React.FC<BooleanInputProps>;
export default BooleanInput;
