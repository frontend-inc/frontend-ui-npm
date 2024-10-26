import React from 'react';
import { InputPropsType } from '../../../types';
type SwitchInputProps = InputPropsType & {
    disableBorder?: boolean;
};
export default function SwitchInput({ name, value, disableBorder, label, placeholder, handleChange, info, }: SwitchInputProps): React.JSX.Element;
export {};
