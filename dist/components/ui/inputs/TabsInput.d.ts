import React from 'react';
import { SyntheticEventType } from '../../../types';
type TabsInputProps = {
    name: string;
    label?: string;
    handleChange: (ev: SyntheticEventType) => void;
    options: {
        icon?: string;
        label?: string;
        value: string;
    }[];
    value: string;
    info?: string;
};
export default function TabsInput({ name, label, handleChange, options, value, info, }: TabsInputProps): React.JSX.Element;
export {};
