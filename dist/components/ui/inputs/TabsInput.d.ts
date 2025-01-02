import React from 'react';
import { SyntheticEventType } from '../../../types';
type TabsInputProps = {
    label?: string;
    name: string;
    value?: string;
    handleChange: (ev: SyntheticEventType) => void;
    options: {
        icon?: string;
        label?: string;
        value: string;
    }[];
};
export default function TabsInput(props: TabsInputProps): React.JSX.Element;
export {};
