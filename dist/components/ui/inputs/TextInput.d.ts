import React from 'react';
import { TextInputPropsType } from '../../../types';
type TextInputProps = TextInputPropsType & {
    debounceDelay?: number;
    disableDebounce?: boolean;
};
export default function TextInput({ label, type, name, value, handleChange, placeholder, disabled, errors, direction, info, className, debounceDelay, disableDebounce, }: TextInputProps): React.JSX.Element;
export {};
