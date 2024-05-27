import React from 'react';
import { SyntheticEventType } from '../../../types';
type BooleanTabsInputProps = {
    value: boolean;
    name: string;
    handleChange: (ev: SyntheticEventType) => void;
    disableBorder?: boolean;
    disablePadding?: boolean;
    label?: string;
    direction?: 'row' | 'column';
};
declare const BooleanTabsInput: React.FC<BooleanTabsInputProps>;
export default BooleanTabsInput;
