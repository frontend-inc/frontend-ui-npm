import React from 'react';
import { TextInputPropsType } from '../../../types';
type TextAreaProps = Omit<TextInputPropsType, 'type'> & {
    debounceDelay?: number;
    disableDebounce?: boolean;
    rows?: number;
};
export default function TextArea({ label, name, value, handleChange, placeholder, disabled, errors, direction, info, debounceDelay, disableDebounce, rows, }: TextAreaProps): React.JSX.Element;
export {};
