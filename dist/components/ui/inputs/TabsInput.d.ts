import React from 'react';
import { SyntheticEventType } from '../../../types';
type TabsInputProps = {
    name: string;
    label?: string;
    handleChange: (ev: SyntheticEventType) => void;
    options: {
        icon?: string;
        label?: string;
        value: number;
    }[];
    value: number;
    disablePadding?: boolean;
    disableBorder?: boolean;
    iconPosition?: 'start' | 'end' | 'top' | 'bottom';
    variant?: 'fullWidth' | 'scrollable';
    size?: 'small' | 'large';
    direction?: 'row' | 'column';
    info?: string;
    debounceDelay?: number;
    disableDebounce?: boolean;
};
declare const TabsInput: React.FC<TabsInputProps>;
export default TabsInput;
