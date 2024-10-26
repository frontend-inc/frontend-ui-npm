import React from 'react';
import { SyntheticEventType } from '../../../../types';
type TabsWhereInputProps = {
    name: string;
    handleChange: (ev: SyntheticEventType) => void;
    value: string;
};
export default function TabsWhereInput({ name, handleChange, value, }: TabsWhereInputProps): React.JSX.Element;
export {};
