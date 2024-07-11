import React from 'react';
import { SyntheticEventType } from '../../../types';
type TabsInputProps = {
    name: string;
    label?: string;
    handleChange: (ev: SyntheticEventType) => void;
    options: {
        icon?: string;
        label?: string;
        value: number | string | boolean;
    }[];
    value: number | string | boolean;
    disablePadding?: boolean;
    disableBorder?: boolean;
    iconPosition?: 'start' | 'end' | 'top' | 'bottom';
    variant?: 'fullWidth' | 'scrollable';
    size?: 'small' | 'large';
    direction?: 'row' | 'column';
    info?: string;
};
declare const TabsInput: React.FC<TabsInputProps>;
export default TabsInput;
