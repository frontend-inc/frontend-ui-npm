import React from 'react';
import { SyntheticEventType } from '../../../types';
type TabsSwitchInputProps = {
    value: boolean;
    name: string;
    handleChange: (ev: SyntheticEventType) => void;
    disableBorder?: boolean;
    disablePadding?: boolean;
    label?: string;
    direction?: 'row' | 'column';
    size?: 'small' | 'large';
};
declare const TabsSwitchInput: React.FC<TabsSwitchInputProps>;
export default TabsSwitchInput;
