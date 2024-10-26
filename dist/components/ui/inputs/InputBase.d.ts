import React from 'react';
import { TextInputPropsType } from '../../../types';
type InputBaseProps = TextInputPropsType & {
    debounceDelay?: number;
    disableDebounce?: boolean;
};
export default function InputBase({ type, name, value, handleChange, placeholder, disabled, errors, className, debounceDelay, disableDebounce, }: InputBaseProps): React.JSX.Element;
export {};
